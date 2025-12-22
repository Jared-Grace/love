import { string_starts_with_not } from "../../../love/public/src/string_starts_with_not.mjs";
import { path_normalize } from "../../../love/public/src/path_normalize.mjs";
export function file_path_normalize(file_path) {
  file_path = path_normalize(file_path);
  const prefix = "../";
  let n = string_starts_with_not(file_path, prefix);
  if (n) {
    file_path = prefix + "love/" + file_path;
  }
  return file_path;
}
