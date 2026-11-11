import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { app_learn_js_line_pieces_text } from "./app_learn_js_line_pieces_text.mjs";
import { app_learn_js_program_trace_name } from "./app_learn_js_program_trace_name.mjs";
import { app_learn_js_program_trace_record } from "./app_learn_js_program_trace_record.mjs";
export function app_learn_js_program_trace_piece_named(
  state,
  name,
  value,
  from,
  to,
  side,
) {
  arguments_assert(arguments, 6);
  ("a name in an expression evaluated as the value it holds, the evaluate added to state's actions and the value written into the line from from to to; side says it stands on a side of an operator, and then the evaluate also says the whole expression it stands in, as it reads now");
  ("2026-11-11: handed the name and its value rather than the piece, so a.length is evaluated as a name is, holding the array's size");
  let code = property_get(state, "code");
  let pieces = property_get(state, "pieces");
  let top_from = property_get(state, "top_from");
  let top_to = property_get(state, "top_to");
  let within = side
    ? app_learn_js_line_pieces_text(code, pieces, top_from, top_to)
    : null;
  let actions = property_get(state, "actions");
  app_learn_js_program_trace_name(name, value, from, to, actions, within);
  app_learn_js_program_trace_record(state, from, to, value);
  return value;
}
