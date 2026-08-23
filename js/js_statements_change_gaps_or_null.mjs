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
  "THE LINES STILL STANDING ARE WHAT THE TWO SIDES ARE LINED UP ON. A statement written the same way on both sides did not move, so an edit is whatever sits between one such line and the next. That turns a whole-run comparison, which can only ever say how many went in and how many came out, into a list of separate places - and a place is what a command is pointed at, where a total is not.";
  "A LINE STANDING TWICE MAKES THE LINING UP A GUESS. Two identical statements in one run give no way to say which of them the surviving one on the other side answers to, and every place worked out after that rests on the guess. There is no honest naming of a run like that, so nothing comes back and the caller keeps the name it already had.";
  "A REORDERING IS HANDED BACK AS NOTHING TOO. Where the surviving lines come back in another order, the edit shuffled the run as well as changing it, and there are no places to walk at all: what sits between two survivors on one side is not what sits between the same two on the other.";
  arguments_assert(arguments, 2);
  function kept_before_lambda(text) {
    let held = list_includes(texts_after, text);
    return held;
  }
  function kept_after_lambda(text_after) {
    let held_after = list_includes(texts_before, text_after);
    return held_after;
  }
  let kept_before = list_filter(texts_before, kept_before_lambda);
  let kept_after = list_filter(texts_after, kept_after_lambda);
  let ordered = lists_equal_pair(kept_before, kept_after);
  if (not(ordered)) {
    return null;
  }
  let once = list_unique_is(kept_before);
  if (not(once)) {
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
  let tail_before = subtract(list_size(texts_before), index_before);
  let tail_after = subtract(list_size(texts_after), index_after);
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
