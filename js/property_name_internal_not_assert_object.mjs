import { fn_name } from "./fn_name.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { equal } from "./equal.mjs";
import { property_name_internal_names } from "./property_name_internal_names.mjs";
import { list_includes } from "./list_includes.mjs";
import { not } from "./not.mjs";
import { assert_json } from "./assert_json.mjs";
export function property_name_internal_not_assert_object(
  object,
  property_name,
) {
  "Refuses a property name that reaches past this object into the language's own machinery - unless the object has no parent for the name to reach.";
  ("A record made by ",
    fn_name("object_words_new"),
    " has no parent, so constructor or __proto__ on it is a plain key that leads nowhere, and a table keyed by every word in the repo has to be able to hold them. On any other record those names never give a caller what it asked for, so they are refused.");
  ("The name is asked about first and the object only after, because nearly every name is an ordinary one and that answer alone settles it.");
  let names = property_name_internal_names();
  let internal = list_includes(names, property_name);
  if (not(internal)) {
    return;
  }
  let parent = Object.getPrototypeOf(object);
  let b = equal(parent, null);
  assert_json(b, {
    property_name,
    hint: text_combine_multiple([
      "this name reaches the language's own machinery rather than anything stored on the object; key a table of words from text on a record from ",
      fn_name("object_words_new"),
    ]),
  });
}
