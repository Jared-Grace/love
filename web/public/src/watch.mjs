import { import_install } from "./import_install.mjs";
export async function watch() {
  const chokidar = (await import_install("chokidar")).default;
  const watcher = chokidar.watch("./my-folder", {
    persistent: true,
    ignoreInitial: true,
  });
  watcher.on("change", (path) => {
    runMyFunction(path);
  });
}
