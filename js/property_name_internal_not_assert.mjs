import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { property_name_internal_names } from "./property_name_internal_names.mjs";
import { list_includes } from "./list_includes.mjs";
import { assert_json } from "./assert_json.mjs";
export function property_name_internal_not_assert(property_name) {
  "Refuses a property name that reaches past an object into the language's own machinery, before anything reads or writes it.";
  "A read through one of these names never gives a caller what it asked for: a tally asked for the word constructor gets back the function every object is built by. So refusing one turns a silently wrong answer into a loud one, and it is also what lets a function that takes its property name from a caller be called by code nobody reviewed, because the climb up to Function needs one of these names somewhere along the way.";
  arguments_assert(arguments, 1);
  let names = property_name_internal_names();
  let internal = list_includes(names, property_name);
  let b = not(internal);
  assert_json(b, {
    property_name,
    hint: "this name reaches the language's own machinery rather than anything stored on the object; keep keys that are words from text in a Map",
  });
}
