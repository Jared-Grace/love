import { date_now_file } from "../../../love/public/src/date_now_file.mjs";
import { text_combine_multiple } from "../../../love/public/src/text_combine_multiple.mjs";
export async function git_history_delete_repo_folder_name(repo) {
  let r = text_combine_multiple([repo, "-clean-", date_now_file()]);
  return r;
}
