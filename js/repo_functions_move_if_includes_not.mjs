import { repo_functions_move_if_includes_not_filtered } from "../../../love/public/src/repo_functions_move_if_includes_not_filtered.mjs";
import { repo_acronym_to_name } from "../../../love/public/src/repo_acronym_to_name.mjs";
import { repo_functions_move } from "../../../love/public/src/repo_functions_move.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function repo_functions_move_if_includes_not(to, query) {
  marker("1");
  let filtered = await repo_functions_move_if_includes_not_filtered(query);
  let repo_name_to = await repo_acronym_to_name(to);
  let v = await repo_functions_move(filtered, repo_name_to);
}
