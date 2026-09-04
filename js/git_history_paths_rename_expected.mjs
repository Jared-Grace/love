import { arguments_assert } from "./arguments_assert.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
import { text_prefix_change } from "./text_prefix_change.mjs";
import { not } from "./not.mjs";
import { list_add } from "./list_add.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
export function git_history_paths_rename_expected(paths, pairs, clone_folder) {
  "$plain clone_folder";
  "What every path a commit holds ought to be called once a set of folder renames has been applied to it, worked out ahead of the rewrite so that what the rewrite produced can be held against it.";
  "This is one half of the proof a rehearsal rests on. The other half asks whether the same bytes are still there; this half asks whether each of them landed where it was meant to. Neither alone is a proof - the bytes alone would pass a rewrite that moved a file somewhere nobody asked for, and the names alone would pass one that got every name right while changing what was underneath them.";
  "The prefix rule here is the same one the rewrite itself is handed, and neither is bent to fit the other. If the two ever come to disagree about what a prefix means, the rehearsal fails loudly rather than quietly renaming something nobody named.";
  "A NAME MATCHING NO PATH IS REFUSED RATHER THAN PASSED OVER. A rename that renames nothing is a typo, and a typo let through a rehearsal has been proved safe rather than proved right.";
  "The first pair that matches a path wins and the rest are not tried, so a path is renamed once however many pairs its name begins with.";
  arguments_assert(arguments, 3);
  let paths_expected = {};
  let matched = {};
  for (let path of paths) {
    let renamed = path;
    for (let pair of pairs) {
      let starts = text_starts_with(path, pair.before);
      if (starts) {
        renamed = text_prefix_change(path, pair.before, pair.after);
        matched[pair.before] = true;
        break;
      }
    }
    paths_expected[renamed] = true;
  }
  let unmatched = [];
  for (let pair of pairs) {
    let hit = matched[pair.before];
    if (not(hit)) {
      list_add(unmatched, pair.before);
    }
  }
  list_empty_is_assert_json(unmatched, {
    hint: "these names match no path the commit under test holds, so renaming them would move nothing - would you like to name only folders the present actually holds?",
    unmatched,
    clone_folder,
  });
  return paths_expected;
}
