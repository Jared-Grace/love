import { function_run_prompt_lock } from "../../../love/public/src/function_run_prompt_lock.mjs";
import { identity } from "../../../love/public/src/identity.mjs";
import { repos_paths_map_unordered_combine_squash_functions } from "../../../love/public/src/repos_paths_map_unordered_combine_squash_functions.mjs";
import { property_exists_equals } from "../../../love/public/src/property_exists_equals.mjs";
import { catch_log_async } from "../../../love/public/src/catch_log_async.mjs";
import { import_install } from "../../../love/public/src/import_install.mjs";
import { property_set } from "../../../love/public/src/property_set.mjs";
export async function watch() {
  let squashed =
    await repos_paths_map_unordered_combine_squash_functions(identity);
  const chokidar = (await import_install("chokidar")).default;
  const watcher = chokidar.watch(squashed, {
    persistent: true,
    ignoreInitial: true,
  });
  let in_progress = {};
  async function lambda2(path) {
    async function lambda() {
      if (property_exists_equals(path, in_progress, true)) {
        return;
      }
      property_set(in_progress, path, true);
      function lambda3() {}
      let r = await function_run_prompt_lock(lambda3);
    }
    await catch_log_async(lambda);
  }
  watcher.on("change", lambda2).on("add", lambda2);
}
