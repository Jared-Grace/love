import { repos_paths_map_unordered_combine_squash_functions } from "./repos_paths_map_unordered_combine_squash_functions.mjs";
import { identity } from "./identity.mjs";
import { import_install } from "./import_install.mjs";
import { not_equal } from "./not_equal.mjs";
import { log } from "./log.mjs";
import { function_worker_pool_run } from "./function_worker_pool_run.mjs";
export async function watching_start() {
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
      let generation = generation + 1;
      log(function_worker_pool_run.name, {
        retired_for: path,
        generation,
      });
    }
    quiet = setTimeout(lambda2, QUIET_MILLISECONDS);
  }
  watcher.on("change", lambda).on("add", lambda).on("unlink", lambda);
  return watcher;
}
