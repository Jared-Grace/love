import { file_name_js } from "./file_name_js.mjs";
import { folder_public_join } from "./folder_public_join.mjs";
import { app_shared_name_dev_text } from "./app_shared_name_dev_text.mjs";
import { app_shared_name_latest_text } from "./app_shared_name_latest_text.mjs";
import { path_join } from "./path_join.mjs";
import { path_modified_ms } from "./path_modified_ms.mjs";
import { null_is } from "./null_is.mjs";
export async function app_shared_dev_bundle_stale_is(a_name) {
  "the dev bundle lags the latest (staging) bundle when it is missing, or older than it — a prod build that skipped the dev rebuild leaves the local dev app behind, which is the drift we heal before deploying";
  let file = file_name_js(a_name);
  let dev = path_join([folder_public_join(app_shared_name_dev_text()), file]);
  let dev_ms = await path_modified_ms(dev);
  let dev_missing = null_is(dev_ms);
  if (dev_missing) {
    return true;
  }
  let latest = path_join([
    folder_public_join(app_shared_name_latest_text()),
    file,
  ]);
  let latest_ms = await path_modified_ms(latest);
  let latest_missing = null_is(latest_ms);
  if (latest_missing) {
    "no staging bundle for this app to lag behind, so there is nothing to rebuild dev against";
    return false;
  }
  let stale = latest_ms > dev_ms;
  return stale;
}
