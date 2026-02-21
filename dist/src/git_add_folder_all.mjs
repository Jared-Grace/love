import { git_add_folder } from "../../../love/public/src/git_add_folder.mjs";
export async function git_add_folder_all(folder) {
  const added = "-A";
  await git_add_folder(folder, added);
}
