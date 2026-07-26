import { git_folder_run } from "./git_folder_run.mjs";
export async function git_add_folder(folder, words) {
  "What to stage arrives as a list of words, so a file whose name holds a space stays one file rather than becoming two names git cannot find.";
  await git_folder_run(folder, ["add"].concat(words));
}
