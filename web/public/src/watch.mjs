import { identity } from "../../../love/public/src/identity.mjs";
import { repos_paths_map_unordered_combine_squash } from "../../../love/public/src/repos_paths_map_unordered_combine_squash.mjs";
import { command_line_node_g } from "../../../love/public/src/command_line_node_g.mjs";
import { property_exists_equals } from "../../../love/public/src/property_exists_equals.mjs";
import { catch_log_async } from "../../../love/public/src/catch_log_async.mjs";
import { function_auto_path } from "../../../love/public/src/function_auto_path.mjs";
import { import_install } from "../../../love/public/src/import_install.mjs";
import { data_file_update } from "../../../love/public/src/data_file_update.mjs";
import { object_property_set } from "../../../love/public/src/object_property_set.mjs";
export async function watch() {
  const chokidar = (await import_install("chokidar")).default;
  let squashed = await repos_paths_map_unordered_combine_squash(identity);
  const watcher = chokidar.watch(squashed, {
    persistent: true,
    ignoreInitial: true,
  });
  let in_progress = {};
  async function lambda2(path) {
    async function lambda() {
      const value = true;
      if (property_exists_equals(path, in_progress, value)) {
        return;
      }
      object_property_set(in_progress, path, value);
      try {
        await command_line_node_g(function_auto_path.name, [path]);
      } finally {
        if (0) {
          try {
            const args = [path];
            await command_line_node_g(data_file_update.name, args);
          } finally {
            object_property_set(in_progress, path, false);
          }
        }
      }
    }
    await catch_log_async(lambda);
  }
  watcher.on("change", lambda2).on("add", lambda2);
}
