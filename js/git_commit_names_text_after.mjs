import { equal_not } from "./equal_not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { git_commit_names_renamed } from "./git_commit_names_renamed.mjs";
import { property_get } from "./property_get.mjs";
import { property_set } from "./property_set.mjs";
import { text_commit_names_pattern } from "./text_commit_names_pattern.mjs";
import { property_or_null } from "./property_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { not } from "./not.mjs";
import { list_add } from "./list_add.mjs";
import { list_join_empty } from "./list_join_empty.mjs";
export function git_commit_names_text_after(reads, text) {
  "$plain text";
  "A text with every commit name in it that some rewrite has renamed written as that commit is called now, together with the pairs that were applied and the shortened names too short to answer for, which are left exactly as they were.";
  "★ THE TEXT IS CUT ON THE NAMES AND REBUILT, RATHER THAN HAVING EACH NAME SWAPPED IN TURN. Swapping one at a time is wrong in a way that no ordering rule fully mends: a shortened name is the beginning of the whole name, so replacing the short one first eats the first ten digits of the long one and welds the new name onto the tail of the old, leaving a row of digits nobody ever wrote and which every later reader will treat as a commit. Longest first avoids that one case and not the general one. Cutting the text once on the shape, and then looking at each cut-out piece as a whole word, cannot overlap at all, because no piece is ever part of another.";
  "★ A PIECE IS TAKEN FOR A NAME BECAUSE OF WHERE IT SITS, NOT BECAUSE OF HOW IT READS. Cutting hands back the in-between text and the cut-out names alternately, so their turn in the line is what says which is which. Nothing is asked twice about its shape, which is the other way the cut and the search could have drifted apart.";
  "★ WHICH TEXT MAY BE REWRITTEN AT ALL IS NOT DECIDED HERE. This is handed a text and hands one back; whoever handed it over is the one who knew that the names in it are pointers to follow rather than a record of a rename. The memory notes are the standing example of a text that must never be handed here: they are full of old names, and nearly every one of them is the story of a rename, which becomes nonsense the moment either half of it follows a later one.";
  "A name no record renamed is left alone rather than reported as unchanged, and so is a name that is not a commit at all. That is what lets the same sweep run over a file of colours without a rule about colours in it.";
  arguments_assert(arguments, 2);
  let found = git_commit_names_renamed(reads, text);
  let renamings = property_get(found, "renamings");
  let ambiguous = property_get(found, "ambiguous");
  let table = {};
  for (let renaming of renamings) {
    let from_name = property_get(renaming, "before");
    let to_name = property_get(renaming, "after");
    property_set(table, from_name, to_name);
  }
  let pattern = text_commit_names_pattern();
  let pieces = text.split(pattern);
  let rebuilt = [];
  let name_is = false;
  for (let piece of pieces) {
    let written = piece;
    if (name_is) {
      let renamed = property_or_null(table, piece);
      let missing = null_is(renamed);
      let there = not(missing);
      if (there) {
        written = renamed;
      }
    }
    list_add(rebuilt, written);
    name_is = not(name_is);
  }
  let after = list_join_empty(rebuilt);
  let changed = equal_not(after, text);
  let r = {
    after,
    changed,
    renamings,
    ambiguous,
  };
  return r;
}
