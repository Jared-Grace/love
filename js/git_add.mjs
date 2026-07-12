import { git_add_folder } from "./git_add_folder.mjs";
import { folder_current } from "./folder_current.mjs";
export async function git_add(added) {
  let folder = folder_current();
  await git_add_folder(folder, added);
}
