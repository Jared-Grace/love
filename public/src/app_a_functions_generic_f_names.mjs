import { function_path_to_name } from "../../../love/public/src/function_path_to_name.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
import { list_filter_includes } from "../../../love/public/src/list_filter_includes.mjs";
import { text_pad } from "../../../love/public/src/text_pad.mjs";
import { functions_path } from "../../../love/public/src/functions_path.mjs";
import { list_filter_ends_with } from "../../../love/public/src/list_filter_ends_with.mjs";
import { function_name_extension } from "../../../love/public/src/function_name_extension.mjs";
import { app_a_files_paths } from "../../../love/public/src/app_a_files_paths.mjs";
export async function app_a_functions_generic_f_names() {
  let mapped = await app_a_files_paths();
  let suffix = function_name_extension();
  let filtered3 = list_filter_ends_with(mapped, suffix);
  let joined = functions_path();
  let padded = text_pad(joined, "/");
  let filtered4 = list_filter_includes(filtered3, padded);
  let f_names = list_map(filtered4, function_path_to_name);
  return f_names;
}
