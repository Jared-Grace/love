import { repo_functions_names } from "../../../love/public/src/repo_functions_names.mjs";
import { user_repo_get } from "../../../love/public/src/user_repo_get.mjs";
export async function user_repo_get_functions_names() {
  let repo_name_from = await user_repo_get();
  let f_names = await repo_functions_names(repo_name_from);
  return f_names;
}
