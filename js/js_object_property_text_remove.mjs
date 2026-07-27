import { arguments_assert } from "./arguments_assert.mjs";
import { list_single } from "./list_single.mjs";
import { js_node_value_get } from "./js_node_value_get.mjs";
import { js_object_property_elements_get } from "./js_object_property_elements_get.mjs";
import { equal } from "./equal.mjs";
import { property_get } from "./property_get.mjs";
import { list_find } from "./list_find.mjs";
import { assert_json } from "./assert_json.mjs";
import { list_remove } from "./list_remove.mjs";
export function js_object_property_text_remove(ast, selects, key_name, text) {
  arguments_assert(arguments, 4);
  ("Takes one written word back out of a list held under a name inside a record.");
  ("The pair to the verb that puts one in, and the reason to have it is that a");
  ("register is not only added to — an example withdrawn, a gate retired, a name");
  ("tried and thought better of.");
  ("Without this, undoing was writing the whole list out again, which is the one");
  ("shape that can silently drop everything it did not mention.");
  let node = list_single(selects);
  let record = js_node_value_get(node);
  let elements = js_object_property_elements_get(record, key_name);
  function same_is(element) {
    let held = property_get(element, "value");
    let same = equal(held, text);
    return same;
  }
  let found = list_find(elements, same_is);
  assert_json(found, {
    hint: "this list does not hold that word — would you like to check the spelling, or the record it sits in?",
    key_name,
    text,
  });
  list_remove(elements, found);
}
