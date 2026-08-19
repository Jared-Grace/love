import { arguments_assert } from "./arguments_assert.mjs";
import { each } from "./each.mjs";
import { properties_get } from "./properties_get.mjs";
import { property_delete } from "./property_delete.mjs";
import { property_set } from "./property_set.mjs";
export function js_node_identifier_replace(node, name) {
  arguments_assert(arguments, 2);
  ("Turn a piece of code into a plain mention of a name, in the place it already stands.");
  ("A piece of code is reached through whatever holds it - a run of lines, one side of a call, the value of an entry - and each of those is a different write. Changing the piece itself needs none of them, so one verb reaches every place a value can stand.");
  ("Everything the old piece was made of is taken off first. A walk asks a node for its parts by name, so a call left wearing its callee and its arguments under a new type would be walked into and read as code that is no longer there.");
  let parts = properties_get(node);
  function part_each(part) {
    property_delete(node, part);
  }
  each(parts, part_each);
  property_set(node, "type", "Identifier");
  property_set(node, "name", name);
}
