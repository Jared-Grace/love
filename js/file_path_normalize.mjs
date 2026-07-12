import { text_starts_with_not } from "./text_starts_with_not.mjs";
import { path_normalize } from "./path_normalize.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function file_path_normalize(file_path) {
  file_path = path_normalize(file_path);
  let prefix = "../";
  let n = text_starts_with_not(file_path, prefix);
  if (n) {
    file_path = text_combine_multiple([prefix, "love/", file_path]);
  }
  return file_path;
}
