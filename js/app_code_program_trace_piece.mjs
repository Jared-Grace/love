import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { equal } from "./equal.mjs";
import { app_code_program_trace_span } from "./app_code_program_trace_span.mjs";
import { app_code_program_trace_piece_name } from "./app_code_program_trace_piece_name.mjs";
import { app_code_expression_node } from "./app_code_expression_node.mjs";
import { app_code_expression_node_before } from "./app_code_expression_node_before.mjs";
import { error } from "./error.mjs";
import { app_code_program_trace_piece_solved } from "./app_code_program_trace_piece_solved.mjs";
export function app_code_program_trace_piece(state, piece, side) {
  arguments_assert(arguments, 3);
  ("what a piece of the expression comes to, any evaluating it took added to state's actions; side says it stands on a side of an operator rather than being the whole expression");
  ("state holds what every piece of one expression shares: the program's code, the values its names hold, the actions, the pieces of the line already written as their values, the evaluates of operators so far, and where the whole expression starts and ends");
  let type = property_get(piece, "type");
  if (equal(type, "Literal")) {
    let value = property_get(piece, "value");
    return value;
  }
  let code = property_get(state, "code");
  let span = side
    ? app_code_program_trace_span(piece, code)
    : {
        from: property_get(state, "top_from"),
        to: property_get(state, "top_to"),
      };
  let from = property_get(span, "from");
  let to = property_get(span, "to");
  if (equal(type, "Identifier")) {
    let value2 = app_code_program_trace_piece_name(
      state,
      piece,
      from,
      to,
      side,
    );
    return value2;
  }
  let expression = null;
  let unary_is =
    equal(type, "UnaryExpression") &&
    equal(property_get(piece, "operator"), "!");
  if (equal(type, "BinaryExpression") || equal(type, "LogicalExpression")) {
    let piece2 = property_get(piece, "left");
    let left = app_code_program_trace_piece(state, piece2, true);
    let piece3 = property_get(piece, "right");
    let right = app_code_program_trace_piece(state, piece3, true);
    let operator = property_get(piece, "operator");
    expression = app_code_expression_node(left, operator, right);
  } else if (unary_is) {
    let piece4 = property_get(piece, "argument");
    let argument = app_code_program_trace_piece(state, piece4, true);
    expression = app_code_expression_node_before("!", argument);
  } else {
    error({
      message:
        "only a value written out, a name, or an operator between them can be evaluated here",
      code,
      type,
    });
  }
  let value3 = app_code_program_trace_piece_solved(
    state,
    piece,
    expression,
    from,
    to,
  );
  return value3;
}
