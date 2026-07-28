import { git_folder_run } from "./git_folder_run.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { list_filter_text_empty_not_is } from "./list_filter_text_empty_not_is.mjs";
export async function git_files_staged_folder(folder) {
  "Which files this folder has staged right now — the truthful list of what the";
  "commit about to be made will contain.";
  "Asked after the add rather than before it, on purpose. Asked before, anything a";
  "peer writes in between is committed but not reported; asked after, the answer is";
  "exactly what git is holding, so nothing can be in the commit and missing from";
  "the report.";
  "The sweep needs this where the targeted commit needs the by-name question: a";
  "sweep hands over no paths at all, and git answers a question about no paths by";
  "talking about everything, so the two cannot be one function.";
  let asked = ["diff", "--cached", "--name-only"];
  let stdout = await git_folder_run(folder, asked);
  let lines = text_split_newline(stdout);
  let staged = list_filter_text_empty_not_is(lines);
  return staged;
}
