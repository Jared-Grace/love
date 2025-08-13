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
export async function watch() {
  const chokidar = (await import_install("chokidar")).default;
  let joined = functions_path();
  const watcher = chokidar.watch(joined, {
    persistent: true,
    ignoreInitial: true,
  });
  watcher.on("change", async (path) => {
    await catch_log_async(async () => {
      const f_name = function_auto_path.name;
      let output = await command_line("node g.mjs " + f_name + " " + path);
      log_keep(output);
    });
  });
}
