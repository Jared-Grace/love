import { git_call_message } from "../../../love/public/src/git_call_message.mjs";
import { git_acp_folder } from "../../../love/public/src/git_acp_folder.mjs";
export async function git_ac_call_folder(f_name, args, folder) {
  let message = git_call_message(f_name, args);
  await git_acp_folder(folder, message);
}
