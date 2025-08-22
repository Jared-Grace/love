import { functions_path } from "./functions_path.mjs";
import { folder_read } from "./folder_read.mjs";
import { function_name_extension } from "./function_name_extension.mjs";
import { string_suffix_without } from "./string_suffix_without.mjs";
import { list_map } from "./list_map.mjs";
export function functions_names() {
  let dirPath = functions_path();
  let paths = folder_read(dirPath);
  function lambda(p) {
    let suffix = function_name_extension();
    let without = string_suffix_without(p, suffix);
    return without;
  }
  let f_names = list_map(paths, lambda);
  return f_names;
}
