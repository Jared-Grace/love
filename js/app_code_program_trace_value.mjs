import { app_code_program_trace_span } from "./app_code_program_trace_span.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { app_code_line_pieces_text } from "./app_code_line_pieces_text.mjs";
import { app_code_line_pieces_add } from "./app_code_line_pieces_add.mjs";
import { equal } from "./equal.mjs";
import { app_code_program_trace_name } from "./app_code_program_trace_name.mjs";
import { json_to } from "./json_to.mjs";
import { app_code_expression_node } from "./app_code_expression_node.mjs";
import { app_code_expression_node_before } from "./app_code_expression_node_before.mjs";
import { error } from "./error.mjs";
import { app_code_expression_solved } from "./app_code_expression_solved.mjs";
import { list_add } from "./list_add.mjs";
import { property_set } from "./property_set.mjs";
export function app_code_program_trace_value(node, actions, code, values) {
  arguments_assert(arguments, 4);
  ("what an expression comes to, with any evaluating it took added to actions");
  ("2026-10-15, at the human's asking: an operator between two values written out is solved in one evaluate, as the lessons on operators solve one, so a program that logs 9 + 7 can be run a line at a time. Its name is the expression with each side written as the value it came to, and expression says the operator and its two sides, so a stepper can ask for what it comes to and offer the wrong values the operator lessons offer");
  ("2026-10-15, at the human's asking: a side may be a name, evaluated first, left before right, as the computer does, so a = a + 1; asks for a, then for what 11 + 1 comes to. within says the whole expression the name stands in, as it reads then, so a guide can say the name is part of it");
  ("2026-10-15, at the human's asking: a side may itself hold an operator, as a + b + c and n % 2 === 0 do, and !a and a || b are solved the same way. Every piece is solved in the order the computer solves it - the left side, then the right, then the operator between them - and each piece solved is written into the line as its value, so the operator over it then reads as values, 13 + c and then 13 + 14. whole says the whole expression as it reads when a piece is solved, and whole_value what it comes to, so a stepper can offer it as the wrong answer of solving the whole line instead of the step. Not picked: solving whichever operator is ready first, which the lesson on choosing the order teaches lands in the same place; the computer goes left to right, and these steps say what it does");
  ("Not picked: leaving the right of || unsolved when the left is true, and of && when it is false, as the computer does. A name looked up does nothing but give its value, so the value of the line is the same either way, and the lessons on || and && solve both sides; a side that did something, as a call does, is refused here before it could be run wrongly");
  let top_from = property_get(node, "start");
  let top_to = property_get(node, "end");
  let solved = [];
  let operated = [];
  function text_now(from, to) {
    let r = app_code_line_pieces_text(code, solved, from, to);
    return r;
  }
  function piece_record(from, to, written) {
    solved = app_code_line_pieces_add(solved, from, to, written);
  }
  function span_of(side) {
    let r2 = app_code_program_trace_span(side, code);
    return r2;
  }
  function piece_of(piece, side) {
    "what a piece of the expression comes to, any evaluating it took added to actions; side says it stands on a side of an operator rather than being the whole expression";
    let type = property_get(piece, "type");
    if (equal(type, "Literal")) {
      let value = property_get(piece, "value");
      return value;
    }
    let span = side
      ? span_of(piece)
      : {
          from: top_from,
          to: top_to,
        };
    let from2 = property_get(span, "from");
    let to2 = property_get(span, "to");
    if (equal(type, "Identifier")) {
      let within = side ? text_now(top_from, top_to) : null;
      let value2 = app_code_program_trace_name(
        piece,
        from2,
        to2,
        actions,
        within,
        values,
      );
      let json = json_to(value2);
      piece_record(from2, to2, json);
      return value2;
    }
    let expression = null;
    let value8 = null;
    let unary_is =
      equal(type, "UnaryExpression") &&
      equal(property_get(piece, "operator"), "!");
    if (equal(type, "BinaryExpression") || equal(type, "LogicalExpression")) {
      let value10 = property_get(piece, "left");
      let left = piece_of(value10, true);
      let value11 = property_get(piece, "right");
      let right = piece_of(value11, true);
      let operator = property_get(piece, "operator");
      expression = app_code_expression_node(left, operator, right);
    } else if (unary_is) {
      let value12 = property_get(piece, "argument");
      let argument = piece_of(value12, true);
      expression = app_code_expression_node_before("!", argument);
    } else {
      error({
        message:
          "only a value written out, a name, or an operator between them can be evaluated here",
        code,
        type,
      });
    }
    ("2026-10-16: expression is the very shape the expression lessons take a line apart in, built and worked out by their own functions, so a step a program takes and a step a lesson takes are one step: the wrong values offered beside it are worked out from it as a lesson's are. A ! had been written with its one side as argument, where the shape says right; nothing read it there only because a ! always comes to true or false, and those are offered without looking inside");
    value8 = app_code_expression_solved(expression, expression);
    let piece_from = property_get(piece, "start");
    let piece_to = property_get(piece, "end");
    let name4 = text_now(piece_from, piece_to);
    let whole = text_now(top_from, top_to);
    let action = {
      kind: "evaluate",
      name: name4,
      value: value8,
      from: from2,
      to: to2,
      expression,
      within: null,
      lead: "",
      whole,
      whole_value: null,
    };
    list_add(actions, action);
    list_add(operated, action);
    let json2 = json_to(value8);
    piece_record(from2, to2, json2);
    return value8;
  }
  let value9 = piece_of(node, false);
  for (let action2 of operated) {
    property_set(action2, "whole_value", value9);
  }
  return value9;
}
