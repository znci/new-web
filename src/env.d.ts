/// <reference path="../.astro/env.d.ts" />
/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

type KVNamespace = import("@cloudflare/workers-types").KVNamespace;
type ENV = {
  BLOCKLIST_KV: KVNamespace;
};
