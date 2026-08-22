import { arguments_assert } from "./arguments_assert.mjs";
import { folder_current_absolute } from "./folder_current_absolute.mjs";
import { git_folder_run } from "./git_folder_run.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { text_split } from "./text_split.mjs";
import { text_combine } from "./text_combine.mjs";
import { text_empty_not_is } from "./text_empty_not_is.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_map } from "./list_map.mjs";
import { list_first } from "./list_first.mjs";
import { list_last } from "./list_last.mjs";
export async function git_commits_subjects_since(since) {
  "$plain since";
  "Every commit made after one named commit, as its name and the single line it was made under.";
  "IT IS ASKED FROM A PLACE RATHER THAN FROM A NUMBER, and that is what lets a rule about commit messages ratchet against nothing. A window of the last so many commits slides, so what offended in it yesterday has left it today, and a gate reading one has to be told again every day that its record is out of date. A place stays where it was put, so the set of commits under a rule only ever grows at the end.";
  "THE WHOLE RANGE COMES BACK AS ONE READING. A reading that asks the history once for thousands of lines and a reading that starts thousands of programs answer the same question, and only one of them can be run inside a gate.";
  arguments_assert(arguments, 1);
  let folder = folder_current_absolute();
  let spanned = text_combine(since, "..HEAD");
  let words = ["log", spanned, "--format=%H\t%s"];
  let out = await git_folder_run(folder, words);
  let lines = text_split_newline(out);
  let full = list_filter(lines, text_empty_not_is);
  function read_lambda(line) {
    let parts = text_split(line, "\t");
    let commit = list_first(parts);
    let subject = list_last(parts);
    let r = {
      commit,
      subject,
    };
    return r;
  }
  let commits = list_map(full, read_lambda);
  return commits;
}
