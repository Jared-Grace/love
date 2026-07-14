export async function path_modified_ms(path) {
  let fs = await import("fs");
  try {
    let stat = fs.statSync(path);
    let ms = stat.mtimeMs;
    return ms;
  } catch (e) {
    if (e.code === "ENOENT") {
      return null;
    }
    throw e;
  }
}
