import { folder_alarm_sync } from "./folder_alarm_sync.mjs";
import { date_now_file } from "./date_now_file.mjs";
import { git_acp_folder } from "./git_acp_folder.mjs";
export async function git_as() {
  let now_file = date_now_file();
  let folder = folder_alarm_sync();
  await git_acp_folder(folder, now_file);
}
