import { arguments_assert } from "./arguments_assert.mjs";
import { text_to } from "./text_to.mjs";
import { text_includes } from "./text_includes.mjs";
import { property_get } from "./property_get.mjs";
import { list_map } from "./list_map.mjs";
import { js_operators_arithmetic } from "./js_operators_arithmetic.mjs";
import { list_filter } from "./list_filter.mjs";
import { equal } from "./equal.mjs";
import { list_size } from "./list_size.mjs";
import { not } from "./not.mjs";
import { list_first } from "./list_first.mjs";
import { text_split } from "./text_split.mjs";
import { text_trim } from "./text_trim.mjs";
import { list_get } from "./list_get.mjs";
import { boolean_to_text_validity } from "./boolean_to_text_validity.mjs";
export function app_code_operator_validity_wrong_say(question, answer, choice) {
  arguments_assert(arguments, 3);
  ("said when a learner calls a line with one arithmetic operator valid or invalid wrongly: what the operator needs on each side, and whether the line has it, as parts that take turns between words and code. null for a line holding no arithmetic operator, more than one, or one used twice, and for an invalid line with a value on both sides, whose fault is something else");
  ("The operator is read off the line rather than handed in by the lesson, so every lesson asking about such lines is answered without being changed, and a lesson about something else is left silent. Not picked: the parser's own complaint, which is written for programmers; one sentence for every line, which would call a line valid without saying why");
  let line = text_to(question);
  let right_answer = text_to(answer);
  function in_line(operator) {
    let r = text_includes(line, operator);
    return r;
  }
  function symbol_get(o) {
    let symbol = property_get(o, "operator");
    return symbol;
  }
  let list = js_operators_arithmetic();
  let symbols = list_map(list, symbol_get);
  let found = list_filter(symbols, in_line);
  let left2 = list_size(found);
  let one = equal(left2, 1);
  if (not(one)) {
    return null;
  }
  let operator = list_first(found);
  let sides = text_split(line, operator);
  let left3 = list_size(sides);
  let two = equal(left3, 2);
  if (not(two)) {
    return null;
  }
  let message = list_get(sides, 0);
  let left = text_trim(message);
  let message2 = list_get(sides, 1);
  let right = text_trim(message2);
  let valid = boolean_to_text_validity(true);
  let invalid = boolean_to_text_validity(false);
  let is_valid = equal(right_answer, valid);
  let is_invalid = equal(right_answer, invalid);
  let right_empty = equal(right, "");
  let left_empty = equal(left, "");
  if (right_empty && is_invalid) {
    let r = [
      "Remember: ",
      operator,
      " needs a value on its right side, and ",
      line,
      " has nothing there",
    ];
    return r;
  }
  if (left_empty && is_valid) {
    let r2 = [
      "Remember: ",
      operator,
      " can stand in front of one value, so ",
      line,
      " is valid",
    ];
    return r2;
  }
  if (left_empty && is_invalid) {
    let r3 = [
      "Remember: ",
      operator,
      " needs a value on both sides, and ",
      line,
      " has nothing on its left",
    ];
    return r3;
  }
  if (is_valid) {
    let r4 = [
      "Remember: ",
      operator,
      " has a value on both sides, so ",
      line,
      " is valid",
    ];
    return r4;
  }
  return null;
}
