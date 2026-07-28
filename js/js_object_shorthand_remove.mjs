import { list_matching_single } from "./list_matching_single.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { js_selects_object_properties } from "./js_selects_object_properties.mjs";
import { js_property_key_named_is_curried_right } from "./js_property_key_named_is_curried_right.mjs";
import { list_remove } from "./list_remove.mjs";
export function js_object_shorthand_remove(ast, selects, identifier_name) {
  arguments_assert(arguments, 3);
  ("Takes one name back out of a set of settings written the short way. The");
  ("undoing of the verb that puts one in, and the last of the four flat registers");
  ("to get one — a unit retired, a verb an example may no longer name.");
  ("Retiring a unit was the one half of its life with no verb for it. Adding it to");
  ("the list that makes it reachable is one command; taking it off again was");
  ("writing the whole set out, which is the shape that drops every entry it did");
  ("not mention.");
  ("It refuses a name the set does not hold, because a register that quietly");
  ("ignores a removal reads afterwards exactly like one that carried it out.");
  let properties = js_selects_object_properties(ast, selects);
  let named_is = js_property_key_named_is_curried_right(identifier_name);
  ("The refusal is handed to the finding rather than written after it. The plain");
  ("find-one helper throws on its own first, through an assert whose words say");
  ("only that a list was not of size one, so a sentence written below it is");
  ("unreachable and reads as though it were doing something.");
  let hint =
    "this set does not hold that name — would you like to check the spelling, or the line it is bound to?";
  let found = list_matching_single(properties, named_is, hint, identifier_name);
  list_remove(properties, found);
}
