import type { VercelRequest, VercelResponse } from "@vercel/node";
import { z } from "zod";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  let query = req.query;

  try {
    query = z
      .object({
        redirect: z.string().url(),
      })
      .parse(req.query);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }

  res.end(/* html */ `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta http-equiv="refresh" content="0; url=${query.redirect}" />
        <title>Redirecting...</title>
      </head>
      <body>
      </body>
    </html>`);
}
