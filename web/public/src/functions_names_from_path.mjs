import { function_path_to_name } from "../../../love/public/src/function_path_to_name.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
import { text_suffix_without } from "../../../love/public/src/text_suffix_without.mjs";
import { function_name_extension } from "../../../love/public/src/function_name_extension.mjs";
import { folder_read_files } from "../../../love/public/src/folder_read_files.mjs";
export async function functions_names_from_path(path) {
  let paths = await folder_read_files(path);
  function lambda(p) {
    let suffix = function_name_extension();
    let without = text_suffix_without(p, suffix);
    return without;
  }
  let f_names = list_map(paths, function_path_to_name);
  return f_names;
}
