import { property_equals } from "./property_equals.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { not } from "./not.mjs";
import { list_add } from "./list_add.mjs";
import { list_sort_text } from "./list_sort_text.mjs";
export function js_object_expression_key_names(object_node) {
  arguments_assert(arguments, 1);
  ("$plain object_node");
  ("The names an object literal writes as its keys, put in one order whatever order they were written in - or nothing at all, when a key cannot be read off the page.");
  ("THE ORDER IS THROWN AWAY ON PURPOSE. A caller comparing two literals wants to know whether they offer the same words, and the order the author happened to type them in is not part of that; two literals that differ only in order are the same object to every reader of it.");
  ("Nothing is answered rather than a short list when a key is computed, spread in from elsewhere, or spelled as a string. A key written as a bracketed expression is not known until the code runs, and a spread carries in whatever another object happened to hold, so in both cases the honest answer is that this literal's keys are not readable here. Answering the readable ones alone would be worse than refusing, because a caller comparing two lists would then be told they differ when all that is known is that one of them was not read.");
  let properties = property_get(object_node, "properties");
  let names = [];
  for (let entry of properties) {
    let plain = property_equals(entry, "type", "Property");
    if (not(plain)) {
      return null;
    }
    let computed = property_get(entry, "computed");
    if (computed) {
      return null;
    }
    let key = property_get(entry, "key");
    let named = property_equals(key, "type", "Identifier");
    if (not(named)) {
      return null;
    }
    let name = property_get(key, "name");
    list_add(names, name);
  }
  let r = list_sort_text(names);
  return r;
}
