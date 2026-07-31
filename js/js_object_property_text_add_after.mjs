import { js_select_object_property_elements } from "./js_select_object_property_elements.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { js_array_element_text_find } from "./js_array_element_text_find.mjs";
import { js_array_text_insert_beside } from "./js_array_text_insert_beside.mjs";
export function js_object_property_text_add_after(
  ast,
  selects,
  key_name,
  text,
  after_text,
) {
  arguments_assert(arguments, 5);
  ("Puts one written word into a list held under a name inside a record, directly");
  ("after the word already there that is named. Two names deep and at a chosen");
  ("place, which is the shape the curriculum groups are and the one every reading");
  ("order is.");
  ("The flat version of this came first and did not reach the case that asked for");
  ("it: the lists that most need an entry put in a particular place are exactly");
  ("the ones kept inside a record, so appending and then dragging by hand went on");
  ("until this.");
  let elements = js_select_object_property_elements(selects, key_name);
  let found = js_array_element_text_find(elements, after_text);
  let delta = 1;
  js_array_text_insert_beside(elements, found, text, delta);
}
