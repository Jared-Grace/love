import { arguments_assert } from "./arguments_assert.mjs";
import { folder_current_absolute } from "./folder_current_absolute.mjs";
import { git_folder_run } from "./git_folder_run.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { list_filter } from "./list_filter.mjs";
import { text_empty_not_is } from "./text_empty_not_is.mjs";
export async function git_commits_names_all() {
  "Every commit name this repository can still reach, from any branch or tag, as one reading.";
  "IT IS ASKED OF THE REFS AND NOT OF THE OBJECT STORE, and those two answer differently. A commit left behind by a rewrite usually goes on sitting in a pack and will say it exists when asked after by name, right up until the next collection - but no reading of the history will ever produce it again, so nothing can look it up and a record holding it is holding a name that cannot be asked. Reachable is the question a record wants answered, and existing is not.";
  "ONE READING RATHER THAN ONE PROGRAM PER NAME. What this is for is testing a few thousand written-down names at once, and asking git about each of them separately is a few thousand programs to answer what the history answers in one line.";
  arguments_assert(arguments, 0);
  let folder = folder_current_absolute();
  let words = ["log", "--all", "--format=%H"];
  let out = await git_folder_run(folder, words);
  let lines = text_split_newline(out);
  let names = list_filter(lines, text_empty_not_is);
  return names;
}
