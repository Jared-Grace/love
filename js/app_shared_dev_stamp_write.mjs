import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_dev_sources_fingerprint } from "./app_shared_dev_sources_fingerprint.mjs";
import { app_shared_dev_stamp_path } from "./app_shared_dev_stamp_path.mjs";
import { file_overwrite_json } from "./file_overwrite_json.mjs";
export async function app_shared_dev_stamp_write(a_name) {
  arguments_assert(arguments, 1);
  ("$plain a_name");
  ("Writes down what one app's dev bundle has just been built out of, so a later reading can say whether the bundle beside those sources still stands for them.");
  ("Written by the build itself and never by hand, because the one moment the record is certainly true is the moment the bundle was made. A record written at any other time says the bundle matches when nobody looked, which is the very thing it exists to stop being assumed.");
  ("THE RECORD IS REPLACED WHERE IT STANDS RATHER THAN REFUSED FOR BEING THERE ALREADY. An app is built over and over, so the second build is the ordinary case and not a mistake to be caught; a writer that stops at a record already on disk turns every rebuild after the first into a throw, and worse, that throw lands after the bundle has been written, leaving a fresh bundle beside a record of the sources it no longer stands for - the exact disagreement the record was added to make impossible.");
  let fingerprint = await app_shared_dev_sources_fingerprint(a_name);
  let stamp = {
    a_name,
    fingerprint,
  };
  let p = app_shared_dev_stamp_path(a_name);
  await file_overwrite_json(p, stamp);
  return stamp;
}
