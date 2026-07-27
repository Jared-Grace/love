import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { list_find } from "./list_find.mjs";
import { assert_json } from "./assert_json.mjs";
import { equal } from "./equal.mjs";
export function js_array_element_identifier_find(elements, identifier_name) {
  arguments_assert(arguments, 2);
  ("The one entry of an ordered register standing for a given function. The twin");
  ("next door finds an entry by the word written in it, which is the wrong");
  ("question to ask of a list whose entries are names rather than words - there is");
  ("no word in them to match.");
  ("It refuses a name the list does not hold rather than handing back nothing, so");
  ("a verb built on it cannot quietly do nothing to a register that looks the same");
  ("either way.");
  function same_is(element) {
    let held = property_get(element, "name");
    let same = equal(held, identifier_name);
    return same;
  }
  let found = list_find(elements, same_is);
  assert_json(found, {
    hint: "this list does not name that function — would you like to check the spelling, or whether it was meant to go at the end instead?",
    identifier_name,
  });
  return found;
}
