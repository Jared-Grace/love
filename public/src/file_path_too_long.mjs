export function file_path_too_long() {
  let r = Buffer.byteLength(path, "utf8") <= 240;
  return r;
}
