export function path_normalize(path) {
  let v = path
    .replace(/\\/g, "/")
    .replace(/\/+/g, "/")
    .replace(/\/\.\//g, "/")
    .replace(/\/$/, "")
    .replace(/^\.\/+/, "");
  return v;
}
