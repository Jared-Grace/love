import { js_literal_text_is } from "./js_literal_text_is.mjs";
import { not } from "./not.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
import { property_get } from "./property_get.mjs";
export function js_statement_string_is(statement) {
  "Whether a statement is nothing but a string sitting on its own - which is how this repo writes a comment, because the normalize pass deletes the real kind.";
  "Anything reading a function body to decide what it does has to skip these first. They are real nodes, so a body of one call and three explanations counts as four statements until they are dropped, and a rule written as `the body is a single call` then silently matches nothing.";
  let expression_is = js_node_type_is(statement, "ExpressionStatement");
  if (not(expression_is)) {
    return false;
  }
  let expression = property_get(statement, "expression");
  let string_is = js_literal_text_is(expression);
  return string_is;
}
