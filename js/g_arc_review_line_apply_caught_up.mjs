import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { g_arc_review_line_apply_mark } from "./g_arc_review_line_apply_mark.mjs";
export function g_arc_review_line_apply_caught_up(state, marks, line) {
  arguments_assert(arguments, 3);
  let conversation_read = property_get(state, "conversation");
  let caught_up = g_arc_review_line_apply_mark(
    marks,
    line,
    "catch_up",
    conversation_read,
  );
  return caught_up;
}
