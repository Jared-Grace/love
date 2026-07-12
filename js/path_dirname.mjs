export async function path_dirname(p) {
  let path = await import("path");
  let v = path.dirname(p);
  return v;
}
