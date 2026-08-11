import { arguments_assert } from "./arguments_assert.mjs";
import { text_combine } from "./text_combine.mjs";
import { path_join } from "./path_join.mjs";
import { path_modified_ms } from "./path_modified_ms.mjs";
import { equal } from "./equal.mjs";
import { property_get } from "./property_get.mjs";
import { function_name_to_path_relative } from "./function_name_to_path_relative.mjs";
import { catch_null } from "./catch_null.mjs";
import { greater_than } from "./greater_than.mjs";
import { list_map_unordered_async } from "./list_map_unordered_async.mjs";
import { list_includes } from "./list_includes.mjs";
export async function webpack_watch_bundle_stale_is(
  ad,
  a_name_of,
  dev_relative,
) {
  arguments_assert(arguments, 3);
  let a_name = a_name_of(ad);
  let file = text_combine(a_name, ".js");
  let bundle = path_join([dev_relative, file]);
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
