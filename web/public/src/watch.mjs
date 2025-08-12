import { function_auto_path } from "./function_auto_path.mjs";
import { log } from "./log.mjs";
import { functions_path } from "./functions_path.mjs";
import { import_install } from "./import_install.mjs";
import { command_line } from "./command_line.mjs";
export async function watch() {
  const chokidar = (await import_install("chokidar")).default;
  const watcher = chokidar.watch(functions_path(), {
    persistent: true,
    ignoreInitial: true,
  });
  watcher.on("change", (path) => {
    command_line("node r.mjs " + function_auto_path.name + " " + path);
    log(path);
  });
  log("here");
}
