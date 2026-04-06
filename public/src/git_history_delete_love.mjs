import { repo_love_name } from "../../../love/public/src/repo_love_name.mjs";
import { git_history_delete } from "../../../love/public/src/git_history_delete.mjs";
export async function git_history_delete_love(f_path) {
  let repo = repo_love_name();
  let v = await git_history_delete("Jared-Grace", repo, f_path, ".");
  return v;
}
