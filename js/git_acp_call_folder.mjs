import { git_push_folder } from "../../love/js/git_push_folder.mjs";
import { git_ac_folder } from "../../love/js/git_ac_folder.mjs";
import { git_call_message } from "../../love/js/git_call_message.mjs";
export async function git_acp_call_folder(f_name, args, folder) {
  await git_ac_call_folder(f_name, args, folder);
  await git_push_folder(folder);
}
async function git_ac_call_folder(f_name, args, folder) {
  let message = git_call_message(f_name, args);
  await git_ac_folder(folder, message);
}

