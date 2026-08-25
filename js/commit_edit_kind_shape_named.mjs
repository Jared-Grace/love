import { arguments_assert } from "./arguments_assert.mjs";
import { commit_edit_kind_counts } from "./commit_edit_kind_counts.mjs";
import { property_get } from "./property_get.mjs";
import { equal_not } from "./equal_not.mjs";
import { equal } from "./equal.mjs";
import { add } from "./add.mjs";
export async function commit_edit_kind_shape_named(commit, kind) {
  "$plain kind";
  "The shape of what one hand-made edit did to one sort of changed line, said in words that carry no opinion about what sort it was.";
  "IT IS THE ARITHMETIC AND NOT THE VERDICT. Whether a change one line in and one line out was a paragraph reworded or a value written over is the same counting either way; only the words for the answer differ, and the words belong to whoever asked. Written once, the two readings cannot come to disagree about the arithmetic while appearing to agree about the words.";
  "AN EDIT THAT TOUCHED ANYTHING ELSE IS ANSWERED FIRST AND ONLY THAT, because the question every reading built on this asks is what one command would have made outright, and an edit that also touched something else was never going to be made by one whatever this sort of line looks like.";
  "NOTHING PUT IN AND NOTHING TAKEN OUT IS ITS OWN ANSWER rather than one of the shapes, because a reading has to be able to tell an edit this sort was absent from apart from an edit that did something to it no single command would have done.";
  "THE UNEVEN CASE IS KEPT APART FROM THE EVEN ONE even where a caller has one word for both. Several lines in for the same number out is a run rewritten and might one day be worth a command; a different number in from out cannot be anything but a rewrite, and folding them together here would take that difference away from a caller that wanted it.";
  arguments_assert(arguments, 2);
  let counts = await commit_edit_kind_counts(commit, kind);
  let else_touched = property_get(counts, "else_touched");
  let touched_else_is = equal_not(else_touched, 0);
  if (touched_else_is) {
    let r = "something else touched";
    return r;
  }
  let put_in = property_get(counts, "put_in");
  let taken_out = property_get(counts, "taken_out");
  let left = add(put_in, taken_out);
  let untouched_is = equal(left, 0);
  if (untouched_is) {
    let r2 = "untouched";
    return r2;
  }
  let added_only_is = equal(taken_out, 0);
  if (added_only_is) {
    let r3 = "put in only";
    return r3;
  }
  let removed_only_is = equal(put_in, 0);
  if (removed_only_is) {
    let r4 = "taken out only";
    return r4;
  }
  let one_for_one_is = equal(put_in, 1) && equal(taken_out, 1);
  if (one_for_one_is) {
    let r5 = "one for one";
    return r5;
  }
  let same_is = equal(put_in, taken_out);
  if (same_is) {
    let r6 = "several for several";
    return r6;
  }
  let r7 = "uneven";
  return r7;
}
