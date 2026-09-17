import { equal } from "./equal.mjs";
import { greater_than } from "./greater_than.mjs";
import { app_code_lines_code_indices } from "./app_code_lines_code_indices.mjs";
import { list_shuffle } from "./list_shuffle.mjs";
import { list_first } from "./list_first.mjs";
import { list_size } from "./list_size.mjs";
import { list_swap_beginning } from "./list_swap_beginning.mjs";
export function app_code_lines_missing_batch(lines, index_last) {
  "One round of which line to leave out: every line of code once, in a shuffled order, so a student building lines over and over meets each of them before any comes back.";
  "A ROUND NEVER OPENS ON THE LINE THE ROUND BEFORE IT CLOSED ON, or the same line would be asked twice running. The opening line then trades places with the second rather than going to the end, because a line always sent to the end would close this round too, and so be pushed to the end of every round after it. A program with one line of code has nothing else to ask, so it is asked again.";
  let batch = app_code_lines_code_indices(lines);
  list_shuffle(batch);
  let first = list_first(batch);
  if (equal(first, index_last) && greater_than(list_size(batch), 1)) {
    list_swap_beginning(batch);
  }
  return batch;
}
