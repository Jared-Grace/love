import { repo_functions_move } from "../../../love/public/src/repo_functions_move.mjs";
import { repo_acronym_to_name } from "../../../love/public/src/repo_acronym_to_name.mjs";
export async function repo_functions_move_acronym(to, filtered) {
  let repo_name_to = await repo_acronym_to_name(to);
  let v = await repo_functions_move(filtered, repo_name_to);
}
