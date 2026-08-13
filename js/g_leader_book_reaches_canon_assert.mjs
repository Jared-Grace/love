import { equal_not } from "./equal_not.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { fn_name } from "./fn_name.mjs";
import { g_leader_book_reaches } from "./g_leader_book_reaches.mjs";
import { ebible_book_codes } from "./ebible_book_codes.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_add } from "./list_add.mjs";
import { list_index_of } from "./list_index_of.mjs";
import { not } from "./not.mjs";
import { equal } from "./equal.mjs";
import { list_sort_number } from "./list_sort_number.mjs";
import { list_last } from "./list_last.mjs";
import { add } from "./add.mjs";
import { subtract } from "./subtract.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { assert_json } from "./assert_json.mjs";
export function g_leader_book_reaches_canon_assert() {
  "every leader reach names real canon books, in one unbroken run of the canon, with the book the arcs are for named first and named by only one reach";
  "The reaches OVERLAP by design, so the check that guards the book divisions - flatten and compare to the canon - cannot be reused here. What replaces it is the three ways a hand-written reach goes wrong: a misspelt code that silently reaches nothing, a book borrowing from somewhere far away in the canon so the arcs jump books a reader never opened, and the same book named as home twice so one of its two reaches is unreachable.";
  "CONTIGUITY also catches a book named twice inside one reach: two copies of a code span less of the canon than the entry is long. So it is one comparison rather than two passes.";
  let reaches = g_leader_book_reaches();
  let canon = ebible_book_codes();
  let problems = [];
  let homes = [];
  for (let reach of reaches) {
    let home = reach[0];
    let repeated = list_includes(homes, home);
    if (repeated) {
      list_add(problems, {
        home,
        reason: "two reaches are written for the same book",
      });
    }
    list_add(homes, home);
    let indexes = [];
    for (let book of reach) {
      let index = list_index_of(canon, book);
      let found = equal_not(index, -1);
      if (found) {
        list_add(indexes, index);
        continue;
      }
      list_add(problems, {
        reach,
        book,
        reason: "not a canon book code",
      });
    }
    let sorted = list_sort_number(indexes);
    let first = sorted[0];
    let end = list_last(sorted);
    let left = subtract(end, first);
    let span = add(left, 1);
    let home_index = list_index_of(canon, home);
    let forward = greater_than(end, home_index);
    if (forward) {
      list_add(problems, {
        reach,
        reason: "borrows from a book that comes AFTER it in the canon",
      });
    }
    let contiguous = equal(span, reach.length);
    if (not(contiguous)) {
      list_add(problems, {
        reach,
        span,
        reason: "not one unbroken run of the canon",
      });
    }
  }
  let clean = list_empty_is(problems);
  let f_name = fn_name("g_leader_book_reaches");
  assert_json(clean, {
    problems,
    hint: text_combine_multiple([
      "each entry of ",
      f_name,
      " is one book followed by the neighbours it may borrow arcs from; every code must be a canon book, the entry must cover an unbroken run of the canon, and each book may be the first code of only one entry",
    ]),
  });
  return clean;
}
