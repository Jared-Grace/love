export function path_normalize(path) {
  let n = path
    .replace(/\\/g, "/")
    .replace(/\/+/g, "/")
    .replace(/\/\.\//g, "/")
    .replace(/\/$/, "")
    .replace(/^\.\/+/, "");
  return n;
}
