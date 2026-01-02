import { error } from "../../../love/public/src/error.mjs";
import { app_a_functions_generic } from "../../../love/public/src/app_a_functions_generic.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { app_a_files_paths } from "../../../love/public/src/app_a_files_paths.mjs";
import { list_filter_includes } from "../../../love/public/src/list_filter_includes.mjs";
import { functions_path } from "../../../love/public/src/functions_path.mjs";
import { string_pad } from "../../../love/public/src/string_pad.mjs";
import { function_name_extension } from "../../../love/public/src/function_name_extension.mjs";
import { list_filter_ends_with } from "../../../love/public/src/list_filter_ends_with.mjs";
import { function_path_to_name } from "../../../love/public/src/function_path_to_name.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
export async function app_a_functions(context) {
  let mapped = await app_a_files_paths();
  let suffix = function_name_extension();
  let filtered3 = list_filter_ends_with(mapped, suffix);
  let joined = functions_path();
  let padded = string_pad(joined, "/");
  let filtered4 = list_filter_includes(filtered3, padded);
  let f_names = list_map(filtered4, function_path_to_name);
  marker("1");
  let on_select = error();
  app_a_functions_generic(context, f_names, on_select);
}
