import { git_folder_run } from "./git_folder_run.mjs";
import { git_push_text } from "./git_push_text.mjs";
export async function git_push_folder_now(folder) {
  let c = git_push_text();
  let command_words = [c];
  await git_folder_run(folder, command_words);
}
