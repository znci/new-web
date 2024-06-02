import type { VercelRequest, VercelResponse } from "@vercel/node";
import { z } from "zod";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    req.body;
  } catch (error) {
    return res
      .status(400)
      .json({ error: "There is malformed JSON in your request." });
  }

  let body = req.body;

  try {
    body = z
      .object({
        name: z.string(),
        email: z.string().email(),
        message: z.string(),
      })
      .parse(body);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }

  try {
    await fetch(
      "https://discord.com/api/webhooks/1146262939179954267/ztnvqdSuB3Ehph3HU4aCupoH8gER_-0_KsvJ7IdQGtBcE4o9g4ecvuf9fAHr0f5bowIz",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          content: null,
          embeds: [
            {
              title: "There is a new message from the contact form.",
              color: null,
              fields: [
                {
                  name: "Name",
                  value: body.name,
                },
                {
                  name: "Email",
                  value: body.email,
                },
                {
                  name: "Message",
                  value: body.message,
                },
              ],
              author: {
                name: body.name,
              },
            },
          ],
          attachments: [],
        }),
      }
    );
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }

  if (req.query.redirect) {
    console.log(req.query.redirect);
    return res.redirect("/api/sendto?redirect=" + req.query.redirect);
  }

  return res.status(200).json({ success: true });
}
