import { equal } from "./equal.mjs";
import { not_equal } from "./not_equal.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { list_first_try } from "./list_first_try.mjs";
export function app_code_lesson_name_id_category_then_painter_or_null(maker) {
  arguments_assert(arguments, 1);
  ("The painter standing inside a lesson title maker: the function it defines and then hands back, which is what actually writes the title onto the page. Null when the maker is not that shape.");
  ("Two spellings reach the same thing here - a plain definition, and a name given a function - because both were written across the lessons and neither is more correct than the other.");
  let body = property_get(maker, "body");
  let statements = property_get(body, "body");
  let first = list_first_try(statements);
  if (equal(first, null)) {
    return null;
  }
  let type = property_get(first, "type");
  if (equal(type, "FunctionDeclaration")) {
    return first;
  }
  if (not_equal(type, "VariableDeclaration")) {
    return null;
  }
  let declarations = property_get(first, "declarations");
  let declaration = list_first_try(declarations);
  if (equal(declaration, null)) {
    return null;
  }
  let init = property_get(declaration, "init");
  if (equal(init, null)) {
    return null;
  }
  let init_type = property_get(init, "type");
  if (not_equal(init_type, "FunctionExpression")) {
    return null;
  }
  return init;
}
