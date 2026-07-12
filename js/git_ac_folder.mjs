import { git_add_folder_all } from "./git_add_folder_all.mjs";
import { git_commit_folder } from "./git_commit_folder.mjs";
export async function git_ac_folder(folder, message) {
  await git_add_folder_all(folder);
  await git_commit_folder(folder, message);
}
