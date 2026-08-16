import { list_filter_size } from "./list_filter_size.mjs";
import { js_statement_work_is } from "./js_statement_work_is.mjs";
import { not } from "./not.mjs";
import { property_get_curried_right } from "./property_get_curried_right.mjs";
import { list_sort_number_mapper } from "./list_sort_number_mapper.mjs";
import { property_get } from "./property_get.mjs";
import { less_than } from "./less_than.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { js_statements_span_candidate_best } from "./js_statements_span_candidate_best.mjs";
import { list_add } from "./list_add.mjs";
import { list_size } from "./list_size.mjs";
import { null_is } from "./null_is.mjs";
export function js_statements_span_candidates(statements, addresses) {
  arguments_assert(arguments, 2);
  ("Every run of lines in a body that could be cut out into a function of its own, the one leaving the smallest worst piece first.");
  ("One run is taken from each starting line - the best one from there rather than every one - so the list is as long as the body at most, and usually far shorter because most lines start no run that can be cut at all.");
  ("A single line is not offered. A run of one is not a run, and cutting one line out gives a function whose whole body is the line that used to be there - the same reading in two files instead of one.");
  ("A run sitting wholly inside another is kept rather than dropped, which is the opposite of what was first written here. Dropping them reads as tidying and is not: the best run from a later line is often held inside a worse run from an earlier one, and the tidy list threw away the better cut every time it happened.");
  ("A run that would gain nothing is not offered either, and that is the same test written once rather than a second rule: a cut is worth something exactly when the longer of the two pieces is shorter than what stood there before. A run covering every line of work fails it, because the function it makes is the function it came out of.");
  ("Nothing is written and nothing is moved. Whether a run listed here is a good function is a judgement about meaning, which this cannot make - it says only that the cut would not go silently wrong, and how much of the length it would take away.");
  let count = list_size(statements);
  let count_work = list_filter_size(statements, js_statement_work_is);
  let rows = [];
  for (let from = 0; less_than(from, count); from++) {
    let row = js_statements_span_candidate_best(statements, addresses, from);
    if (null_is(row)) {
      continue;
    }
    let size = property_get(row, "size");
    let single = less_than(size, 2);
    if (single) {
      continue;
    }
    let worst = property_get(row, "worst");
    let gains = less_than(worst, count_work);
    if (not(gains)) {
      continue;
    }
    list_add(rows, row);
  }
  let worster = property_get_curried_right("worst");
  let ranked = list_sort_number_mapper(rows, worster);
  return ranked;
}
