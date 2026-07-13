import { git_ac_folder } from "./git_ac_folder.mjs";
import { git_push_folder } from "./git_push_folder.mjs";
export async function git_acp_folder(folder, message) {
  await git_ac_folder(folder, message);
  await git_push_folder(folder);
}
