import { app_code_lines_code_indices } from "./app_code_lines_code_indices.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_filter } from "./list_filter.mjs";
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
  ("A round is made from one program's lines, and the programs of a quiz need not all be the same length: one with else beside one with two ifs differ by a line. So before each question the round keeps only the lines this program has as code, and starts afresh when none are left; without that it asked for line 8 of a program of 7, 2026-10-08. Where every program has the same lines, which was every quiz before then, it keeps the whole round and changes nothing.");
  function next(lines) {
    let indices = app_code_lines_code_indices(lines);
    function fits(index) {
      let included = list_includes(indices, index);
      return included;
    }
    batch = list_filter(batch, fits);
    if (list_empty_is(batch)) {
      batch = app_code_lines_missing_batch(lines, index_last);
    }
    index_last = list_remove_first(batch);
    return index_last;
  }
  return next;
}
