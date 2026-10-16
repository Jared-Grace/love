import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { app_code_program_trace_piece } from "./app_code_program_trace_piece.mjs";
import { property_set } from "./property_set.mjs";
export function app_code_program_trace_value(node, actions, code, values) {
  arguments_assert(arguments, 4);
  ("what an expression comes to, with any evaluating it took added to actions");
  ("2026-10-15, at the human's asking: an operator between two values written out is solved in one evaluate, as the lessons on operators solve one, so a program that logs 9 + 7 can be run a line at a time. Its name is the expression with each side written as the value it came to, and expression says the operator and its two sides, so a stepper can ask for what it comes to and offer the wrong values the operator lessons offer");
  ("2026-10-15, at the human's asking: a side may be a name, evaluated first, left before right, as the computer does, so a = a + 1; asks for a, then for what 11 + 1 comes to. within says the whole expression the name stands in, as it reads then, so a guide can say the name is part of it");
  ("2026-10-15, at the human's asking: a side may itself hold an operator, as a + b + c and n % 2 === 0 do, and !a and a || b are solved the same way. Every piece is solved in the order the computer solves it - the left side, then the right, then the operator between them - and each piece solved is written into the line as its value, so the operator over it then reads as values, 13 + c and then 13 + 14. whole says the whole expression as it reads when a piece is solved, and whole_value what it comes to, so a stepper can offer it as the wrong answer of solving the whole line instead of the step. Not picked: solving whichever operator is ready first, which the lesson on choosing the order teaches lands in the same place; the computer goes left to right, and these steps say what it does");
  ("Not picked: leaving the right of || unsolved when the left is true, and of && when it is false, as the computer does. A name looked up does nothing but give its value, so the value of the line is the same either way, and the lessons on || and && solve both sides; a side that did something, as a call does, is refused here before it could be run wrongly");
  let state = {
    code,
    values,
    actions,
    pieces: [],
    operated: [],
    top_from: property_get(node, "start"),
    top_to: property_get(node, "end"),
  };
  let value = app_code_program_trace_piece(state, node, false);
  let operated = property_get(state, "operated");
  for (let action of operated) {
    property_set(action, "whole_value", value);
  }
  return value;
}
