import { integer_from_base_try } from "./integer_from_base_try.mjs";
import { folder_current_absolute } from "./folder_current_absolute.mjs";
import { git_folder_run } from "./git_folder_run.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { text_split } from "./text_split.mjs";
import { list_size } from "./list_size.mjs";
import { list_first } from "./list_first.mjs";
import { list_last } from "./list_last.mjs";
import { list_get } from "./list_get.mjs";
import { list_add } from "./list_add.mjs";
import { equal } from "./equal.mjs";
export async function commits_ai_js_numstat(count) {
  "Every hand-made commit that touched code in the last so many, with how many files it reached and how much it put in and took out";
  "A commit named after a command was made by that command; a commit named `ai` says nothing named could do it, so somebody wrote it out by hand. Only the code is counted, because prose and data are hand-written by their nature and no transform was ever going to make them";
  "One ask of the history rather than one per commit - the whole range comes back as a single reading, which is the difference between a few hundred programs started and one";
  "Two fields is the commit line and three is a changed file, which is the whole of the telling apart. A message with a tab in it cannot arrive, since every message goes through the one function that turns the awkward characters into spaces before the commit is made";
  let folder = folder_current_absolute();
  let commits_range = "HEAD~" + count + "..HEAD";
  let words = [
    "log",
    commits_range,
    "--format=%H\t%s",
    "--numstat",
    "--",
    "js",
  ];
  let out = await git_folder_run(folder, words);
  let lines = text_split_newline(out);
  let commits = [];
  let current = null;
  for (let line of lines) {
    let parts = text_split(line, "\t");
    let width = list_size(parts);
    let header = equal(width, 2);
    if (header) {
      let hash = list_first(parts);
      current = {
        commit: hash,
        subject: list_last(parts),
        files: 0,
        added: 0,
        removed: 0,
        rows: [],
      };
      list_add(commits, current);
      continue;
    }
    let numbered = equal(width, 3);
    if (numbered) {
      if (current) {
        let input = list_get(parts, 0);
        let added = integer_from_base_try(input, 10);
        let input2 = list_get(parts, 1);
        let removed = integer_from_base_try(input2, 10);
        current.files = current.files + 1;
        current.added = current.added + added;
        current.removed = current.removed + removed;
        ("Each changed file is kept as well as added into the totals. A commit here");
        ("sweeps the whole working directory, so one named `ai` can hold two");
        ("unrelated pieces of work at once, and its totals then describe a shape");
        ("nobody edited. The rows describe shapes somebody did edit.");
        let path = list_get(parts, 2);
        list_add(current.rows, {
          path,
          added,
          removed,
        });
      }
    }
  }
  return commits;
}
