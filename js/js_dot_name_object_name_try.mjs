import { property_nested_or_null } from "./property_nested_or_null.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
import { property_get } from "./property_get.mjs";
import { js_identifier_name_try } from "./js_identifier_name_try.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
export function js_dot_name_object_name_try(node) {
  "The name of the thing whose own name is being read - what X is in X.name - or null where the node is anything else. Read-only, pure.";
  "This is how a function's name is spelled when it is wanted as a word rather than as a call, and it is a reference: rename the function and this follows. The other spelling asks for the word by hand and is a reference too, so a reading that watches where names travel has to know both.";
  "Everything that would make the answer a guess is refused rather than allowed through. A computed dot is looked up at run time and says nothing here; an object that is not a plain word is an expression whose name nobody can read off the page; a property that is not the name says the dot is about something else entirely.";
  arguments_assert(arguments, 1);
  let missing = equal(node, null);
  if (missing) {
    return null;
  }
  let member = js_node_type_is(node, "MemberExpression");
  if (not(member)) {
    return null;
  }
  let computed = property_get(node, "computed");
  if (computed) {
    return null;
  }
  let object = property_get(node, "object");
  let object_name = js_identifier_name_try(object);
  let anonymous = equal(object_name, null);
  if (anonymous) {
    return null;
  }
  let property_name = property_nested_or_null(node, "property", "name");
  let names_the_name = equal(property_name, "name");
  if (not(names_the_name)) {
    return null;
  }
  return object_name;
}
