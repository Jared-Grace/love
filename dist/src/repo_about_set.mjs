import { data_set } from "../../../love/public/src/data_set.mjs";
import { path_repo_about } from "../../../love/public/src/path_repo_about.mjs";
export async function repo_about_set(repo, value, key) {
  let a_path = path_repo_about(repo);
  async function lambda(previous) {
    return value;
  }
  await data_set(lambda, key, a_path);
}
