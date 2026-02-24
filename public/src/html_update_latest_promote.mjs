import { html_public_from_latest } from "../../../love/public/src/html_public_from_latest.mjs";
import { html_update_latest_vite } from "../../../love/public/src/html_update_latest_vite.mjs";
export async function html_update_latest_promote(search) {
  await html_update_latest_vite(search);
  await html_public_from_latest(search);
}
