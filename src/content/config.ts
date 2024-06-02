import { defineCollection, z } from "astro:content";

export const collections = {
  members: defineCollection({
    type: "content",
    schema: z.object({
      name: z.string(),
      regionEmoji: z.string(),
      role: z.string(),
      discord: z.string().startsWith("@"),
      email: z.string().email().optional(), // still waiting for the day everyone gets an email
      github: z.string(),
      gitlab: z.string().optional(),
      youtube: z.string().optional(),
      website: z.string().optional(), // this is not a url type because https:// is added during rendering
      joinDate: z.string(),
      timezone: z.string(),
      userFriendlyTimezone: z.string(),
    }),
  }),
  projects: defineCollection({
    type: "content",
    schema: z.object({
      name: z.string(),
      tags: z.array(
        z.object({
          tag: z.enum(["OSS", "CSS"]),
          color: z.enum(["green", "red"]),
        })
      ),
      icon: z.string().url(),
      url: z.string().url(),
    }),
  }),
};
