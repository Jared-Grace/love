import { repo_functions_move_acronym } from "../../../love/public/src/repo_functions_move_acronym.mjs";
export async function repo_function_move_acronym(f_name, repo_name_to) {
  let r = await repo_functions_move_acronym(repo_name_to, [f_name]);
  return r;
}
