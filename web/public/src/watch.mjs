import { catch_ignore } from "./catch_ignore.mjs";
import { log } from "./log.mjs";
import { function_auto_path } from "./function_auto_path.mjs";
import { functions_path } from "./functions_path.mjs";
import { import_install } from "./import_install.mjs";
import { command_line } from "./command_line.mjs";
export async function watch() {
  const chokidar = (await import_install("chokidar")).default;
  let joined = functions_path();
  const watcher = chokidar.watch(joined, {
    persistent: true,
    ignoreInitial: true,
  });
  watcher.on("change", (path) => {
    catch_ignore(() => {
      let output = command_line(
        "node g.mjs " + function_auto_path.name + " " + path,
      );
      log(output);
    });
  });
}
