import { log } from "../../../love/public/src/log.mjs";
import { lock_try } from "../../../love/public/src/lock_try.mjs";
import { data_file_update } from "../../../love/public/src/data_file_update.mjs";
import { identity } from "../../../love/public/src/identity.mjs";
import { repos_paths_map_unordered_combine_squash_functions } from "../../../love/public/src/repos_paths_map_unordered_combine_squash_functions.mjs";
import { property_exists_equals } from "../../../love/public/src/property_exists_equals.mjs";
import { catch_log_async } from "../../../love/public/src/catch_log_async.mjs";
import { import_install } from "../../../love/public/src/import_install.mjs";
import { property_set } from "../../../love/public/src/property_set.mjs";
import { command_line_node_g } from "../../../love/public/src/command_line_node_g.mjs";
import { function_auto_path } from "../../../love/public/src/function_auto_path.mjs";
import { function_run_prompt } from "../../../love/public/src/function_run_prompt.mjs";
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
      if (property_exists_equals(in_progress, path, true)) {
        return;
      }
      property_set(in_progress, path, true);
      async function lambda3() {
        try {
          await command_line_node_g(function_auto_path.name, [path]);
        } finally {
          property_set(in_progress, path, false);
          if (0) {
            try {
              const args = [path];
              await command_line_node_g(data_file_update.name, args);
            } finally {
              property_set(in_progress, path, false);
            }
          }
        }
      }
      log(watch.name, {
        path,
      });
      let r = await lock_try(function_run_prompt.name, lambda3);
    }
    await catch_log_async(lambda);
  }
  watcher.on("change", lambda2).on("add", lambda2);
}
