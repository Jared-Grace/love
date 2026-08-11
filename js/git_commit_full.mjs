import { folder_current_absolute } from "./folder_current_absolute.mjs";
import { command_line_git_folder } from "./command_line_git_folder.mjs";
import { text_trim } from "./text_trim.mjs";
export async function git_commit_full(commit) {
  "The full name of the commit you name, however you spelled it - a short name, a branch, or the full name already.";
  "Git answers to a shortened name everywhere, so a shortened one works right up until something is filed under it. Then it is a different word from the full name the same commit is listed under elsewhere, and a record written under one is looked for under the other and never found.";
  let here = folder_current_absolute();
  let asked = text_trim(commit);
  let printed = await command_line_git_folder(here, `rev-parse ${asked}`);
  let full = text_trim(printed);
  return full;
}
