import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { log } from "./log.mjs";
import { lock_try } from "./lock_try.mjs";
import { data_file_update } from "./data_file_update.mjs";
import { identity } from "./identity.mjs";
import { repos_paths_map_unordered_combine_squash_functions } from "./repos_paths_map_unordered_combine_squash_functions.mjs";
import { property_exists_equals } from "./property_exists_equals.mjs";
import { catch_log_async } from "./catch_log_async.mjs";
import { import_install } from "./import_install.mjs";
import { property_set } from "./property_set.mjs";
import { command_line_node_g } from "./command_line_node_g.mjs";
import { function_auto_path } from "./function_auto_path.mjs";
import { function_run_prompt } from "./function_run_prompt.mjs";
export async function watch() {
  let squashed =
    await repos_paths_map_unordered_combine_squash_functions(identity);
  let chokidar = (await import_install("chokidar")).default;
  let watcher = chokidar.watch(squashed, {
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
              let args = [path];
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
      try {
        let who = text_combine_multiple([watch.name, ":", path]);
        let r = await lock_try(function_run_prompt.name, lambda3, who);
      } finally {
        property_set(in_progress, path, false);
      }
    }
    await catch_log_async(lambda);
  }
  watcher.on("change", lambda2).on("add", lambda2);
}
