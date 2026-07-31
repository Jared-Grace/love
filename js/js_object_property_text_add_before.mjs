import { arguments_assert } from "./arguments_assert.mjs";
import { list_single } from "./list_single.mjs";
import { js_node_value_get } from "./js_node_value_get.mjs";
import { js_object_property_elements_get } from "./js_object_property_elements_get.mjs";
import { js_array_element_text_find } from "./js_array_element_text_find.mjs";
import { js_array_text_insert_beside } from "./js_array_text_insert_beside.mjs";
export function js_object_property_text_add_before(
  ast,
  selects,
  key_name,
  text,
  before_text,
) {
  arguments_assert(arguments, 5);
  ("Puts one written word into a list held under a name inside a record, directly");
  ("before the word already there that is named. The sibling of the one that puts");
  ("it after, for the place that has no neighbour above it to name.");
  ("A curriculum is the case: the simplest thing to show belongs at the head of");
  ("its group, and the head is the one place naming what comes before cannot");
  ("reach.");
  let elements = js_select_object_property_elements(selects, key_name);
  let found = js_array_element_text_find(elements, before_text);
  let delta = 0;
  js_array_text_insert_beside(elements, found, text, delta);
}
