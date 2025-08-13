import { js_node_type_is_assert } from "./js_node_type_is_assert.mjs";
import { assert } from "./assert.mjs";
import { js_node_is } from "./js_node_is.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
import { object_property_set } from "./object_property_set.mjs";
import { js_visit_type } from "./js_visit_type.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { list_adder_unique } from "./list_adder_unique.mjs";
export function js_identifier_replace(ast, name_from, replacement) {
  let ni = js_node_is(name_from);
  if (ni) {
    js_node_type_is_assert(name_from, "Identifier");
    name_from = object_property_get(name_from, "name");
  }
  function lambda(v) {
    let { node } = v;
    if (object_property_get(node, "name") === name_from) {
      object_property_set(node, "name", replacement);
    }
  }
  js_visit_type(ast, "Identifier", lambda);
}
