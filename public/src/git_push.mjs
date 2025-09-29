import { git_push_folder } from "../../../love/public/src/git_push_folder.mjs";
export async function git_push() {
  let folder = ".";
  await git_push_folder(folder);
}
