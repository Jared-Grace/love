import { git_folder_is } from "./git_folder_is.mjs";
import { git_push_folder } from "./git_push_folder.mjs";
export async function git_push_folder_try(folder) {
  let is = await git_folder_is(folder);
  if (is) {
    await git_push_folder(folder);
  }
}
