import { date_now_file } from "../../../love/public/src/date_now_file.mjs";
import { git_acp_folder } from "../../../love/public/src/git_acp_folder.mjs";
export async function git_as() {
  let now_file = date_now_file();
  await git_acp_folder("/home/j/AndroidStudioProjects/AlarmSync/", now_file);
}
