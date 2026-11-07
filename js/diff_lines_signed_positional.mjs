import { arguments_assert } from "./arguments_assert.mjs";
import { list_size } from "./list_size.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { less_than } from "./less_than.mjs";
import { equal } from "./equal.mjs";
import { list_add } from "./list_add.mjs";
import { text_combine } from "./text_combine.mjs";
export function diff_lines_signed_positional(before, after) {
  arguments_assert(arguments, 2);
  ("Two wordings of the same few lines set out as a signed difference, matching each line only against the line in the same place in the other wording.");
  ("★ IT MATCHES BY PLACE AND NOT BY SEARCHING, BECAUSE IT IS FOR A REWORDING. A test's lines are its message and then its replies in order, so a reworded reply is still the same reply in the same place, and pairing by place puts the old wording straight over the new one. A line that moved would show as gone in one place and come in another, which is still true, only longer.");
  ("Lines that differ are kept in runs, the gone ones before the brought ones, because that is the shape the drawing pairs into one reworded row.");
  let size_before = list_size(before);
  let size_after = list_size(after);
  let signed = [];
  let gone = [];
  let brought = [];
  function flush() {
    list_add_multiple(signed, gone);
    list_add_multiple(signed, brought);
    gone = [];
    brought = [];
  }
  let i = 0;
  while (less_than(i, size_before) || less_than(i, size_after)) {
    let has_before = less_than(i, size_before);
    let has_after = less_than(i, size_after);
    if (has_before && has_after && equal(before[i], after[i])) {
      flush();
      let item = text_combine(" ", before[i]);
      list_add(signed, item);
      i = i + 1;
      continue;
    }
    if (has_before) {
      let item2 = text_combine("-", before[i]);
      list_add(gone, item2);
    }
    if (has_after) {
      let item3 = text_combine("+", after[i]);
      list_add(brought, item3);
    }
    i = i + 1;
  }
  flush();
  return signed;
}
