import { apps_names_dev } from "./apps_names_dev.mjs";
import { app_shared_dev_bundle_stale_is } from "./app_shared_dev_bundle_stale_is.mjs";
import { catch_ignore_async } from "./catch_ignore_async.mjs";
import { list_map_unordered_async } from "./list_map_unordered_async.mjs";
import { list_filter_null_not_is } from "./list_filter_null_not_is.mjs";
import { app_shared_dev_build_multiple } from "./app_shared_dev_build_multiple.mjs";
export async function app_shared_dev_stale_rebuild() {
  "rebuild every dev bundle that has fallen behind its source, so advancing prod never leaves the local dev apps behind; the common case rebuilds nothing (just a fast source-vs-bundle scan). A staleness check that throws for one app is ignored, so a single odd app never blocks a deploy.";
  let a_names = await apps_names_dev();
  async function name_if_stale(a_name) {
    async function check() {
      let stale = await app_shared_dev_bundle_stale_is(a_name);
      if (stale) {
        return a_name;
      }
      return null;
    }
    let r = await catch_ignore_async(check);
    return r;
  }
  let mapped = await list_map_unordered_async(a_names, name_if_stale);
  let stale = list_filter_null_not_is(mapped);
  await app_shared_dev_build_multiple(stale);
}
