import { repo_functions_path } from "./repo_functions_path.mjs";
import { functions_names_from_path } from "./functions_names_from_path.mjs";
export async function repo_functions_names(repo_name) {
  let r_path = repo_functions_path(repo_name);
  let f_names = await functions_names_from_path(r_path);
  return f_names;
}
