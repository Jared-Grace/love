import { repo_path_combine } from "./repo_path_combine.mjs";
import { user_repo_get } from "./user_repo_get.mjs";
export async function user_repo_path_combine(f_path) {
  let repo_name = await user_repo_get();
  let combined = repo_path_combine(repo_name, f_path);
  return combined;
}
