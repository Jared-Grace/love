import { greater_than } from "./greater_than.mjs";
export function file_path_too_long(path) {
  let a = Buffer.byteLength(path, "utf8");
  let tl = greater_than(a, 240);
  return tl;
}
