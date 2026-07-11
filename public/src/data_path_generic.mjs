import { data_folder } from "../../../love/public/src/data_folder.mjs";
import { file_name_json_folder } from "../../../love/public/src/file_name_json_folder.mjs";
import { text_combine } from "../../../love/public/src/text_combine.mjs";
export function data_path_generic(suffix, f_name_unsuffixed) {
  let f_name = text_combine(f_name_unsuffixed, suffix);
  let folder = data_folder();
  let f_path = file_name_json_folder(folder, f_name);
  return f_path;
}
