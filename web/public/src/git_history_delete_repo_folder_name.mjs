import { uuid } from "../../../love/public/src/uuid.mjs";
export async function git_history_delete_repo_folder_name(repo) {
  let r = repo + "-clean-" + (await uuid()) + ".git";
  return r;
}
