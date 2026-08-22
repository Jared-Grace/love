import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
export function g_arc_review_line_apply_counted(marks, line) {
  arguments_assert(arguments, 2);
  let prefix = property_get(marks, "tally");
  let counted = text_starts_with(line, prefix);
  return counted;
}
