import { functions_imports_paths_fix_list } from "../../../love/public/src/functions_imports_paths_fix_list.mjs";
import { list_unique } from "../../../love/public/src/list_unique.mjs";
import { list_squash } from "../../../love/public/src/list_squash.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
import { data_identifiers_get } from "../../../love/public/src/data_identifiers_get.mjs";
import { list_map_unordered_async } from "../../../love/public/src/list_map_unordered_async.mjs";
import { file_delete } from "../../../love/public/src/file_delete.mjs";
import { file_copy } from "../../../love/public/src/file_copy.mjs";
import { path_join } from "../../../love/public/src/path_join.mjs";
import { function_name_to_base } from "../../../love/public/src/function_name_to_base.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { function_name_to_path_search } from "../../../love/public/src/function_name_to_path_search.mjs";
import { repo_functions_path } from "../../../love/public/src/repo_functions_path.mjs";
export async function repo_functions_move(f_names, repo_name_to) {
  async function lambda(f_name) {
    let r_path = repo_functions_path(repo_name_to);
    let f_name_ext = function_name_to_base(f_name);
    let f_path_to = path_join([r_path, f_name_ext]);
    let search = await function_name_to_path_search(f_name);
    let f_path = property_get(search, "f_path");
    await file_copy(f_path, f_path_to);
    await file_delete(f_path);
  }
  let waited = await list_map_unordered_async(f_names, lambda);
  let identifiers = await data_identifiers_get();
  function lambda2(f_name) {
    let list = property_get(identifiers, f_name);
    return list;
  }
  let mapped = list_map(f_names, lambda2);
  let squashed = list_squash(mapped);
  let unique = list_unique(squashed);
  let v = await functions_imports_paths_fix_list(unique);
  return v;
}
