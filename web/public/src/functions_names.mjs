import { functions_path } from "./functions_path.mjs";
import { folder_read } from "./folder_read.mjs";
import { function_name_extension } from "./function_name_extension.mjs";
import { string_suffix_without } from "./string_suffix_without.mjs";
import { list_map } from "./list_map.mjs";

export function functions_names() {
  let paths = folder_read(functions_path());
  let f_names = list_map(paths, (p) =>
    string_suffix_without(p, function_name_extension()),
  );
  return f_names;
}
