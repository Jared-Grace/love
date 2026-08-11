import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { equal } from "./equal.mjs";
import { ternary } from "./ternary.mjs";
import { app_code_string_code } from "./app_code_string_code.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function app_code_lesson_expression_string_trichotomy_question_code(
  combo,
  earlier,
  later,
) {
  arguments_assert(arguments, 3);
  ("one comparison as a code string: the shared pair arranged by the relation - equal uses the earlier word on both sides, before puts the earlier word on the left, after puts the later word on the left - which fixes whether the comparison is true or false without computing it here");
  let operator = property_get(combo, "operator");
  let relation = property_get(combo, "relation");
  let after = equal(relation, "after");
  let before = equal(relation, "before");
  let left = ternary(after, later, earlier);
  let right = ternary(before, later, earlier);
  let code_left = app_code_string_code(left);
  let code_right = app_code_string_code(right);
  let joined = text_combine_multiple([
    code_left,
    " ",
    operator,
    " ",
    code_right,
  ]);
  return joined;
}
