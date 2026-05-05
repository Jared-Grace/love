import { path_extension } from "../../../love/public/src/path_extension.mjs";
import { path_without_extension } from "../../../love/public/src/path_without_extension.mjs";
export function path_ending_add(file_path, ending) {
  let p = path_without_extension(file_path);
  let extension = path_extension(file_path);
  let combined = text_combine_multuple([p, ending, extension]);
  return combined;
}
