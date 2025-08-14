export async function path_resolve(paths) {
  let path = await import("path");
  return path.resolve(paths);
}
