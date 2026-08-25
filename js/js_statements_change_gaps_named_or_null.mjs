import { list_size_equal } from "./list_size_equal.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { js_statements_change_gaps_or_null } from "./js_statements_change_gaps_or_null.mjs";
import { property_get } from "./property_get.mjs";
import { list_first } from "./list_first.mjs";
import { null_is } from "./null_is.mjs";
import { less_than } from "./less_than.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
export function js_statements_change_gaps_named_or_null(
  texts_before,
  texts_after,
) {
  "The name for an edit that put statements in and took statements out at once, said as what happened at the one place it happened - or nothing at all, where the run cannot be lined up or the edit reached more places than one.";
  "STATEMENTS ADDED AND REMOVED IS THE LAST ARITHMETIC BUCKET AND THE LARGEST ONE LEFT. It says the run came out a different length and no more, and measured over two thousand commits it was ninety two of the four hundred and twenty one hand-made edits to a single file - more than one edit in five, under a name that points a command at nothing.";
  "ONE PLACE IS A COMMAND AND SEVERAL PLACES ARE NOT. Where every line that survived stands still and all the change sits between one pair of them, the edit is a run of lines swapped for another run at a known spot, which somebody can write a command for. Where the change is spread over several such spots it is several edits committed together, and there is no single thing to name - so the caller keeps the name it had rather than being handed a lie with a place in it.";
  "THE TWO LOPSIDED SHAPES ARE WORTH TELLING APART FROM THE EVEN ONE. Several lines going out and a single line coming in is a run collapsed into one call, which is what the cut does and what somebody doing the cut's work by hand leaves behind. One line going out and several coming in is the reverse, a call opened back up into the lines it stood for. Both are commands; a run of lines swapped for another run of lines is a reworking, and honest as one.";
  "A PLACE WHERE ONLY ONE SIDE HAS LINES IS NOT REACHED FROM HERE AND IS STILL REFUSED. An edit whose one place takes nothing out is an addition, and the reading above this one names it before this is ever asked; the same goes for a removal, and for a single line swapped for a single line. Each of those has a name already, and answering here would be a second reading of the same edit free to disagree with the first.";
  arguments_assert(arguments, 2);
  let gaps = js_statements_change_gaps_or_null(texts_before, texts_after);
  let apart = null_is(gaps);
  if (apart) {
    return null;
  }
  let one_place = list_size_equal(gaps, 1);
  if (not(one_place)) {
    return null;
  }
  let gap = list_first(gaps);
  let count_before = property_get(gap, "count_before");
  let count_after = property_get(gap, "count_after");
  let nothing_out = equal(count_before, 0);
  let nothing_in = equal(count_after, 0);
  if (nothing_out || nothing_in) {
    return null;
  }
  let one_out = equal(count_before, 1);
  let one_in = equal(count_after, 1);
  if (one_out && one_in) {
    return null;
  }
  let many_out = less_than(1, count_before);
  if (many_out && one_in) {
    let r = "a run of statements collapsed into one";
    return r;
  }
  if (one_out) {
    let r2 = "one statement grown into a run";
    return r2;
  }
  let r3 = "one run of statements reworked";
  return r3;
}
