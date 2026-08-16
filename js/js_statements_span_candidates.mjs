import { arguments_assert } from "./arguments_assert.mjs";
import { js_statements_span_candidate_longest } from "./js_statements_span_candidate_longest.mjs";
import { list_add } from "./list_add.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_size } from "./list_size.mjs";
import { list_sort_number_mapper_reverse } from "./list_sort_number_mapper_reverse.mjs";
import { not } from "./not.mjs";
import { null_is } from "./null_is.mjs";
import { property_get_curried_right } from "./property_get_curried_right.mjs";
import { span_row_contained_is } from "./span_row_contained_is.mjs";
export function js_statements_span_candidates(statements, addresses) {
  arguments_assert(arguments, 2);
  ("Every run of lines in a body that could be cut out into a function of its own, longest first, with no run listed that another one already holds whole.");
  ("The longest run from each starting line is taken, and then the ones sitting inside another are dropped. That leaves one entry per place in the function rather than one per pair of ends, which is the difference between a list somebody reads and a list nobody does.");
  ("A single line is not offered. A run of one is not a run, and cutting one line out gives a function whose whole body is the line that used to be there - the same reading in two files instead of one.");
  ("Longest first, and no further ordering than that. The lifting twin has a real reason to break its ranking, because lifting one closure makes the next cheaper; runs of lines do not stand inside one another that way once the held ones are gone, so length is the whole of it.");
  ("Nothing is written and nothing is moved. Whether a run listed here is a good function is a judgement about meaning, which this cannot make - it says only that the cut would not go silently wrong.");
  let count = list_size(statements);
  let rows = [];
  for (let from = 0; from < count; from++) {
    let row = js_statements_span_candidate_longest(statements, addresses, from);
    if (null_is(row)) {
      continue;
    }
    let size = property_get(row, "size");
    let single = size < 2;
    if (single) {
      continue;
    }
    list_add(rows, row);
  }
  function kept_is(row) {
    let contained = span_row_contained_is(rows, row);
    let keep = not(contained);
    return keep;
  }
  let kept = list_filter(rows, kept_is);
  let sizer = property_get_curried_right("size");
  let ranked = list_sort_number_mapper_reverse(kept, sizer);
  return ranked;
}
