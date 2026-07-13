import { git_push_folder } from "../../love/js/git_push_folder.mjs";
import { git_ac_call_folder } from "../../love/js/git_ac_call_folder.mjs";
export async function git_acp_call_folder(f_name, args, folder) {
  await git_ac_call_folder(f_name, args, folder);
  await git_push_folder(folder);
}

