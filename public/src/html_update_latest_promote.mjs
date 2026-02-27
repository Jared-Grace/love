import { app_shared_latest_build } from "../../../love/public/src/app_shared_latest_build.mjs";
import { html_public_from_latest } from "../../../love/public/src/html_public_from_latest.mjs";
export async function html_update_latest_promote(search) {
  await app_shared_latest_build(search);
  await html_public_from_latest(search);
}
