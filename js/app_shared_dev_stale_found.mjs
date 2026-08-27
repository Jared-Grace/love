import { arguments_assert } from "./arguments_assert.mjs";
import { apps_names_dev } from "./apps_names_dev.mjs";
import { app_shared_name_dev_bundle_path } from "./app_shared_name_dev_bundle_path.mjs";
import { null_is } from "./null_is.mjs";
import { file_exists } from "./file_exists.mjs";
import { not } from "./not.mjs";
import { list_add } from "./list_add.mjs";
import { app_shared_dev_stamp_fingerprint_read } from "./app_shared_dev_stamp_fingerprint_read.mjs";
import { app_shared_dev_sources_fingerprint } from "./app_shared_dev_sources_fingerprint.mjs";
import { equal } from "./equal.mjs";
import { each_async } from "./each_async.mjs";
export async function app_shared_dev_stale_found() {
  arguments_assert(arguments, 0);
  ("Every app whose dev bundle no longer stands for the sources it was built from, every app holding a bundle nothing was ever recorded about, and every app whose bundle was opened at all. Read-only.");
  ("An app with no bundle on disk is passed over rather than counted against, because a page can sit in the dev folder with its script written inside it and be no bundle at all. There is then nothing that could be out of date.");
  ("THE OPENED ONES COME BACK AS A LIST AND NOT AS A NUMBER. Both fault lists being empty is what a clean sweep says and also what a sweep that has stopped visiting anything says, so what was reached has to travel out beside them - and a list can be looked at afterwards to see which apps those were, where a count can only be believed.");
  let names = await apps_names_dev();
  let opened = [];
  let stale = [];
  let unrecorded = [];
  async function look(a_name) {
    let bundle = await app_shared_name_dev_bundle_path(a_name);
    let nowhere = null_is(bundle);
    if (nowhere) {
      return;
    }
    let built = await file_exists(bundle);
    if (not(built)) {
      return;
    }
    list_add(opened, a_name);
    let recorded = await app_shared_dev_stamp_fingerprint_read(a_name);
    let never = null_is(recorded);
    if (never) {
      list_add(unrecorded, a_name);
      return;
    }
    let now = await app_shared_dev_sources_fingerprint(a_name);
    let same = equal(now, recorded);
    if (same) {
      return;
    }
    list_add(stale, a_name);
  }
  await each_async(names, look);
  let r = {
    opened,
    stale,
    unrecorded,
  };
  return r;
}
