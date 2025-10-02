import { user_repo_get } from "../../../love/public/src/user_repo_get.mjs";
import { repo_acronym_to_name } from "../../../love/public/src/repo_acronym_to_name.mjs";
import { repo_functions_move } from "../../../love/public/src/repo_functions_move.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { list_filter_includes_not } from "../../../love/public/src/list_filter_includes_not.mjs";
import { repo_functions_names } from "../../../love/public/src/repo_functions_names.mjs";
export async function repo_functions_move_if_includes_not(to, query) {
  marker("1");
  let repo_name_from = await user_repo_get();
  let f_names = await repo_functions_names(repo_name_from);
  let filtered = list_filter_includes_not(f_names, query);
  let repo_name_to = await repo_acronym_to_name(to);
  let v = await repo_functions_move(filtered, repo_name_to);
}
