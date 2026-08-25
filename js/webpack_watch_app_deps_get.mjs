import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_name_main } from "./app_shared_name_main.mjs";
import { fn_name } from "./fn_name.mjs";
import { function_dependencies } from "./function_dependencies.mjs";
import { catch_null_async } from "./catch_null_async.mjs";
export async function webpack_watch_app_deps_get(a_name) {
  "Every function one app's page is built out of - its own entry point plus the shared start-up it always reaches - so a watcher knows which files a rebuild of that app has to be triggered by.";
  arguments_assert(arguments, 1);
  async function lambda() {
    let main = await app_shared_name_main(a_name);
    let f_name = fn_name("app_shared_context_initialize");
    let deps = await function_dependencies([main, f_name]);
    let r2 = {
      a_name,
      deps,
    };
    return r2;
  }
  let r = await catch_null_async(lambda);
  return r;
}
