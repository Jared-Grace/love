import { repo_path_combine } from "../../../love/public/src/repo_path_combine.mjs";
import { user_repo_get } from "../../../love/public/src/user_repo_get.mjs";
export async function user_repo_path_combine(f_path) {
  let repo_name = await user_repo_get();
  let combined = repo_path_combine(repo_name, f_path);
  return combined;
}
