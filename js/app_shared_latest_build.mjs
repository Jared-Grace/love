import { qa_app_sending_refuse_assert } from "./qa_app_sending_refuse_assert.mjs";
import { webpack_build } from "./webpack_build.mjs";
import { html_update_latest_webpack } from "./html_update_latest_webpack.mjs";
export async function app_shared_latest_build(search) {
  "Builds one app and puts what came out where the next stage reads from, so the built pieces and the page that names them move together.";
  await qa_app_sending_refuse_assert(search);
  await webpack_build(search);
  await html_update_latest_webpack(search);
}
