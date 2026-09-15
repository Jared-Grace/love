import { arguments_assert } from "./arguments_assert.mjs";
import { text_split_comma } from "./text_split_comma.mjs";
import { git_history_heavy_absent_baseline_path } from "./git_history_heavy_absent_baseline_path.mjs";
import { git_history_heavy_absent } from "./git_history_heavy_absent.mjs";
import { baseline_known_add } from "./baseline_known_add.mjs";
export async function git_history_heavy_absent_baseline_add(paths_comma) {
  arguments_assert(arguments, 1);
  ("Queue NAMED large forgotten paths for the next history rewrite, and leave every other one still failing.");
  ("The record this writes to is the removal queue, not a pardon: a path listed there is one somebody has decided to take out of the history, and the gate stays quiet about it only until that rewrite happens. Its whole-file twin refuses to grow the list, because reached for when the gate goes red it would queue everything nobody had looked at; naming each path is what makes adding one a decision rather than a reflex.");
  ("Reach for this when a rewrite is wanted but is not safe to do today - with everybody committing to one branch all the time, a rewrite has to wait for a quiet moment, and the queue is where the decision waits with it. The rewrite itself, and what to do before it, is in the memory note on the history rewrite.");
  ("Only a path the gate is failing on right now can be added, so a misspelt path is refused rather than queued as something that is not there.");
  let paths = text_split_comma(paths_comma);
  let path = git_history_heavy_absent_baseline_path();
  let offending = await git_history_heavy_absent();
  let r = await baseline_known_add(paths, path, offending);
  return r;
}
