import { git_ac_folder } from "./git_ac_folder.mjs";
import { git_call_message } from "./git_call_message.mjs";
export async function git_ac_call_folder(f_name, args, folder) {
  let message = git_call_message(f_name, args);
  await git_ac_folder(folder, message);
}
