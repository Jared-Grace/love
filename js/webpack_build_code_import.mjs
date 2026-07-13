import { function_name_to_path } from "./function_name_to_path.mjs";
import { function_name_to_path_search } from "./function_name_to_path_search.mjs";
import { property_get } from "./property_get.mjs";
import { repo_path_combine } from "./repo_path_combine.mjs";
import { js_code_import_single } from "./js_code_import_single.mjs";
import { js_code_string } from "./js_code_string.mjs";
import { folder_previous_2_join } from "./folder_previous_2_join.mjs";
export async function webpack_build_code_import(f_name) {
  let search = await function_name_to_path_search(f_name);
  let repo_name = property_get(search, "repo_name");
  let path = function_name_to_path(f_name);
  let with_repo = repo_path_combine(repo_name, path);
  let joined = folder_previous_2_join(with_repo);
  let code_string = js_code_string(joined);
  let i = js_code_import_single(f_name, code_string);
  return i;
}
