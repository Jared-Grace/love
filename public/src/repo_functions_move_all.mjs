import { user_repo_set } from "../../../love/public/src/user_repo_set.mjs";
import { arguments_assert } from "../../../love/public/src/arguments_assert.mjs";
import { user_repo_get_functions_names } from "../../../love/public/src/user_repo_get_functions_names.mjs";
import { repo_functions_move_acronym } from "../../../love/public/src/repo_functions_move_acronym.mjs";
export async function repo_functions_move_all(from, to) {
  arguments_assert(arguments, 2);
  let repo_name2 = await user_repo_set(from);
  let filtered = await user_repo_get_functions_names();
  await repo_functions_move_acronym(filtered, to);
}
