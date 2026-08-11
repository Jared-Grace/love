import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
export function app_code_lesson_name_id_category_then_opens_category_is(
  statement,
) {
  arguments_assert(arguments, 1);
  ("Whether a line is the one every lesson title opens with - the call that writes the category word.");
  ("That line is the whole of what the shared unit takes over, so a title not opening with it is a title this collapse has no claim on, and saying so is what keeps the pass from eating a line it did not mean.");
  let type = property_get(statement, "type");
  if (type !== "ExpressionStatement") {
    return false;
  }
  let expression = property_get(statement, "expression");
  let expression_type = property_get(expression, "type");
  if (expression_type !== "CallExpression") {
    return false;
  }
  let callee = property_get(expression, "callee");
  let callee_type = property_get(callee, "type");
  if (callee_type !== "Identifier") {
    return false;
  }
  let callee_name = property_get(callee, "name");
  let opens = callee_name === "app_code_lesson_name_id_category";
  return opens;
}
