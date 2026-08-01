import { property_equals } from "./property_equals.mjs";
import { js_select_object_property_elements } from "./js_select_object_property_elements.mjs";
import { list_matching_single } from "./list_matching_single.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_remove } from "./list_remove.mjs";
export function js_object_property_text_remove(ast, selects, key_name, text) {
  arguments_assert(arguments, 4);
  ("Takes one written word back out of a list held under a name inside a record.");
  ("The pair to the verb that puts one in, and the reason to have it is that a");
  ("register is not only added to — an example withdrawn, a gate retired, a name");
  ("tried and thought better of.");
  ("Without this, undoing was writing the whole list out again, which is the one");
  ("shape that can silently drop everything it did not mention.");
  let elements = js_select_object_property_elements(selects, key_name);
  function same_is(element) {
    let same = property_equals(element, "value", text);
    return same;
  }
  ("The refusal is handed to the finding rather than written after it, because the");
  ("plain find-one helper throws first and a sentence written below it is never");
  ("read by anybody it was written for.");
  let hint =
    "this list does not hold that word — would you like to check the spelling, or the record it sits in?";
  let found = list_matching_single(elements, same_is, hint, text);
  list_remove(elements, found);
}
