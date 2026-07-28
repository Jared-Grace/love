import { git_acp_call_folder } from "./git_acp_call_folder.mjs";
import { git_folder_is } from "./git_folder_is.mjs";
export async function git_acp_call_folder_try(folder, f_name, args) {
  "Nothing at all when the folder is no repo, a record when it is — read the same";
  "way as its commit-only twin.";
  let is = await git_folder_is(folder);
  if (is) {
    let result = await git_acp_call_folder(f_name, args, folder);
    return result;
  }
  let skipped = null;
  return skipped;
}
