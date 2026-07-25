import { not } from "./not.mjs";
import { js_node_is } from "./js_node_is.mjs";
import { property_get } from "./property_get.mjs";
import { text_ends_with_any } from "./text_ends_with_any.mjs";
export function js_statement_node_is(node) {
  "Whether a node is a statement, decided by the node's own type. Every statement type in the grammar ends in Statement or Declaration, and no expression type ends in either, so the type name answers the question exactly.";
  "This used to ask by unparsing the node and testing whether the text parsed as an expression, which cannot work for functions: the text of a named function declaration is also a valid named function expression, so the test called a real declaration an expression and answered no. That made the hoisting step - the one that lifts a callback written inline out to its own declaration - fail every single time it fired, since the declaration it wanted to insert was always rejected as a non-statement.";
  let node_is = js_node_is(node);
  if (not(node_is)) {
    return false;
  }
  let type = property_get(node, "type");
  let is = text_ends_with_any(type, ["Statement", "Declaration"]);
  return is;
}
