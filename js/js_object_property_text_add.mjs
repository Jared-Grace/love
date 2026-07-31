import { js_object_property_elements_get } from "./js_object_property_elements_get.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_single } from "./list_single.mjs";
import { js_node_value_get } from "./js_node_value_get.mjs";
import { js_string } from "./js_string.mjs";
import { list_add } from "./list_add.mjs";
export function js_object_property_text_add(ast, selects, key_name, text) {
  arguments_assert(arguments, 4);
  ("Adds one written word to a list held under a name inside a record. Two names");
  ("deep, which every other verb here could not reach: they all answer at the top");
  ("of a function, so a list inside a record inside a list had no address at all.");
  ("That was the last thing standing between writing a unit and putting it where");
  ("it counts, since the registers that decide what runs are shaped exactly so.");
  let elements = js_select_object_property_elements(selects, key_name);
  let literal = js_string(text);
  list_add(elements, literal);
}
