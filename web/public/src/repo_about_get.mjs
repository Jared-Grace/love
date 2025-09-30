import { data_get } from "../../../love/public/src/data_get.mjs";
import { path_repo_about } from "../../../love/public/src/path_repo_about.mjs";
export async function repo_about_get(repo, key) {
  let a_path = path_repo_about(repo);
  let { value } = await data_get(key, null, a_path);
  let v = value;
  return v;
}
