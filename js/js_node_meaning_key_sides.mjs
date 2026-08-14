import { js_operator_arithmetic_symbols } from "./js_operator_arithmetic_symbols.mjs";
import { js_node_meaning_key_from_parts } from "./js_node_meaning_key_from_parts.mjs";
import { js_code_binary_expression_commutative } from "./js_code_binary_expression_commutative.mjs";
import { js_node_meaning_key } from "./js_node_meaning_key.mjs";
import { list_includes } from "./list_includes.mjs";
import { not } from "./not.mjs";
import { property_get } from "./property_get.mjs";
export function js_node_meaning_key_sides(node) {
  "What a sign standing between two things says, once each side has been asked what it says. A sign that reads the same both ways has its two sides put in a settled order, so that 3 === n and n === 3 come out as one; every other sign keeps the sides where they were written.";
  "Adding, taking away, multiplying and dividing are held out of the settled order here on purpose. Between numbers they were answered a step earlier, where a whole run of them moves at once; and what is left over after that is a plus joining writing, which does not read the same both ways.";
  let operator = property_get(node, "operator");
  let left = property_get(node, "left");
  let right = property_get(node, "right");
  let plain = js_node_meaning_key(left);
  let plain2 = js_node_meaning_key(right);
  let sides = [plain, plain2];
  let commutative = js_code_binary_expression_commutative();
  let swappable = list_includes(commutative, operator);
  let signs = js_operator_arithmetic_symbols();
  let arithmetic = list_includes(signs, operator);
  let sortable = swappable && not(arithmetic);
  let key = js_node_meaning_key_from_parts(operator, sides, sortable);
  return key;
}
