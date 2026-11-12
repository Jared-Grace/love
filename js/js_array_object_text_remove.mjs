import { arguments_assert } from "./arguments_assert.mjs";
import { js_selects_array_elements } from "./js_selects_array_elements.mjs";
import { property_get } from "./property_get.mjs";
import { property_get_or_null_equal } from "./property_get_or_null_equal.mjs";
import { list_any } from "./list_any.mjs";
import { list_matching_single } from "./list_matching_single.mjs";
import { list_remove } from "./list_remove.mjs";
export function js_array_object_text_remove(ast, selects, text) {
  arguments_assert(arguments, 3);
  ("Takes one record back out of a list of records, found by a word written directly in it - the record-side twin of taking a word or a name out of a register.");
  ("It refuses a word no record in the list holds once, rather than doing nothing quietly, since the two look identical afterwards and only one of them was meant.");
  let elements = js_selects_array_elements(ast, selects);
  function says_is(element) {
    let properties = property_get(element, "properties");
    function value_same_is(p) {
      let value = property_get(p, "value");
      let same = property_get_or_null_equal(value, "value", text);
      return same;
    }
    let says = list_any(properties, value_same_is);
    return says;
  }
  let hint =
    "no record in this list holds that word once — would you like to check the spelling, or the line it is bound to?";
  let found = list_matching_single(elements, says_is, hint, text);
  list_remove(elements, found);
}
