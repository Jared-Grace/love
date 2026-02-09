export function file_path_too_long(path) {
  let tl = Buffer.byteLength(path, "utf8") <= 240;
  return tl;
}
