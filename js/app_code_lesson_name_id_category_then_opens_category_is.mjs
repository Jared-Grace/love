import { fn_name } from "./fn_name.mjs";
import { not_equal } from "./not_equal.mjs";
import { equal } from "./equal.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
export function app_code_lesson_name_id_category_then_opens_category_is(
  statement,
) {
  arguments_assert(arguments, 1);
  ("Whether a line is the one every lesson title opens with - the call that writes the category word.");
  ("That line is the whole of what the shared unit takes over, so a title not opening with it is a title this collapse has no claim on, and saying so is what keeps the pass from eating a line it did not mean.");
  let type = property_get(statement, "type");
  if (not_equal(type, "ExpressionStatement")) {
    return false;
  }
  let expression = property_get(statement, "expression");
  let expression_type = property_get(expression, "type");
  if (not_equal(expression_type, "CallExpression")) {
    return false;
  }
  let callee = property_get(expression, "callee");
  let callee_type = property_get(callee, "type");
  if (not_equal(callee_type, "Identifier")) {
    return false;
  }
  let callee_name = property_get(callee, "name");
  let opens = equal(callee_name, fn_name("app_code_lesson_name_id_category"));
  return opens;
}
