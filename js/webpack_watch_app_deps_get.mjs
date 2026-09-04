import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_name_main } from "./app_shared_name_main.mjs";
import { fn_name } from "./fn_name.mjs";
import { function_dependencies_bundled } from "./function_dependencies_bundled.mjs";
import { catch_null_async } from "./catch_null_async.mjs";
export async function webpack_watch_app_deps_get(a_name) {
  "Every function one app's page is built out of - its own entry point plus the shared start-up it always reaches - so a watcher knows which files a rebuild of that app has to be triggered by.";
  "IT ASKS THE BUILDER'S QUESTION AND NOT THE PAGE'S. What is wanted here is everything a rebuild PUTS OUT, which includes the pieces set aside beside the main file, so it follows a fetch-while-running import as readily as one said at the top. Measured 2026-09-04: while it asked the narrower question it named about five hundred functions for the picture Bible and not one picture band among them, so every band could be rewritten and the staleness check would still say the app was up to date.";
  arguments_assert(arguments, 1);
  async function lambda() {
    let main = await app_shared_name_main(a_name);
    let f_name = fn_name("app_shared_context_initialize");
    let deps = await function_dependencies_bundled([main, f_name]);
    let r2 = {
      a_name,
      deps,
    };
    return r2;
  }
  let r = await catch_null_async(lambda);
  return r;
}
