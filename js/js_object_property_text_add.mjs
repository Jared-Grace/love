import { arguments_assert } from "./arguments_assert.mjs";
import { list_single } from "./list_single.mjs";
import { js_node_value_get } from "./js_node_value_get.mjs";
import { js_object_expression_property_named_or_null } from "./js_object_expression_property_named_or_null.mjs";
import { assert_json } from "./assert_json.mjs";
import { js_array_expression_elements } from "./js_array_expression_elements.mjs";
import { js_string } from "./js_string.mjs";
import { list_add } from "./list_add.mjs";
import { property_get } from "./property_get.mjs";
export function js_object_property_text_add(ast, selects, key_name, text) {
  arguments_assert(arguments, 4);
  ("Adds one written word to a list held under a name inside a record. Two names");
  ("deep, which every other verb here could not reach: they all answer at the top");
  ("of a function, so a list inside a record inside a list had no address at all.");
  ("That was the last thing standing between writing a unit and putting it where");
  ("it counts, since the registers that decide what runs are shaped exactly so.");
  let node = list_single(selects);
  let record = js_node_value_get(node);
  let property = js_object_expression_property_named_or_null(record, key_name);
  assert_json(property, {
    hint: "this record holds nothing under that name — would you like to check the name it is kept under?",
    key_name,
    text,
  });
  let value = property_get(property, "value");
  let elements = js_array_expression_elements(value);
  let literal = js_string(text);
  list_add(elements, literal);
}
