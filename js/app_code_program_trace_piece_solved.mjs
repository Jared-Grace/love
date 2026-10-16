import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_expression_solved } from "./app_code_expression_solved.mjs";
import { property_get } from "./property_get.mjs";
import { app_code_line_pieces_text } from "./app_code_line_pieces_text.mjs";
import { list_add } from "./list_add.mjs";
import { app_code_program_trace_record } from "./app_code_program_trace_record.mjs";
export function app_code_program_trace_piece_solved(
  state,
  piece,
  expression,
  from,
  to,
) {
  arguments_assert(arguments, 5);
  ("an operator whose sides are already values worked out: the evaluate added to state's actions and to its operated, named by the piece as the line reads now, and its value written into the line from from to to");
  ("2026-10-16: expression is the very shape the expression lessons take a line apart in, built and worked out by their own functions, so a step a program takes and a step a lesson takes are one step: the wrong values offered beside it are worked out from it as a lesson's are. A ! had been written with its one side as argument, where the shape says right; nothing read it there only because a ! always comes to true or false, and those are offered without looking inside");
  let value = app_code_expression_solved(expression, expression);
  let code = property_get(state, "code");
  let pieces = property_get(state, "pieces");
  let piece_from = property_get(piece, "start");
  let piece_to = property_get(piece, "end");
  let name = app_code_line_pieces_text(code, pieces, piece_from, piece_to);
  let top_from = property_get(state, "top_from");
  let top_to = property_get(state, "top_to");
  let whole = app_code_line_pieces_text(code, pieces, top_from, top_to);
  let action = {
    kind: "evaluate",
    name,
    value,
    from,
    to,
    expression,
    within: null,
    lead: "",
    whole,
    whole_value: null,
  };
  let list = property_get(state, "actions");
  list_add(list, action);
  let list2 = property_get(state, "operated");
  list_add(list2, action);
  app_code_program_trace_record(state, from, to, value);
  return value;
}
