import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { path_extension } from "./path_extension.mjs";
import { path_without_extension } from "./path_without_extension.mjs";
export function path_ending_add(file_path, ending) {
  let p = path_without_extension(file_path);
  let extension = path_extension(file_path);
  let combined = text_combine_multiple([p, ending, extension]);
  return combined;
}
