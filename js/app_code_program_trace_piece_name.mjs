import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { app_code_line_pieces_text } from "./app_code_line_pieces_text.mjs";
import { app_code_program_trace_name } from "./app_code_program_trace_name.mjs";
import { app_code_program_trace_record } from "./app_code_program_trace_record.mjs";
export function app_code_program_trace_piece_name(
  state,
  piece,
  from,
  to,
  side,
) {
  arguments_assert(arguments, 5);
  ("a name in an expression evaluated by looking up the value it holds, the evaluate added to state's actions and the value written into the line from from to to; side says it stands on a side of an operator, and then the evaluate also says the whole expression it stands in, as it reads now");
  let code = property_get(state, "code");
  let pieces = property_get(state, "pieces");
  let top_from = property_get(state, "top_from");
  let top_to = property_get(state, "top_to");
  let within = side
    ? app_code_line_pieces_text(code, pieces, top_from, top_to)
    : null;
  let actions = property_get(state, "actions");
  let values = property_get(state, "values");
  let value = app_code_program_trace_name(
    piece,
    from,
    to,
    actions,
    within,
    values,
  );
  app_code_program_trace_record(state, from, to, value);
  return value;
}
