import { not_equal } from "./not_equal.mjs";
import { equal } from "./equal.mjs";
import { less_than } from "./less_than.mjs";
import { not } from "./not.mjs";
import { js_key_constant_or_null } from "./js_key_constant_or_null.mjs";
import { property_name_internal_names } from "./property_name_internal_names.mjs";
import { property_get } from "./property_get.mjs";
import { js_key_number_is } from "./js_key_number_is.mjs";
export function js_key_safe_is(key, facts) {
  "whether the code alone proves this key can never name the language's own machinery - constructor, __proto__ and the rest - on the record it reaches. Three ways: the key is always one word and that word is not one of them; or it is a name already put through a check that refuses them; or it is always a number.";
  "A key none of those settles is not shown to be wrong, only not shown to be safe. That is what the gate counts, because a key that arrives from outside - from a lesson, a file, a person typing - is exactly the one the code cannot settle.";
  let constant = js_key_constant_or_null(key, facts, 0);
  if (not_equal(constant, null)) {
    let internal = property_name_internal_names().includes(constant);
    let n = not(internal);
    return n;
  }
  let guarded = property_get(facts, "guarded");
  if (
    equal(key.type, "Identifier") &&
    guarded.has(key.name) &&
    less_than(guarded.get(key.name), key.start)
  ) {
    return true;
  }
  let number = js_key_number_is(key, facts, 0);
  return number;
}
