export function file_path_too_long(path) {
  let r = Buffer.byteLength(path, "utf8") <= 240;
  return r;
}
