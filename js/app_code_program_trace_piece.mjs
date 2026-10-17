import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { equal } from "./equal.mjs";
import { text_slice } from "./text_slice.mjs";
import { subtract } from "./subtract.mjs";
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
  ("a minus straight before a number written out is that number's sign, so -1 is a value written out as 5 is, with nothing to evaluate - the minus lesson teaches it as the negative sign. Added 2026-10-17 so the programs of Square inside the grid, whose squares one past an edge sit at -1, can be stepped through. Not picked: evaluating it as an operator before its number, as ! is, which would ask the learner to solve a number they can already read");
  let negative_is =
    equal(type, "UnaryExpression") &&
    equal(property_get(piece, "operator"), "-") &&
    equal(property_get(property_get(piece, "argument"), "type"), "Literal");
  if (negative_is) {
    let object = property_get(piece, "argument");
    let value_negative = -property_get(object, "value");
    return value_negative;
  }
  let code = property_get(state, "code");
  let from = side
    ? property_get(piece, "start")
    : property_get(state, "top_from");
  let to = side ? property_get(piece, "end") : property_get(state, "top_to");
  ("a side of an operator stands in the line with any ( ) written round it, since once it is solved they go with it: (3 + 5) / 2 reads 8 / 2. A ( just before a side and a ) just after it are a pair, since the side holds as many of each as it closes; and they group the side rather than belonging to a call or an if, whose ( ) hold the whole of what is in them, which here is the operator the side stands in");
  while (
    side &&
    equal(text_slice(code, subtract(from, 1), from), "(") &&
    equal(text_slice(code, to, to + 1), ")")
  ) {
    from = subtract(from, 1);
    to = to + 1;
  }
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
    let operator = property_get(piece, "operator");
    ("2026-10-17, at the human's asking: both sides of an && or an || are read, as both sides of every other operator are - the beginner's rule the lessons teach. Nothing this can trace changes a name or can fail on being read, so reading a side JavaScript would skip never changes the answer; a name not declared yet, on a side JavaScript skips, is the one line it could not trace, and no lesson draws one. Not picked: skipping the right side once the left settles it, as JavaScript does, built earlier the same day and kept for the lesson on stopping early");
    let right = app_code_program_trace_piece(state, piece3, true);
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
