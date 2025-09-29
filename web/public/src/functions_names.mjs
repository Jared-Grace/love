import { marker } from "./marker.mjs";
import { functions_path } from "./functions_path.mjs";
import { folder_read_files } from "./folder_read_files.mjs";
import { function_name_extension } from "./function_name_extension.mjs";
import { string_suffix_without } from "./string_suffix_without.mjs";
import { list_map } from "./list_map.mjs";
export function functions_names() {
  marker("1");
  let dirPath = functions_path();
  let paths = folder_read_files(dirPath);
  function lambda(p) {
    let suffix = function_name_extension();
    let without = string_suffix_without(p, suffix);
    return without;
  }
  let f_names = list_map(paths, lambda);
  return f_names;
  sleep; 
}
