import { error_attention_set } from "./error_attention_set.mjs";
import { data_transform } from "./data_transform.mjs";
import { function_name_combine } from "./function_name_combine.mjs";
import { data_boolean_set } from "./data_boolean_set.mjs";
import { command_line_node_g } from "./command_line_node_g.mjs";
import { list_join_space } from "./list_join_space.mjs";
import { list_join } from "./list_join.mjs";
import { marker } from "./marker.mjs";
import { object_property_exists_equals } from "./object_property_exists_equals.mjs";
import { catch_log_async } from "./catch_log_async.mjs";
import { git_acp_call } from "./git_acp_call.mjs";
import { catch_log } from "./catch_log.mjs";
import { catch_ignore } from "./catch_ignore.mjs";
import { log } from "./log.mjs";
import { function_auto_path } from "./function_auto_path.mjs";
import { functions_path } from "./functions_path.mjs";
import { import_install } from "./import_install.mjs";
import { command_line } from "./command_line.mjs";
import { log_keep } from "./log_keep.mjs";
import { object_property_exists } from "./object_property_exists.mjs";
import { data_file_update } from "./data_file_update.mjs";
import { object_property_set } from "./object_property_set.mjs";
export async function watch() {
  marker("1");
  const chokidar = (await import_install("chokidar")).default;
  let joined = functions_path();
  const watcher = chokidar.watch(joined, {
    persistent: true,
    ignoreInitial: true,
  });
  let in_progress = {};
  async function lambda2(path) {
    async function lambda() {
      const value = true;
      if (object_property_exists_equals(path, in_progress, value)) {
        return;
      }
      object_property_set(in_progress, path, value);
      await command_line_node_g(function_auto_path.name, [path]);
      try {
        await command_line_node_g(data_file_update.name, [path]);
      } catch (e) {
        let message = data_file_update.name;
        await error_attention_set(message);
        throw e;
      }
      object_property_set(in_progress, path, false);
    }
    await catch_log_async(lambda);
  }
  watcher.on("change", lambda2);
}
