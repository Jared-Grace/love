import { git_acp_call_folder } from "./git_acp_call_folder.mjs";
import { git_folder_is } from "./git_folder_is.mjs";
export async function git_acp_call_folder_try(folder, f_name, args) {
  let is = await git_folder_is(folder);
  if (is) {
    await git_acp_call_folder(f_name, args, folder);
  }
}
