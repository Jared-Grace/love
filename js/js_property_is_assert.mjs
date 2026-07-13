import { js_node_type_is_assert_json } from "./js_node_type_is_assert_json.mjs";
export function js_property_is_assert(found) {
  js_node_type_is_assert_json(found, "Property", {
    hint: "expected an object property node here",
  });
}
