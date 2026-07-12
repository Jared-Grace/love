import { date_now_file } from "./date_now_file.mjs";
import { git_acp_folder } from "./git_acp_folder.mjs";
export async function git_as() {
  let now_file = date_now_file();
  await git_acp_folder("/home/j/AndroidStudioProjects/AlarmSync/", now_file);
}
