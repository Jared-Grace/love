import { fn_name } from "./fn_name.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { app_code_lines_missing_batch } from "./app_code_lines_missing_batch.mjs";
import { list_remove_first } from "./list_remove_first.mjs";
export function app_code_lines_missing_next_new() {
  ("Makes what hands out which line to leave out, one question at a time, in the rounds ",
    fn_name("app_code_lines_missing_batch"),
    " makes.");
  ("It remembers the round it is part way through and the line it asked last, so it is made once for a quiz and kept for every question of it; made afresh for each question it would remember nothing, and every question would be a round of its own.");
  let batch = [];
  let index_last = null;
  function next(lines) {
    if (list_empty_is(batch)) {
      batch = app_code_lines_missing_batch(lines, index_last);
    }
    index_last = list_remove_first(batch);
    return index_last;
  }
  return next;
}
