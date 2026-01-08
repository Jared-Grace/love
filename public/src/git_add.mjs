import { git_add_folder } from "../../../love/public/src/git_add_folder.mjs";
import { folder_current } from "../../../love/public/src/folder_current.mjs";
export async function git_add(added) {
  let folder = folder_current();
  await git_add_folder(folder, added);
}
