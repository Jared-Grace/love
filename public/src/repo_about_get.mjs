import { data_get_value } from "../../../love/public/src/data_get_value.mjs";
import { path_repo_about } from "../../../love/public/src/path_repo_about.mjs";
export async function repo_about_get(repo, key) {
  let a_path = path_repo_about(repo);
  let value = await data_get_value(property_name, null, a_path);
  return value;
}
