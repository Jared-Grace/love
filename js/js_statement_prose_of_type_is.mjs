import { arguments_assert } from "./arguments_assert.mjs";
import { js_statement_expression_of_type_or_null } from "./js_statement_expression_of_type_or_null.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { property_get } from "./property_get.mjs";
import { list_all_is } from "./list_all_is.mjs";
import { js_prose_part_is } from "./js_prose_part_is.mjs";
import { not } from "./not.mjs";
export function js_statement_prose_of_type_is(node, type) {
  "$plain type";
  arguments_assert(arguments, 2);
  ("Whether this line is a paragraph of the kind asked for, meaning every piece written inside it is something a reader is meant to read rather than something the line does.");
  ("The two shapes this repo writes a paragraph in - pieces joined by commas, and a sentence with gaps in it - hold what they hold under the same name, so the question of whether all of it is prose is one question asked of both. Only the kind differs, and a kind is a word rather than a shape, so it is handed in.");
  ("A gap or a piece that does something makes the line work, whatever the line looks like from outside. That is the whole judgment, and it lives here once so the two shapes cannot come to disagree about it.");
  let expression = js_statement_expression_of_type_or_null(node, type);
  let type_is = null_not_is(expression);
  if (not(type_is)) {
    return false;
  }
  let parts = property_get(expression, "expressions");
  let all_prose_is = list_all_is(parts, js_prose_part_is);
  return all_prose_is;
}
