import { arguments_assert } from "./arguments_assert.mjs";
import { js_selects_array_elements } from "./js_selects_array_elements.mjs";
import { equal } from "./equal.mjs";
import { property_get } from "./property_get.mjs";
import { list_find } from "./list_find.mjs";
import { assert_json } from "./assert_json.mjs";
import { list_remove } from "./list_remove.mjs";
export function js_array_text_remove(ast, selects, text) {
  arguments_assert(arguments, 3);
  ("Takes one written word back out of an ordered register. The undoing of the");
  ("verb that puts one in, and the reason to have it is that a register is not");
  ("only added to — an example withdrawn, an entry put in the wrong list and");
  ("moved to the right one.");
  ("Moving an entry is the ordinary case rather than the rare one: adding can only");
  ("append, so anything that has to sit in a particular place arrives at the end");
  ("and then has to leave. Until this, leaving was a hand edit.");
  ("It refuses a word the list does not hold rather than doing nothing quietly,");
  ("since the two look identical afterwards and only one of them was meant.");
  let elements = js_selects_array_elements(ast, selects);
  function same_is(element) {
    let held = property_get(element, "value");
    let same = equal(held, text);
    return same;
  }
  let found = list_find(elements, same_is);
  assert_json(found, {
    hint: "this list does not hold that word — would you like to check the spelling, or the line it is bound to?",
    text,
  });
  list_remove(elements, found);
}
