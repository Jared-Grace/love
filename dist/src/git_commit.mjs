import { git_commit_folder } from "../../../love/public/src/git_commit_folder.mjs";
export async function git_commit(message) {
  let folder = ".";
  await git_commit_folder(folder, message);
}
