import { query_key_doors } from "./query_key_doors.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_size_less_than_value } from "./list_size_less_than_value.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { js_visit_type } from "./js_visit_type.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
import { property_get } from "./property_get.mjs";
import { list_first } from "./list_first.mjs";
import { list_add } from "./list_add.mjs";
import { not } from "./not.mjs";
export function js_query_key_nodes(ast) {
  "Every place this file names a field of the query part of a page address, as {called, key} - the call doing the naming, and whatever stands where the name of the field goes.";
  "What stands there is handed back whole rather than read, because the two things that can stand there are opposites. A word written out is a word published unwatched. A call is a word held by a function, which is the repaired shape, and the question about those is the other one: whether that function has been frozen.";
  "There is one door today and the field stands first in it, so this walk is a great deal simpler than the one for the part after the hash - which has two doors and a second shape where the field stands after the object it belongs to. Written as its own reading all the same, because the two ask about different halves of an address and joining them would make every later change to one a change to both.";
  "The one door is asked for by name from the list that holds it rather than spelled here, and asked as a list rather than as the only one. A second door added there would otherwise be published with this walk still looking only at the first, which is the failure that reads as a clean answer.";
  arguments_assert(arguments, 1);
  let doors = query_key_doors();
  let sites = [];
  function lambda(visited) {
    let node = property_get(visited, "node");
    let callee = property_get(node, "callee");
    let plain = js_node_type_is(callee, "Identifier");
    if (not(plain)) {
      return;
    }
    let called = property_get(callee, "name");
    let known = list_includes(doors, called);
    if (not(known)) {
      return;
    }
    let args = property_get(node, "arguments");
    let empty = list_size_less_than_value(args, 1);
    if (empty) {
      return;
    }
    let key = list_first(args);
    let site = {
      called,
      key,
    };
    list_add(sites, site);
  }
  js_visit_type(ast, "CallExpression", lambda);
  return sites;
}
