import { commit_edit_kind_counts } from "./commit_edit_kind_counts.mjs";
import { property_get } from "./property_get.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { add } from "./add.mjs";
import { equal } from "./equal.mjs";
export async function commit_edit_prose_touched_kind(commit) {
  "Whether one hand-made edit touched the paragraphs written for a reader, and if it did, whether it touched anything else.";
  "THE READING BESIDE THIS ONE UNDERCOUNTS PROSE AND CANNOT HELP IT. It names a whole edit with a single kind, so an edit that reworded a paragraph and changed a line of code is filed under the code and the prose in it is never counted. That is right for what it is for - finding the largest missing command - and wrong for asking how often prose is edited by hand, because the answer it gives is a floor rather than a count.";
  "THREE ANSWERS RATHER THAN TWO. An edit that only touched prose is one a named verb would have made outright. An edit that touched prose beside anything else is one where a verb would have made part of it, and whether that is worth reaching for is a different question from the first. Keeping them apart is the whole reason for asking.";
  "IMPORTS ARE COUNTED AS NEITHER, because they are the canonicalizing pass's own work wearing a hand-made label, so an edit that reworded a paragraph and let the pass repair an import is prose only and not prose beside code.";
  arguments_assert(arguments, 1);
  let counts = await commit_edit_kind_counts(commit, "prose");
  let put_in = property_get(counts, "put_in");
  let taken_out = property_get(counts, "taken_out");
  let prose = add(put_in, taken_out);
  let untouched_is = equal(prose, 0);
  if (untouched_is) {
    let r = "no prose touched";
    return r;
  }
  let else_touched = property_get(counts, "else_touched");
  let alone_is = equal(else_touched, 0);
  if (alone_is) {
    let r2 = "prose only";
    return r2;
  }
  let r3 = "prose beside code";
  return r3;
}
