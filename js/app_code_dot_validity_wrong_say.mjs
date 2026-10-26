import { arguments_assert } from "./arguments_assert.mjs";
import { text_to } from "./text_to.mjs";
import { js_operator_dot } from "./js_operator_dot.mjs";
import { text_split } from "./text_split.mjs";
import { list_size } from "./list_size.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { text_trim } from "./text_trim.mjs";
import { list_get } from "./list_get.mjs";
import { boolean_to_text_validity } from "./boolean_to_text_validity.mjs";
import { text_digits_is } from "./text_digits_is.mjs";
export function app_code_dot_validity_wrong_say(question, answer, choice) {
  arguments_assert(arguments, 3);
  ("said when a learner calls a line with one dot between two sides valid or invalid wrongly: the dot needs an identifier on each side, so a number or nothing on either side makes it invalid, as parts that take turns between words and code. null for a line without exactly one dot, and for a line whose answer the reason given here would not explain");
  ("Each reason is said only beside the answer it explains, so a line the lessons have not taught, such as a number on both sides, stays silent rather than being told something untrue. Not picked: saying the dot is a decimal point in 1.b, which is how the parser reads it but is not what the lesson teaches about it");
  let line = text_to(question);
  let right_answer = text_to(answer);
  let operator = js_operator_dot();
  let sides = text_split(line, operator);
  let size = list_size(sides);
  let two = equal(size, 2);
  if (not(two)) {
    return null;
  }
  let message = list_get(sides, 0);
  let left = text_trim(message);
  let message2 = list_get(sides, 1);
  let right = text_trim(message2);
  let right2 = boolean_to_text_validity(true);
  let is_valid = equal(right_answer, right2);
  let right3 = boolean_to_text_validity(false);
  let is_invalid = equal(right_answer, right3);
  let left_empty = equal(left, "");
  let right_empty = equal(right, "");
  let left_number = text_digits_is(left);
  let right_number = text_digits_is(right);
  let left_name = not(left_empty) && not(left_number);
  let right_name = not(right_empty) && not(right_number);
  if (is_valid && left_name && right_name) {
    let r = [
      "Remember: ",
      operator,
      " can stand between two identifiers, so ",
      line,
      " is valid",
    ];
    return r;
  }
  if (not(is_invalid)) {
    return null;
  }
  if (left_name && right_empty) {
    let r2 = [
      "Remember: ",
      operator,
      " needs an identifier on its right side, and ",
      line,
      " has nothing there",
    ];
    return r2;
  }
  if (left_empty && right_name) {
    let r3 = [
      "Remember: ",
      operator,
      " needs an identifier on its left side, and ",
      line,
      " has nothing there",
    ];
    return r3;
  }
  if (left_name && right_number) {
    let r4 = [
      "Remember: ",
      operator,
      " cannot have a number on its right, so ",
      line,
      " is invalid",
    ];
    return r4;
  }
  if (left_number && right_name) {
    let r5 = [
      "Remember: ",
      operator,
      " cannot have a number directly on its left, so ",
      line,
      " is invalid",
    ];
    return r5;
  }
  return null;
}
