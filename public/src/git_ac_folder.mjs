import { git_add_folder_all } from "../../../love/public/src/git_add_folder_all.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { git_commit_folder } from "../../../love/public/src/git_commit_folder.mjs";
export async function git_ac_folder(folder, message) {
  await git_add_folder_all(folder);
  await git_commit_folder(folder, message);
}
