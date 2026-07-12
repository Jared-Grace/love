export function path_extension(path) {
  let lastDot = path.lastIndexOf(".");
  let v = path.lastIndexOf("/");
  let v2 = path.lastIndexOf("\\");
  let lastSlash = Math.max(v, v2);
  if (lastDot === -1 || lastDot < lastSlash) {
    let r = "";
    return r;
  }
  let extension = path.slice(lastDot);
  return extension;
}
