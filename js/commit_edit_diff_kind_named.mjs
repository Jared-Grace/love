import { arguments_assert } from "./arguments_assert.mjs";
import { kinds_all_is } from "./kinds_all_is.mjs";
import { diff_line_kind } from "./diff_line_kind.mjs";
import { equal } from "./equal.mjs";
import { list_add } from "./list_add.mjs";
import { list_size } from "./list_size.mjs";
import { commit_edit_callee_swap_is } from "./commit_edit_callee_swap_is.mjs";
import { list_first } from "./list_first.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
export function commit_edit_diff_kind_named(kinds, changed) {
  arguments_assert(arguments, 2);
  let only_import = kinds_all_is(kinds, "import");
  if (only_import) {
    let r = "imports only (the canonicalizing pass)";
    return r;
  }
  let only_comment = kinds_all_is(kinds, "comment");
  if (only_comment) {
    let r2 = "comment prose only";
    return r2;
  }
  let code = [];
  for (let line of changed) {
    let kind = diff_line_kind(line);
    let real = equal(kind, "code");
    if (real) {
      list_add(code, line);
    }
  }
  let size = list_size(code);
  let none = equal(size, 0);
  if (none) {
    let r3 = "comment and imports only";
    return r3;
  }
  let pair = equal(size, 2);
  if (pair) {
    let swapped = commit_edit_callee_swap_is(code);
    if (swapped) {
      let r4 = "one call, different function put in its place";
      return r4;
    }
    let r5 = "one line of code replaced";
    return r5;
  }
  let single = equal(size, 1);
  if (single) {
    let first = list_first(code);
    let put_in = text_starts_with(first, "+");
    if (put_in) {
      let r6 = "one line of code added";
      return r6;
    }
    let r7 = "one line of code removed";
    return r7;
  }
  let r8 = "several lines of code";
  return r8;
}
