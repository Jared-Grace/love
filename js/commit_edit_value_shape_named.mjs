import { commit_edit_kind_counts } from "./commit_edit_kind_counts.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { add } from "./add.mjs";
import { equal } from "./equal.mjs";
import { equal_not } from "./equal_not.mjs";
export async function commit_edit_value_shape_named(commit) {
  "What shape of change one hand-made edit made to the values written out in a file, or that it did not change values alone.";
  "VALUES ARE THE LARGEST HAND-MADE KIND THAT IS NOT MISSING CODE, and until this nothing said what was being done to them. Counting them said only that they were touched; whether one command could have made the change turns entirely on whether entries were added, entries were taken away, or a value already there was written over, so the count on its own carries no verdict at all.";
  "THE SHAPE OF THE DIFFERENCE DECIDES, exactly as it does for the paragraphs. Lines put in with none taken out is an addition; lines taken out with none put in is a removal; one for one is a value written over. Several for several is a record rewritten, and no single verb writes a record.";
  "AN EDIT THAT TOUCHED ANYTHING ELSE IS NOT ASKED ABOUT, because the question is what one command would have made outright and an edit that also changed a paragraph or a line of program was never going to be made by one whatever its values look like.";
  "WHICH VERB IS NOT NAMED HERE, and that is a limit rather than an omission. An entry of a list and a named part of a record are added by two different verbs, and a changed line on its own does not always say which of the two it was; the shape is what the case for building rests on, and the shape is answerable.";
  arguments_assert(arguments, 1);
  let counts = await commit_edit_kind_counts(commit, "data");
  let else_touched = property_get(counts, "else_touched");
  let touched_else_is = equal_not(else_touched, 0);
  if (touched_else_is) {
    let r = "not values alone";
    return r;
  }
  let put_in = property_get(counts, "put_in");
  let taken_out = property_get(counts, "taken_out");
  let left = add(put_in, taken_out);
  let untouched_is = equal(left, 0);
  if (untouched_is) {
    let r2 = "no values touched";
    return r2;
  }
  let added_only_is = equal(taken_out, 0);
  if (added_only_is) {
    let r3 = "entries added";
    return r3;
  }
  let removed_only_is = equal(put_in, 0);
  if (removed_only_is) {
    let r4 = "entries taken out";
    return r4;
  }
  let one_for_one_is = equal(put_in, 1) && equal(taken_out, 1);
  if (one_for_one_is) {
    let r5 = "one value put in place of another";
    return r5;
  }
  let same_is = equal(put_in, taken_out);
  if (same_is) {
    let r6 = "several values put in place of others";
    return r6;
  }
  let r7 = "no one verb spans it";
  return r7;
}
