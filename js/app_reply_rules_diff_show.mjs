import { arguments_assert } from "./arguments_assert.mjs";
import { diff_lines_paired } from "./diff_lines_paired.mjs";
import { app_reply_rules_diff_entries_show } from "./app_reply_rules_diff_entries_show.mjs";
export function app_reply_rules_diff_show(root, diff) {
  arguments_assert(arguments, 2);
  ("The lines a written-down change would alter, drawn the way a difference is read: what would go, what would come, and enough of what stays either side to see where it lands.");
  ("The signed lines are paired into rows first - a line merely reworded becomes one row carrying both wordings - and the rows are drawn by the drawing every difference page shares.");
  let entries = diff_lines_paired(diff);
  let drawn = app_reply_rules_diff_entries_show(root, entries);
  return drawn;
}
