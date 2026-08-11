import { arguments_assert } from "./arguments_assert.mjs";
import { apps_names_dev } from "./apps_names_dev.mjs";
import { list_find_property_not_null_is } from "./list_find_property_not_null_is.mjs";
import { null_is } from "./null_is.mjs";
import { list_add } from "./list_add.mjs";
import { fn_name } from "./fn_name.mjs";
import { log } from "./log.mjs";
import { each_async } from "./each_async.mjs";
export async function webpack_watch_apps_discover(
  app_deps,
  app_deps_get,
  build_schedule,
) {
  arguments_assert(arguments, 3);
  ("an app written since startup is in no index, so nothing would ever rebuild it; the app list is a folder read, so look again whenever we are already doing work");
  let names = await apps_names_dev();
  async function lambda(a_name) {
    let known_already = list_find_property_not_null_is(
      app_deps,
      "a_name",
      a_name,
    );
    if (known_already) {
      return;
    }
    let ad = await app_deps_get(a_name);
    let failed = null_is(ad);
    if (failed) {
      return;
    }
    list_add(app_deps, ad);
    fn_name("webpack_watch");
    log(webpack_watch_apps_discover.name, {
      discovered: a_name,
    });
    build_schedule(a_name);
  }
  await each_async(names, lambda);
}
