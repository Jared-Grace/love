import { app_shared_build } from "./app_shared_build.mjs";
import { html_public_from_latest } from "./html_public_from_latest.mjs";
export async function html_update_latest_promote(search) {
  "build the app (latest AND dev, together) before promoting the latest bundle to prod, so shipping an app to prod never leaves its local dev copy behind";
  await app_shared_build(search);
  await html_public_from_latest(search);
}
