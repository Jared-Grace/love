import { git_push_folder } from "./git_push_folder.mjs";
export async function git_push() {
  let folder = ".";
  await git_push_folder(folder);
}
