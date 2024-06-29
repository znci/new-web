import { defineConfig, envField } from "astro/config";
import solidJs from "@astrojs/solid-js";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  site: "https://znci.dev",
  integrations: [solidJs()],
  output: "hybrid",
  adapter: cloudflare(),

  experimental: {
    env: {
      schema: {
        WEBHOOK_URL: envField.string({
          context: "server",
          access: "secret",
        }),
      },
    },
  },
});
