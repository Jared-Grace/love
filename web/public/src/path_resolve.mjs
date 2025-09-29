export async function path_resolve(paths) {
  let path = await import("path");
  let v = path.resolve(paths);
  return v;
}
