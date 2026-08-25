import { list_size_subtract } from "./list_size_subtract.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_unique_is } from "./list_unique_is.mjs";
import { lists_equal_pair } from "./lists_equal_pair.mjs";
import { list_size } from "./list_size.mjs";
import { list_get } from "./list_get.mjs";
import { list_add } from "./list_add.mjs";
import { subtract } from "./subtract.mjs";
import { add } from "./add.mjs";
import { less_than } from "./less_than.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
export function js_statements_change_gaps_or_null(texts_before, texts_after) {
  "The places a run of statements was edited, given the run written out before and after, each place said as where it starts on either side and how many lines went out and came in there - or nothing at all, where the run cannot be lined up.";
  "THE LINES STILL STANDING ARE WHAT THE TWO SIDES ARE LINED UP ON, and which lines those are is asked for next door along with whether they can be lined up at all. An edit is then whatever sits between one survivor and the next, which turns a whole-run comparison - it can only ever say how many went in and how many came out - into a list of separate places, and a place is what a command is pointed at where a total is not.";
  "NOTHING COMES BACK WHEREVER THE LINING UP DOES, and it is handed straight on rather than judged again here. The caller then keeps the name it already had, which is the right answer to a run nobody can honestly say where the edit fell in.";
  arguments_assert(arguments, 2);
  let kept_before = js_statements_kept_or_null(texts_before, texts_after);
  let unlined = null_is(kept_before);
  if (unlined) {
    return null;
  }
  let gaps = [];
  let index_before = 0;
  let index_after = 0;
  let anchors = list_size(kept_before);
  for (let step = 0; less_than(step, anchors); step++) {
    let anchor = list_get(kept_before, step);
    let start_before = index_before;
    let start_after = index_after;
    while (not(equal(list_get(texts_before, index_before), anchor))) {
      index_before = add(index_before, 1);
    }
    while (not(equal(list_get(texts_after, index_after), anchor))) {
      index_after = add(index_after, 1);
    }
    let count_before = subtract(index_before, start_before);
    let count_after = subtract(index_after, start_after);
    let still = equal(count_before, 0) && equal(count_after, 0);
    if (not(still)) {
      list_add(gaps, {
        index_before: start_before,
        count_before,
        index_after: start_after,
        count_after,
      });
    }
    index_before = add(index_before, 1);
    index_after = add(index_after, 1);
  }
  let tail_before = list_size_subtract(texts_before, index_before);
  let tail_after = list_size_subtract(texts_after, index_after);
  let ended = equal(tail_before, 0) && equal(tail_after, 0);
  if (not(ended)) {
    list_add(gaps, {
      index_before,
      count_before: tail_before,
      index_after,
      count_after: tail_after,
    });
  }
  return gaps;
}
