import { file_name_js } from "./file_name_js.mjs";
import { folder_public_join } from "./folder_public_join.mjs";
import { app_shared_name_dev_text } from "./app_shared_name_dev_text.mjs";
import { path_join } from "./path_join.mjs";
import { path_modified_ms } from "./path_modified_ms.mjs";
import { null_is } from "./null_is.mjs";
import { app_shared_name_main } from "./app_shared_name_main.mjs";
import { app_shared_context_initialize } from "./app_shared_context_initialize.mjs";
import { function_dependencies } from "./function_dependencies.mjs";
import { function_name_to_path } from "./function_name_to_path.mjs";
import { catch_null } from "./catch_null.mjs";
import { list_map_unordered_async } from "./list_map_unordered_async.mjs";
import { list_includes } from "./list_includes.mjs";
export async function app_shared_dev_bundle_stale_is(a_name) {
  "the dev bundle is stale when it is missing, or older than any source file it is built from — the same source-vs-bundle test the dev watcher uses. Comparing against the latest (staging) bundle would not work: dev and latest are built by independent pipelines, so their relative timestamps carry no staleness signal.";
  let file = file_name_js(a_name);
  let bundle = path_join([folder_public_join(app_shared_name_dev_text()), file]);
  let bundle_ms = await path_modified_ms(bundle);
  let bundle_missing = null_is(bundle_ms);
  if (bundle_missing) {
    return true;
  }
  let main = await app_shared_name_main(a_name);
  let deps = await function_dependencies([
    main,
    app_shared_context_initialize.name,
  ]);
  async function dep_newer_is(dep) {
    function resolve() {
      return function_name_to_path(dep);
    }
    let path = catch_null(resolve);
    let unresolved = null_is(path);
    if (unresolved) {
      "a dependency we cannot place on disk might have changed unseen, so treat it as newer to stay on the safe side and rebuild";
      return true;
    }
    let ms = await path_modified_ms(path);
    let gone = null_is(ms);
    if (gone) {
      return false;
    }
    let newer = ms > bundle_ms;
    return newer;
  }
  let flags = await list_map_unordered_async(deps, dep_newer_is);
  let stale = list_includes(flags, true);
  return stale;
}
