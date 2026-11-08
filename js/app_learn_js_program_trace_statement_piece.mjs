import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { property_exists } from "./property_exists.mjs";
import { equal } from "./equal.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { null_is } from "./null_is.mjs";
import { text_slice } from "./text_slice.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { list_last } from "./list_last.mjs";
import { text_size } from "./text_size.mjs";
import { subtract } from "./subtract.mjs";
export function app_learn_js_program_trace_statement_piece(node, code) {
  arguments_assert(arguments, 2);
  ("the piece of its line a statement run is, when it is less than the whole line: from and to as places in the line as it is written, and the text between them; null when the statement is its whole line");
  ("2026-11-04, at the human's asking: a for with code after its second ; runs two things on one line at two different times, so the learner presses the one that runs, not the whole for. A for holding only its condition runs one thing, and is pressed whole, as a while is");
  let type = property_get(node, "type");
  let spanned = null;
  ("2026-11-04, at the human's asking: the code before a for's first ; is a third thing on that line, and for_start tells it from the other two, since it alone runs once");
  let for_start = property_exists(node, "for_start");
  if (property_exists(node, "for_update")) {
    spanned = property_get(node, "expression");
  } else if (for_start) {
    spanned = node;
  } else if (
    equal(type, "ForStatement") &&
    null_not_is(property_get(node, "update"))
  ) {
    spanned = property_get(node, "test");
  }
  if (null_is(spanned)) {
    return null;
  }
  let start = property_get(spanned, "start");
  let end = property_get(spanned, "end");
  let before = text_slice(code, 0, start);
  let lines_before = text_split_newline(before);
  let line_last = list_last(lines_before);
  let from = text_size(line_last);
  let r = {
    from,
    to: from + subtract(end, start),
    text: text_slice(code, start, end),
    for_start,
  };
  return r;
}
