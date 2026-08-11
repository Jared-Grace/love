import { webpack_watch_affected_get } from "./webpack_watch_affected_get.mjs";
import { webpack_watch_build_run } from "./webpack_watch_build_run.mjs";
import { webpack_watch_bundle_stale_is } from "./webpack_watch_bundle_stale_is.mjs";
import { fn_name } from "./fn_name.mjs";
import { log } from "./log.mjs";
import { identity } from "./identity.mjs";
import { path_name } from "./path_name.mjs";
import { list_map } from "./list_map.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { list_filter } from "./list_filter.mjs";
import { property_get } from "./property_get.mjs";
import { property_set } from "./property_set.mjs";
import { import_install } from "./import_install.mjs";
import { catch_null_async } from "./catch_null_async.mjs";
import { apps_names_dev } from "./apps_names_dev.mjs";
import { folder_public_join } from "./folder_public_join.mjs";
import { app_shared_name_main } from "./app_shared_name_main.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { list_find_property_or_null } from "./list_find_property_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { function_dependencies } from "./function_dependencies.mjs";
import { app_shared_name_dev_text } from "./app_shared_name_dev_text.mjs";
import { list_map_async } from "./list_map_async.mjs";
import { list_map_unordered_async } from "./list_map_unordered_async.mjs";
import { repos_paths_map_unordered_combine_squash_functions } from "./repos_paths_map_unordered_combine_squash_functions.mjs";
export async function webpack_watch() {
  let f_path = app_shared_name_dev_text();
  let dev_relative = folder_public_join(f_path);
  let a_names = await apps_names_dev();
  async function app_deps_get(a_name) {
    async function lambda() {
      let main = await app_shared_name_main(a_name);
      let f_name2 = fn_name("app_shared_context_initialize");
      let deps = await function_dependencies([main, f_name2]);
      let r2 = {
        a_name,
        deps,
      };
      return r2;
    }
    let r = await catch_null_async(lambda);
    return r;
  }
  let built = await list_map_async(a_names, app_deps_get);
  let app_deps = list_filter(built, null_not_is);
  fn_name("webpack_watch");
  log(webpack_watch.name, {
    apps: a_names,
    indexed: app_deps.length,
  });
  let chokidar = (await import_install("chokidar")).default;
  let folders =
    await repos_paths_map_unordered_combine_squash_functions(identity);
  let watcher = chokidar.watch(folders, {
    persistent: true,
    ignoreInitial: true,
  });
  let building = {};
  let pending = {};
  function a_name_of(ad) {
    let a_name = property_get(ad, "a_name");
    return a_name;
  }
  async function deps_refresh(a_name) {
    "re-index the app that just built: the index was made at startup, so a function written since then belongs to no app and editing it alone would rebuild nothing until a restart";
    let ad = list_find_property_or_null(app_deps, "a_name", a_name);
    let known_not = null_is(ad);
    if (known_not) {
      return;
    }
    let fresh = await app_deps_get(a_name);
    let failed = null_is(fresh);
    if (failed) {
      return;
    }
    let value = property_get(fresh, "deps");
    property_set(ad, "deps", value);
  }
  function build_schedule(a_name) {
    let existing = property_get_or_null(pending, a_name);
    if (existing) {
      clearTimeout(existing);
    }
    async function fire() {
      await webpack_watch_build_run(
        a_name,
        building,
        build_schedule,
        deps_refresh,
        app_deps,
        app_deps_get,
      );
    }
    let t = setTimeout(fire, 1200);
    property_set(pending, a_name, t);
  }
  function on_change(path) {
    let f_name = path_name(path);
    let affected = webpack_watch_affected_get(f_name, app_deps, a_name_of);
    list_map(affected, build_schedule);
  }
  watcher.on("change", on_change).on("add", on_change);
  ("on startup rebuild only STALE apps (bundle missing, or older than one of its source files) so a watcher (re)start refreshes what changed while it was down, while skipping apps that are already current");
  async function schedule_if_stale(ad) {
    let stale = await webpack_watch_bundle_stale_is(
      ad,
      a_name_of,
      dev_relative,
    );
    if (stale) {
      let a_name = a_name_of(ad);
      build_schedule(a_name);
    }
  }
  await list_map_unordered_async(app_deps, schedule_if_stale);
  fn_name("webpack_watch");
  log(webpack_watch.name, {
    watching: folders,
  });
}
