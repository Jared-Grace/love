import { html_update_latest_webpack } from "../../../love/public/src/html_update_latest_webpack.mjs";
import { html_public_from_latest } from "../../../love/public/src/html_public_from_latest.mjs";
export async function html_update_latest_promote(search) {
  await html_update_latest_webpack(search);
  await html_public_from_latest(search);
}
