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
import { object_property_equals } from "./object_property_equals.mjs";
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
      const f_name = function_auto_path.name;
      let args = [path];
      let result = list_join_space(args);
      let output = await command_line("node g.mjs " + f_name + " " + result);
      log_keep(output);
      object_property_set(in_progress, path, false);
    }
    await catch_log_async(lambda);
  }
  watcher.on("change", lambda2);
}
