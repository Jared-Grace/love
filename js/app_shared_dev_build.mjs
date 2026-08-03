import { webpack_build_dev } from "./webpack_build_dev.mjs";
import { html_update_dev_webpack } from "./html_update_dev_webpack.mjs";
export async function app_shared_dev_build(search) {
  "Builds one app for dev and writes the page that loads it, which is the whole of making a change visible in the browser.";
  await webpack_build_dev(search);
  await html_update_dev_webpack(search);
}
