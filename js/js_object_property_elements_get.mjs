import { js_object_expression_property_named_or_null } from "./js_object_expression_property_named_or_null.mjs";
import { assert_json } from "./assert_json.mjs";
import { js_array_expression_elements } from "./js_array_expression_elements.mjs";
import { property_get } from "./property_get.mjs";
export function js_object_property_elements_get(record, key_name) {
  ("The list a record keeps under a name. Shared by the verbs that put one thing");
  ("in and take one thing out, so the two cannot come to disagree about where");
  ("they are looking.");
  let property = js_object_expression_property_named_or_null(record, key_name);
  assert_json(property, {
    hint: "this record holds nothing under that name — would you like to check the name it is kept under?",
    key_name,
  });
  let value = property_get(property, "value");
  let elements = js_array_expression_elements(value);
  return elements;
}
