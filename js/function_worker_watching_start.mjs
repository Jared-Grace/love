import { repos_paths_map_unordered_combine_squash_functions } from "./repos_paths_map_unordered_combine_squash_functions.mjs";
import { identity } from "./identity.mjs";
import { import_install } from "./import_install.mjs";
import { not_equal } from "./not_equal.mjs";
import { function_worker_generation_holder } from "./function_worker_generation_holder.mjs";
import { property_get } from "./property_get.mjs";
import { log } from "./log.mjs";
import { fn_name } from "./fn_name.mjs";
import { function_worker_pool_quiet_milliseconds } from "./function_worker_pool_quiet_milliseconds.mjs";
export async function function_worker_watching_start() {
  let squashed =
    await repos_paths_map_unordered_combine_squash_functions(identity);
  let chokidar = (await import_install("chokidar")).default;
  let watcher = chokidar.watch(squashed, {
    persistent: false,
    ignoreInitial: true,
  });
  let quiet = null;
  function lambda(path) {
    if (not_equal(quiet, null)) {
      clearTimeout(quiet);
    }
    function lambda2() {
      quiet = null;
      let held = function_worker_generation_holder();
      let count = property_get(held, "count");
      let raised = count + 1;
      held.count = raised;
      log(fn_name("function_worker_pool_run"), {
        retired_for: path,
        generation: raised,
      });
    }
    let milliseconds = function_worker_pool_quiet_milliseconds();
    quiet = setTimeout(lambda2, milliseconds);
  }
  watcher.on("change", lambda).on("add", lambda).on("unlink", lambda);
  return watcher;
}
