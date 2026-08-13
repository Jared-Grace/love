import { git_folder_run } from "./git_folder_run.mjs";
import { text_lines_working } from "./text_lines_working.mjs";
export async function git_push_urls(folder) {
  "Every address one push from this folder actually writes to.";
  "Git keeps two answers for a remote and only one of them is the obvious one. A remote has an address it is read from, and it may also carry a list of addresses it is written to; while that list is empty the address it is read from is used, and once it is not empty the read address is not used at all. So the list is asked for by name here rather than guessed at from the read address, because the two differ in exactly the case this exists for.";
  let command_words = ["remote", "get-url", "--push", "--all", "origin"];
  let printed = await git_folder_run(folder, command_words);
  let urls = text_lines_working(printed);
  return urls;
}
