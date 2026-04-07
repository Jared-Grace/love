import { list_filter_starts_with } from "../../../love/public/src/list_filter_starts_with.mjs";
import { user_repo_get_functions_names } from "../../../love/public/src/user_repo_get_functions_names.mjs";
import { repo_functions_move_acronym } from "../../../love/public/src/repo_functions_move_acronym.mjs";
export async function repo_functions_move_if_starts_with(to, query) {
  let f_names = await user_repo_get_functions_names();
  let filtered = list_filter_starts_with(f_names, query);
  await repo_functions_move_acronym(filtered, to);
}
