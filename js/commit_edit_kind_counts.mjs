import { commit_edit_lines_placed } from "./commit_edit_lines_placed.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { diff_lines_kind_counts } from "./diff_lines_kind_counts.mjs";
import { text_combine } from "./text_combine.mjs";
import { property_get } from "./property_get.mjs";
import { object_values } from "./object_values.mjs";
import { list_sum } from "./list_sum.mjs";
import { add } from "./add.mjs";
import { subtract } from "./subtract.mjs";
export async function commit_edit_kind_counts(commit, kind) {
  "$plain kind";
  "One hand-made edit said as three numbers, from the point of view of one sort of changed line - how many of that sort it put in, how many it took away, and how many lines of every other sort it touched.";
  "THE SORT IS ASKED FOR RATHER THAN FIXED, because the readings built on this differ only in which sort they are about. One asks what was done to the paragraphs written for a reader and one asks what was done to the values written into a record, and both then ask the identical next question - did the edit stay inside that sort or did it not.";
  "EVERYTHING ELSE IS ROLLED TOGETHER, and it is rolled up by taking this sort away from the whole rather than by naming the other sorts and adding them. Named, the arithmetic is silently wrong the day a sort is added to the counting underneath - the new lines land in no bucket and an edit that touched them reads as an edit that touched nothing else. Taken away from the whole, a sort nobody here has heard of still counts as something else, which is what the number means.";
  "IMPORTS ARE IN NONE OF THE THREE, because the counting underneath leaves them out: the canonicalizing pass writes them, so a hand-made label on that work is the label being wrong rather than a person having edited an import.";
  "THE TWO DIRECTIONS ADDED TOGETHER COME BACK AS WELL AS SEPARATELY, because every reading built on this asks first whether this sort of line was touched at all and only then which way it went. The sum is worked out here anyway to take it away from the whole, so handing it over costs nothing and saves each reading writing the addition again.";
  "It is one function rather than the same opening at the top of each reading, so two readings of the same commit cannot come to disagree about what it did while looking as though they agree.";
  arguments_assert(arguments, 2);
  let placed = await commit_edit_lines_placed(commit);
  let counts = diff_lines_kind_counts(placed);
  let put_in_name = text_combine(kind, "_put_in");
  let taken_out_name = text_combine(kind, "_taken_out");
  let put_in = property_get(counts, put_in_name);
  let taken_out = property_get(counts, taken_out_name);
  let every = object_values(counts);
  let whole = list_sum(every);
  let touched = add(put_in, taken_out);
  let else_touched = subtract(whole, touched);
  let r = {
    put_in,
    taken_out,
    touched,
    else_touched,
  };
  return r;
}
