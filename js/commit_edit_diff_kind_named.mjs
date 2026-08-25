import { commit_edit_diff_kinds_only_named_or_null } from "./commit_edit_diff_kinds_only_named_or_null.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { commit_edit_diff_code_lines_named } from "./commit_edit_diff_code_lines_named.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { placed_lines_of_kind } from "./placed_lines_of_kind.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { equal } from "./equal.mjs";
import { list_size } from "./list_size.mjs";
export function commit_edit_diff_kind_named(placed) {
  "What one commit's change amounts to, in a few words a person can read down a list of - imports only, prose only, one line added, one call swapped for another, several lines.";
  "Lines that are prose or imports are set aside first and the words are chosen from what is left, which is why a commit touching thirty import lines and one line of code is called one line of code. Counting the lines rather than the kinds would have called it a large change and hidden the only part anybody needs to look at.";
  "THE TWO QUESTIONS ARE ASKED NEXT DOOR AND IN THIS ORDER: whether every line is of one kind, which is answered from the kinds alone; and failing that, what the program lines amount to. What is left here is the ordering and the one case neither answers - a commit of several kinds that are all set-aside kinds, which no single-kind reading can name and which has no program to be placed by.";
  "THE LINES ARRIVE ALREADY CARRYING THEIR KINDS AND ARE NOT READ AGAIN HERE. They used to arrive as two lists side by side, and this then worked the kinds out a second time from the lines to pick the program out of them - which threw away every kind the file had settled and put the line's own undecided answer back. One list of lines each holding its kind cannot come apart that way.";
  arguments_assert(arguments, 1);
  let kinds = list_map_property(placed, "kind");
  let changed = list_map_property(placed, "line");
  let only = commit_edit_diff_kinds_only_named_or_null(kinds);
  let uniform = null_not_is(only);
  if (uniform) {
    return only;
  }
  let code = placed_lines_of_kind(placed, "code");
  let size = list_size(code);
  let none = equal(size, 0);
  if (none) {
    let r = "comment, values, names alone and imports only";
    return r;
  }
  let r8 = commit_edit_diff_code_lines_named(code, changed);
  return r8;
}
