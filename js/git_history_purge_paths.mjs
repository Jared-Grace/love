import { git_folder_love } from "./git_folder_love.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { text_split_comma } from "./text_split_comma.mjs";
import { git_history_paths_absent_words_named } from "./git_history_paths_absent_words_named.mjs";
import { list_map } from "./list_map.mjs";
import { git_history_heavy_absent_baseline_path } from "./git_history_heavy_absent_baseline_path.mjs";
import { baseline_known_read } from "./baseline_known_read.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { list_unique_sorted } from "./list_unique_sorted.mjs";
import { list_join_comma } from "./list_join_comma.mjs";
export async function git_history_purge_paths(words_text) {
  "$plain words_text";
  arguments_assert(arguments, 1);
  ("Every forgotten file one purge should take out of a repository's past, gathered from the two places that get to say so, and handed back in the one form the purge itself reads.");
  ("★ THE TWO HALVES ANSWER TO DIFFERENT AUTHORITIES AND THAT IS WHY BOTH ARE REPORTED SEPARATELY AS WELL AS JOINED. One half is the dead files these words name, which is a fresh reading of the history and is only ever as right as the words handed in. The other is the queue of large forgotten files this repo has already agreed to take out, which was argued over once and may only ever shrink. Joined, they are a list; kept apart, they are a list with a reason beside each entry, and the human deciding whether to rewrite a public history is owed the reason.");
  ("★ THE JOINING WAS THE EXPENSIVE PART, BECAUSE IT WAS BEING DONE BY HAND. Four separate shell steps built this list, each one asked about and approved on its own, and every one of them was a place for a filename to come out wrong - where wrong is silent both ways round, dropping nothing or dropping something live. One reading cannot mistype what it read.");
  ("The joined list is offered as its own run of text as well as a list, because the command that rehearses the purge takes its paths that way and nothing is gained by making the caller join them back up. Sorted and with repeats taken out, so that a file both halves name is named once - handing the same path twice to the rewriting tool is not wrong, but a list that says a thing twice reads as if it meant something by it.");
  ("It asks for its own repository rather than being handed one, and that is not a convenience. Half of this answer is the queue of large forgotten files this repo has already agreed to take out, which belongs to this repo and to no other, so a folder named at the call could only ever disagree with it. It is also what lets the reading be approved once and stop asking, because a standing approval covers every argument a function is ever handed, and one that takes a folder would be approving the reading of any folder named later.");
  ("It reads and changes nothing, so it can be asked at any moment, including while a purge is being rehearsed on a copy elsewhere. It does not ask whether any of these should go: that judgment is the human's and this only lays out what there is to judge.");
  let folder = await git_folder_love();
  let words = text_split_comma(words_text);
  let rows = await git_history_paths_absent_words_named(folder, words);
  function git_history_purge_paths_path(row) {
    let path = row.path;
    return path;
  }
  let named = list_map(rows, git_history_purge_paths_path);
  let baseline_path = git_history_heavy_absent_baseline_path();
  let queued = await baseline_known_read(baseline_path);
  let moved = await git_history_paths_moved_alive(folder, queued);
  let heavy = list_without_multiple(queued, moved);
  let gathered = [];
  list_add_multiple(gathered, named);
  list_add_multiple(gathered, heavy);
  let paths = list_unique_sorted(gathered);
  let paths_text = list_join_comma(paths);
  let r = {
    words,
    named,
    heavy,
    paths,
    paths_text,
  };
  return r;
}
