export async function watch() {
  const chokidar = (await import("chokidar")).default;
  const watcher = chokidar.watch("./my-folder", {
    persistent: true,
    ignoreInitial: true,
  });
  watcher.on("change", (path) => {
    runMyFunction(path);
  });
}
