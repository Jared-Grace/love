import { log } from "./log.mjs";
import { identity } from "./identity.mjs";
import { path_name } from "./path_name.mjs";
import { list_map } from "./list_map.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { list_filter } from "./list_filter.mjs";
import { property_get } from "./property_get.mjs";
import { property_set } from "./property_set.mjs";
import { import_install } from "./import_install.mjs";
import { html_extension } from "./html_extension.mjs";
import { catch_log_async } from "./catch_log_async.mjs";
import { catch_ignore_async } from "./catch_ignore_async.mjs";
import { folder_read_files } from "./folder_read_files.mjs";
import { folder_public_join } from "./folder_public_join.mjs";
import { app_shared_dev_build } from "./app_shared_dev_build.mjs";
import { app_shared_name_main } from "./app_shared_name_main.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { list_filter_ends_with } from "./list_filter_ends_with.mjs";
import { function_dependencies } from "./function_dependencies.mjs";
import { app_context_initialize } from "./app_context_initialize.mjs";
import { property_exists_equals } from "./property_exists_equals.mjs";
import { app_shared_name_dev_text } from "./app_shared_name_dev_text.mjs";
import { list_map_async } from "./list_map_async.mjs";
import { repos_paths_map_unordered_combine_squash_functions } from "./repos_paths_map_unordered_combine_squash_functions.mjs";
export async function webpack_watch() {
  let dev_folder = folder_public_join(app_shared_name_dev_text());
  let files = await folder_read_files(dev_folder);
  let htmls = list_filter_ends_with(files, html_extension());
  let a_names = list_map(htmls, path_name);
  async function app_deps_get(a_name) {
    async function lambda() {
      let main = await app_shared_name_main(a_name);
      let deps = await function_dependencies([
        main,
        app_context_initialize.name,
      ]);
      let r = {
        a_name,
        deps,
      };
      return r;
    }
    let r = await catch_ignore_async(lambda);
    return r;
  }
  let built = await list_map_unordered_async(a_names, app_deps_get);
  let app_deps = list_filter(built, null_not_is);
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
  function affected_get(fn_name) {
    function lambda(ad) {
      let deps = property_get(ad, "deps");
      let match = deps.includes(fn_name);
      return match;
    }
    let matched = list_filter(app_deps, lambda);
    let names = list_map(matched, a_name_of);
    return names;
  }
  async function build_run(a_name) {
    let busy = property_exists_equals(building, a_name, true);
    if (busy) {
      build_schedule(a_name);
      return;
    }
    property_set(building, a_name, true);
    async function lambda() {
      log(webpack_watch.name, {
        rebuild: a_name,
      });
      await app_shared_dev_build(a_name);
    }
    try {
      await catch_log_async(lambda);
    } finally {
      property_set(building, a_name, false);
    }
  }
  function build_schedule(a_name) {
    let existing = property_get_or_null(pending, a_name);
    if (existing) {
      clearTimeout(existing);
    }
    function fire() {
      build_run(a_name);
    }
    let t = setTimeout(fire, 1200);
    property_set(pending, a_name, t);
  }
  function on_change(path) {
    let fn_name = path_name(path);
    let affected = affected_get(fn_name);
    list_map(affected, build_schedule);
  }
  watcher.on("change", on_change).on("add", on_change);
  log(webpack_watch.name, {
    watching: folders,
  });
}
