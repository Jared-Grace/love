import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { property_list_empty_not_is } from "./property_list_empty_not_is.mjs";
import { list_filter } from "./list_filter.mjs";
import { property_get_curried_right } from "./property_get_curried_right.mjs";
import { list_sort_number_mapper_reverse } from "./list_sort_number_mapper_reverse.mjs";
import { list_concat } from "./list_concat.mjs";
import { not } from "./not.mjs";
export function lift_candidates_cut_order(rows) {
  arguments_assert(arguments, 1);
  ("Every lift candidate in the order the cuts should actually be made: the ones that close over no other function written in the same place first, biggest first, and the rest after them.");
  ("Ranking by size alone sends a reader at the wrong cut. The biggest closure in a long function is usually the one the others are written to serve, so lifting it first hands those siblings to it as parameters - a function of ten arguments, four of them functions, which reads worse than the length being cut. Lifting a leaf first costs nothing and takes its name off the big one's list, so the same cut made afterwards is a cut with one parameter.");
  ("A value closed over is fine as a parameter and a function closed over is not, and that is the whole discriminator. Handing a number in says what to draw with. Handing a helper in says the two were never really separate, and now a reader has to hold both to read either.");
  ("Nothing is dropped. A candidate that closes over a sibling is still a real cut and still listed - it is only listed after the cut that would make it cheaper, so working the list from the top is working it in the right order.");
  ("Measured on ",
    fn_name("app_code_lesson_expression_repeated_generic"),
    " on 2026-08-03: ranked by size the first cut was expanded_counted, thirty-five lines closing over four sibling helpers and one word. Ranked this way it is cell_at, four lines closing over nothing.");
  function stuck_is(row) {
    let stuck = property_list_empty_not_is(row, "closed_nested");
    return stuck;
  }
  function free_is(row) {
    let stuck = stuck_is(row);
    let row_free = not(stuck);
    return row_free;
  }
  let free = list_filter(rows, free_is);
  let stuck = list_filter(rows, stuck_is);
  let sizer = property_get_curried_right("size");
  let free_ranked = list_sort_number_mapper_reverse(free, sizer);
  let stuck_ranked = list_sort_number_mapper_reverse(stuck, sizer);
  let ordered = list_concat(free_ranked, stuck_ranked);
  return ordered;
}
