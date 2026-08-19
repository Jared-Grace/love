import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
import { not } from "./not.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_first } from "./list_first.mjs";
import { hash_object_made_name } from "./hash_object_made_name.mjs";
import { property_equals } from "./property_equals.mjs";
import { list_add } from "./list_add.mjs";
import { hash_object_transform_names } from "./hash_object_transform_names.mjs";
import { property_in_list } from "./property_in_list.mjs";
export function js_hash_object_names_handled(v, outgoing, handed) {
  ("Two very different things are collected here and they go into two different lists. An object turned into a link is an address built to hand to ANOTHER page, so its name goes to the outgoing list; an object handed to a function to be changed is this page's own, and only the name it is passed under is noted, for the reading of that function to pick up.");
  arguments_assert(arguments, 3);
  let node = property_get(v, "node");
  let callee = property_get(node, "callee");
  let plain = js_node_type_is(callee, "Identifier");
  if (not(plain)) {
    return;
  }
  let args = property_get(node, "arguments");
  if (list_empty_is(args)) {
    return;
  }
  let first = list_first(args);
  let named = js_node_type_is(first, "Identifier");
  if (not(named)) {
    return;
  }
  let word = property_get(first, "name");
  ("A third way, and the one that does not look like an address at all while it is being built. A link opened in a new tab is put together from an empty object, filled field by field, and only turned into an address at the end. Nothing before that last line says what the object is for, so the turning is what says it, and every field written into it was written into somebody's link.");
  let property_value = hash_object_made_name();
  let made = property_equals(callee, "name", property_value);
  if (made) {
    list_add(outgoing, word);
    return;
  }
  let transforms = hash_object_transform_names();
  let changes = property_in_list(callee, "name", transforms);
  if (not(changes)) {
    return;
  }
  list_add(handed, word);
}
