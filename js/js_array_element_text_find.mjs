import { arguments_assert } from "./arguments_assert.mjs";
import { equal } from "./equal.mjs";
import { property_get } from "./property_get.mjs";
import { list_find } from "./list_find.mjs";
import { assert_json } from "./assert_json.mjs";
export function js_array_element_text_find(elements, text) {
  arguments_assert(arguments, 2);
  ("The one entry of an ordered register holding a given word. Every verb that");
  ("does something to an entry rather than to the end of the list has to find it");
  ("first - taking it out, putting another beside it - so the finding is one thing");
  ("and each verb is only what it does afterwards.");
  ("It refuses a word the list does not hold rather than handing back nothing, so");
  ("a verb built on it cannot quietly do nothing to a register that looks the same");
  ("either way.");
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
  return found;
}
