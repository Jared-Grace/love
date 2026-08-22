import { fn_name } from "./fn_name.mjs";
import { app_shared_name_dev_bundle_path } from "./app_shared_name_dev_bundle_path.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { path_modified_ms } from "./path_modified_ms.mjs";
import { equal } from "./equal.mjs";
import { property_get } from "./property_get.mjs";
import { function_name_to_path_relative } from "./function_name_to_path_relative.mjs";
import { catch_null } from "./catch_null.mjs";
import { greater_than } from "./greater_than.mjs";
import { list_map_unordered_async } from "./list_map_unordered_async.mjs";
import { list_includes } from "./list_includes.mjs";
export async function webpack_watch_bundle_stale_is(ad, a_name_of) {
  arguments_assert(arguments, 2);
  ("Whether one app's dev bundle is older than something it is built from, and so is a reading about the past.");
  ("Which folder to look in used to be handed in, one folder for all of them, and that was wrong for every app that does not live in this repository: the dev pages are gathered from all of them, so an app next door was weighed against a file in this repository's dev folder that nothing would ever put there. It came out missing, so the app came out stale, so it was rebuilt - into its own repository, where the next asking would not look either. It is asked of ",
    fn_name("app_shared_name_dev_bundle_path"),
    " per app now, and there is no folder to hand in.");
  let a_name = a_name_of(ad);
  let bundle = await app_shared_name_dev_bundle_path(a_name);
  if (equal(bundle, null)) {
    return true;
  }
  let bundle_ms = await path_modified_ms(bundle);
  if (equal(bundle_ms, null)) {
    return true;
  }
  let deps = property_get(ad, "deps");
  async function dep_stale_is(dep) {
    function resolve() {
      let p = function_name_to_path_relative(dep);
      return p;
    }
    let path = catch_null(resolve);
    if (equal(path, null)) {
      return true;
    }
    let ms = await path_modified_ms(path);
    if (equal(ms, null)) {
      return false;
    }
    let newer = greater_than(ms, bundle_ms);
    return newer;
  }
  let flags = await list_map_unordered_async(deps, dep_stale_is);
  let stale = list_includes(flags, true);
  return stale;
}
