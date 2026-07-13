import { git_push_folder } from "../../love/js/git_push_folder.mjs";
import { git_ac_call_folder } from "../../love/js/git_ac_call_folder.mjs";
import { git_folder_is } from "../../love/js/git_folder_is.mjs";
export async function git_ac_call_folder_try(folder, f_name, args) {
  let is = await git_folder_is(folder);
  if (is) {
    await git_ac_call_folder(f_name, args, folder);
  }
}
