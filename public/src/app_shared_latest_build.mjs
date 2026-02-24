import { webpack_build } from "../../../love/public/src/webpack_build.mjs";
import { html_update_latest_webpack } from "../../../love/public/src/html_update_latest_webpack.mjs";
export async function app_shared_latest_build(search) {
  let result = await webpack_build(search);
  await html_update_latest_webpack(search);
}
