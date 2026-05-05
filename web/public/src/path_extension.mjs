export function path_extension(path) {
  const lastDot = path.lastIndexOf(".");
  let v = path.lastIndexOf("/");
  let v2 = path.lastIndexOf("\\");
  const lastSlash = Math.max(v, v2);
  if (lastDot === -1 || lastDot < lastSlash) {
    let r = "";
    return r;
  }
  let r2 = path.slice(lastDot);
  return r2;
}
