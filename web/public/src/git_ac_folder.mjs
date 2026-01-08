import { git_add_folder } from "../../../love/public/src/git_add_folder.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { git_commit_folder } from "../../../love/public/src/git_commit_folder.mjs";
export async function git_ac_folder(folder, message) {
  marker("1");
  await git_add_folder(folder);
  await git_commit_folder(folder, message);
}
