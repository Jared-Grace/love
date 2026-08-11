import { arguments_assert } from "./arguments_assert.mjs";
import { property_exists_equals } from "./property_exists_equals.mjs";
import { property_set } from "./property_set.mjs";
import { fn_name } from "./fn_name.mjs";
import { log } from "./log.mjs";
import { app_shared_dev_build } from "./app_shared_dev_build.mjs";
import { webpack_watch_apps_discover } from "./webpack_watch_apps_discover.mjs";
import { catch_log_async } from "./catch_log_async.mjs";
export async function webpack_watch_build_run(
  a_name,
  building,
  build_schedule,
  deps_refresh,
  app_deps,
  app_deps_get,
) {
  arguments_assert(arguments, 6);
  let busy = property_exists_equals(building, a_name, true);
  if (busy) {
    build_schedule(a_name);
    return;
  }
  property_set(building, a_name, true);
  async function lambda() {
    fn_name("webpack_watch");
    log(webpack_watch_build_run.name, {
      rebuild: a_name,
    });
    await app_shared_dev_build(a_name);
    await deps_refresh(a_name);
    await webpack_watch_apps_discover(app_deps, app_deps_get, build_schedule);
  }
  try {
    await catch_log_async(lambda);
  } finally {
    property_set(building, a_name, false);
  }
}
