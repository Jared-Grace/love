import { repo_name_love } from "../../../love/public/src/repo_name_love.mjs";
import { git_history_delete } from "../../../love/public/src/git_history_delete.mjs";
export async function git_history_delete_love(f_path) {
  let repo = repo_name_love();
  let v = await git_history_delete("Jared-Grace", repo, f_path, ".");
  return v;
}
