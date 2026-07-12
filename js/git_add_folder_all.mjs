import { git_add_folder } from "./git_add_folder.mjs";
export async function git_add_folder_all(folder) {
  let added = "-A";
  await git_add_folder(folder, added);
}
