import { arguments_assert } from "./arguments_assert.mjs";
import { apps_names_dev } from "./apps_names_dev.mjs";
import { folder_web_dev } from "./folder_web_dev.mjs";
import { file_name_js } from "./file_name_js.mjs";
import { path_join } from "./path_join.mjs";
import { file_exists } from "./file_exists.mjs";
import { not } from "./not.mjs";
import { list_add } from "./list_add.mjs";
import { app_shared_dev_stamp_fingerprint_read } from "./app_shared_dev_stamp_fingerprint_read.mjs";
import { null_is } from "./null_is.mjs";
import { app_shared_dev_sources_fingerprint } from "./app_shared_dev_sources_fingerprint.mjs";
import { equal } from "./equal.mjs";
import { each_async } from "./each_async.mjs";
export async function app_shared_dev_stale_found() {
  arguments_assert(arguments, 0);
  ("Every app whose dev bundle no longer stands for the sources it was built from, every app holding a bundle nothing was ever recorded about, and every app whose bundle was opened at all. Read-only.");
  ("An app with no bundle on disk is passed over rather than counted against anybody. Never having built a page is an ordinary state and not a fault, and a bundle that is not there cannot show anybody anything out of date.");
  ("THE BUNDLE IS LOOKED FOR FROM WHERE THE READER IS STANDING, not spelled the whole way down from the top of the disk. The check that asks this runs inside a fresh copy of the repository, and a whole-disk address reaches straight past that copy into the working folder - so the bundle would be read from one place and the sources it is compared against from another, and a bundle a neighbour had just built and not yet committed would be held against a commit that has never seen it. Read from where the reader stands, both halves come from the same copy and the answer is about one moment.");
  ("The cost of that is apps kept in a neighbouring repository, whose bundles are not under this folder and so are passed over. That is the same silence the comparison itself would have to keep anyway: their sources are not under this folder either, so there is nothing here to compare a bundle of theirs against.");
  ("THE OPENED ONES COME BACK AS A LIST AND NOT AS A NUMBER. Both fault lists being empty is what a clean sweep says and also what a sweep that has stopped visiting anything says, and a reader has to be able to tell those apart without running it again.");
  let names = await apps_names_dev();
  let opened = [];
  let stale = [];
  let unrecorded = [];
  async function look(a_name) {
    let folder = folder_web_dev();
    let file = file_name_js(a_name);
    let bundle = path_join([folder, file]);
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
