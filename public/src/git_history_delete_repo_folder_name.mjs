import { date_now_file } from "../../../love/public/src/date_now_file.mjs";
export async function git_history_delete_repo_folder_name(repo) {
  let r = repo + "-clean-" + date_now_file();
  return r;
}
