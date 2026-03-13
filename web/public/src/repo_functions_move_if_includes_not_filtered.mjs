import { user_repo_get_functions_names } from "../../../love/public/src/user_repo_get_functions_names.mjs";
import { list_filter_includes_not } from "../../../love/public/src/list_filter_includes_not.mjs";
export async function repo_functions_move_if_includes_not_filtered(query) {
  let f_names = await user_repo_get_functions_names();
  let filtered = list_filter_includes_not(f_names, query);
  return filtered;
}
