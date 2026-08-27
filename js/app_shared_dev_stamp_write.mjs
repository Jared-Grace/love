import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_dev_sources_fingerprint } from "./app_shared_dev_sources_fingerprint.mjs";
import { app_shared_dev_stamp_path } from "./app_shared_dev_stamp_path.mjs";
import { file_write_json } from "./file_write_json.mjs";
export async function app_shared_dev_stamp_write(a_name) {
  arguments_assert(arguments, 1);
  ("$plain a_name");
  ("Writes down what one app's dev bundle has just been built out of, so a later reading can say whether the bundle beside those sources still stands for them.");
  ("Written by the build itself and never by hand, because the one moment the record is certainly true is the moment the bundle was made. A record written at any other time says the bundle matches when nobody looked, which is the very thing it exists to stop being assumed.");
  let fingerprint = await app_shared_dev_sources_fingerprint(a_name);
  let stamp = {
    a_name,
    fingerprint,
  };
  let p = app_shared_dev_stamp_path(a_name);
  await file_write_json(p, stamp);
  return stamp;
}
