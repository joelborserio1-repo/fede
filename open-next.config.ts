import { defineCloudflareConfig } from "@opennextjs/cloudflare";

/**
 * OpenNext adapter config for deploying this Next.js app as a Cloudflare Worker.
 * Defaults are fine for a marketing site. Add an R2/KV incremental cache here
 * later if ISR/on-demand revalidation is introduced.
 */
export default defineCloudflareConfig();
