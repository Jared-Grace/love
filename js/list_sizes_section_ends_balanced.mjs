import { arguments_assert } from "./arguments_assert.mjs";
import { list_size } from "./list_size.mjs";
import { list_sum } from "./list_sum.mjs";
import { less_than } from "./less_than.mjs";
import { subtract } from "./subtract.mjs";
import { multiply } from "./multiply.mjs";
import { divide } from "./divide.mjs";
import { list_sizes_section_end_best } from "./list_sizes_section_end_best.mjs";
import { null_not_is_assert_json } from "./null_not_is_assert_json.mjs";
import { list_add } from "./list_add.mjs";
import { add } from "./add.mjs";
export function list_sizes_section_ends_balanced(sizes, limit, sections) {
  "$plain sizes";
  "$plain limit";
  "$plain sections";
  "Where each of a given number of sections ends, cutting an ordered list of lengths so that no section passes a ceiling and the sections come out as near the same length as the pieces allow.";
  "How many sections there are is decided before this and handed in, not worked out here. Evenness is only a question once the number of pieces to divide into is fixed - a chooser free to add another section would always be able to make things more even by making more of them, and the answer would be one section per piece.";
  "The place each cut would ideally fall is the whole length shared out in equal steps. Naming the ideal and then choosing the nearest reachable point is what keeps a section that had to be cut short from pushing its shortfall down the whole list: the next cut is measured from the beginning of the whole rather than from the end of the section before it, so the following section takes back the slack instead of inheriting it.";
  "The last section is not chosen, it is what remains. Every cut before it was already made on the condition that what remained could still be filled, so the end of the list is the only place it can end.";
  arguments_assert(arguments, 3);
  let count = list_size(sizes);
  let total = list_sum(sizes);
  let ends = [];
  let start = 0;
  let done = 1;
  while (less_than(done, sections)) {
    let left = subtract(sections, done);
    let shared = multiply(total, done);
    let ideal = divide(shared, sections);
    let best = list_sizes_section_end_best(sizes, limit, start, left, ideal);
    null_not_is_assert_json(best, {
      start,
      left,
      sections,
      count,
    });
    list_add(ends, best);
    start = add(best, 1);
    done = add(done, 1);
  }
  let last = subtract(count, 1);
  list_add(ends, last);
  return ends;
}
