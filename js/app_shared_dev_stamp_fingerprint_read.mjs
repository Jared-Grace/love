import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_dev_stamp_path } from "./app_shared_dev_stamp_path.mjs";
import { file_exists } from "./file_exists.mjs";
import { not } from "./not.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { property_get } from "./property_get.mjs";
export async function app_shared_dev_stamp_fingerprint_read(a_name) {
  arguments_assert(arguments, 1);
  ("$plain a_name");
  ("The word one app's dev bundle was recorded as built out of, or nothing at all when no such record was ever written for it.");
  ("Nothing is a real answer here and not a failure to look: an app built before there was any record to keep has a bundle and no record of it, and that is a different thing from a bundle whose record disagrees with what is on disk now.");
  let p = app_shared_dev_stamp_path(a_name);
  let there = await file_exists(p);
  if (not(there)) {
    return null;
  }
  let stamp = await file_read_json(p);
  let fingerprint = property_get(stamp, "fingerprint");
  return fingerprint;
}
