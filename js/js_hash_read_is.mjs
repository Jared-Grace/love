import { hash_read_names } from "./hash_read_names.mjs";
import { js_visit_type } from "./js_visit_type.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
import { property_get } from "./property_get.mjs";
import { property_in_list } from "./property_in_list.mjs";
import { not } from "./not.mjs";
export function js_hash_read_is(ast) {
  "Whether this file reads the address of the page at all, either shape.";
  "Asked before any reading that would otherwise judge an ordinary comparison as a question about somebody's link. A file that never touches the address cannot be naming a field of one, however its comparisons happen to be written.";
  let names = hash_read_names();
  let reads = false;
  function lambda(v) {
    let node = property_get(v, "node");
    let callee = property_get(node, "callee");
    let plain = js_node_type_is(callee, "Identifier");
    if (not(plain)) {
      return;
    }
    let named = property_in_list(callee, "name", names);
    if (named) {
      reads = true;
    }
  }
  js_visit_type(ast, "CallExpression", lambda);
  return reads;
}
