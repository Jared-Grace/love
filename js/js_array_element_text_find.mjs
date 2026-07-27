import { list_filter } from "./list_filter.mjs";
import { list_size } from "./list_size.mjs";
import { list_first } from "./list_first.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { equal } from "./equal.mjs";
import { property_get } from "./property_get.mjs";
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
  ("It counts the matches itself rather than asking the find-one helper, because");
  ("that helper refuses through the general single-item assert, whose message says");
  ("only that a list was not of size one - so the kind sentence below never");
  ("reached anybody until this. Every verb in the register family refuses through");
  ("here, so the wording is worth owning.");
  let matches = list_filter(elements, same_is);
  let size = list_size(matches);
  let one = equal(size, 1);
  assert_json(one, {
    hint: "this list does not hold that word once — would you like to check the spelling, or the line it is bound to?",
    text,
    matches: size,
  });
  let found = list_first(matches);
  return found;
}
