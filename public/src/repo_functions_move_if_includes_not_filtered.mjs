import { list_filter_includes_not } from "../../../love/public/src/list_filter_includes_not.mjs";
import { repo_functions_names } from "../../../love/public/src/repo_functions_names.mjs";
import { user_repo_get } from "../../../love/public/src/user_repo_get.mjs";
export async function repo_functions_move_if_includes_not_filtered(query) {
  let repo_name_from = await user_repo_get();
  let f_names = await repo_functions_names(repo_name_from);
  let filtered = list_filter_includes_not(f_names, query);
  return filtered;
}
