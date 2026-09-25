import { arguments_assert } from "./arguments_assert.mjs";
import { git_folder_run } from "./git_folder_run.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { not } from "./not.mjs";
import { list_add } from "./list_add.mjs";
import { each } from "./each.mjs";
import { list_unique } from "./list_unique.mjs";
export async function git_folder_path_history_blobs(folder, path) {
  "$plain folder";
  "$plain path";
  "Every version of one file this repository's history has ever held, named once each by git's own name for its contents.";
  "★ ASKING WHICH COMMITS MENTION SOMETHING IS A DIFFERENT QUESTION AND ANSWERS LESS. The search that walks history looking for a word reports where the number of times it occurs changed, which is not where it is present: a version that carries the word unchanged through an edit elsewhere in the file adds no occurrence and removes none, so that search never names it. Measured on this repository's own queue, the two questions differed by three versions out of eighteen, and the three it missed were ordinary copies that would simply have been left behind. Walking the versions and reading each one cannot miss in that direction, and is cheap because a file has far fewer versions than the history has commits - eleven where there were ninety thousand.";
  "The list git prints for each change names the contents before and the contents after. Only the after is taken: a version's first appearance is always a change, so every version the file has ever had is the after of something, and the before is only ever the after of an earlier change or the empty name a file gets when it did not exist yet.";
  "The same contents reached by many commits are one version, named once. That is the unit a rewrite works in, so it is the unit to count in.";
  arguments_assert(arguments, 2);
  let asked = ["log", "--all", "--raw", "--no-abbrev", "--format=", "--", path];
  let stdout = await git_folder_run(folder, asked);
  let lines = text_split_newline(stdout);
  let blobs = [];
  function git_folder_path_history_blobs_line(line) {
    let changed = /^:[0-7]{6} [0-7]{6} [0-9a-f]{40} [0-9a-f]{40} /.test(line);
    if (changed) {
      let after = line.slice(56, 96);
      let born = /^0{40}$/.test(after);
      if (not(born)) {
        list_add(blobs, after);
      }
    }
  }
  each(lines, git_folder_path_history_blobs_line);
  let once = list_unique(blobs);
  return once;
}
