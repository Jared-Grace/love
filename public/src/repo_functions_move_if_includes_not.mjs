import { repo_functions_move_acronym } from "../../../love/public/src/repo_functions_move_acronym.mjs";
import { repo_functions_move_if_includes_not_filtered } from "../../../love/public/src/repo_functions_move_if_includes_not_filtered.mjs";
export async function repo_functions_move_if_includes_not(to, query) {
  let filtered = await repo_functions_move_if_includes_not_filtered(query);
  await repo_functions_move_acronym(filtered, to);
}
