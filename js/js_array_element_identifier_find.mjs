import { property_get_or_null_equal } from "./property_get_or_null_equal.mjs";
import { list_matching_single } from "./list_matching_single.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export function js_array_element_identifier_find(elements, identifier_name) {
  arguments_assert(arguments, 2);
  ("The one entry of an ordered register standing for a given function. The twin");
  ("next door finds an entry by the word written in it, which is the wrong");
  ("question to ask of a list whose entries are names rather than words - there is");
  ("no word in them to match.");
  ("It refuses a name the list does not hold rather than handing back nothing, so");
  ("a verb built on it cannot quietly do nothing to a register that looks the same");
  ("either way.");
  ("An entry is asked for the name it stands for without insisting it is one at");
  ("all, for the same reason its twin does: a register may hold both kinds at");
  ("once, and insisting would refuse the whole register rather than the entries");
  ("that really lack the name.");
  function same_is(element) {
    let same = property_get_or_null_equal(element, "name", identifier_name);
    return same;
  }
  ("The counting and the refusing are shared with the twin. They were not, and");
  ("this side asked the find-one helper instead - which refuses first, through the");
  ("general assert whose words say only that a list was not of size one, so the");
  ("sentence written here was never once read by anybody it was written for.");
  let hint =
    "this list does not name that function — would you like to check the spelling, or whether it was meant to go at the end instead?";
  let found = list_matching_single(elements, same_is, hint, identifier_name);
  return found;
}
