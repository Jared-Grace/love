import { arguments_assert } from "./arguments_assert.mjs";
import { js_hash_object_names } from "./js_hash_object_names.mjs";
import { fn_name } from "./fn_name.mjs";
import { list_add } from "./list_add.mjs";
import { property_get } from "./property_get.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
import { list_size } from "./list_size.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_first } from "./list_first.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
import { property_in_list } from "./property_in_list.mjs";
import { list_second } from "./list_second.mjs";
import { js_visit_type } from "./js_visit_type.mjs";
import { less_than } from "./less_than.mjs";
import { not } from "./not.mjs";
export function js_hash_key_nodes(ast) {
  "Every place this file names a field of the address of a page, as {called, key} - the call doing the naming, and whatever stands where the name of the field goes.";
  "What stands there is handed back whole rather than read, because the two things that can stand there are opposites and each one has somebody asking about it. A word written out is a word published unwatched. A call is a word held by a function, which is the repaired shape, and the question about those is a different one: whether that function has been frozen.";
  "Both questions need the same walk, and the walk is the whole difficulty - which names in this file hold an address, which calls reach one, and which argument of each is the field rather than the value. Asking them separately would write that twice and let the two copies drift apart, and a drift here is silent by nature: every reading of an address that stops being reached simply finds nothing.";
  "Two shapes reach an address. The short doors take the field first and store it themselves, so it stands at the front. The long way changes the address as an object, and there the field stands second, after the object it belongs to.";
  arguments_assert(arguments, 1);
  let held = js_hash_object_names(ast);
  let f_name = fn_name("html_hash_property_set");
  let f_name2 = fn_name("html_hash_object_property_set");
  let doors = [f_name, f_name2];
  let sites = [];
  function key_note(called, key) {
    let site = {
      called,
      key,
    };
    list_add(sites, site);
  }
  function lambda(v) {
    let node = property_get(v, "node");
    let callee = property_get(node, "callee");
    let plain = js_node_type_is(callee, "Identifier");
    if (not(plain)) {
      return;
    }
    let called = property_get(callee, "name");
    let args = property_get(node, "arguments");
    let count = list_size(args);
    let door = list_includes(doors, called);
    if (door) {
      if (less_than(count, 1)) {
        return;
      }
      let key = list_first(args);
      key_note(called, key);
      return;
    }
    let field = text_starts_with(called, "property_");
    if (not(field)) {
      return;
    }
    if (less_than(count, 2)) {
      return;
    }
    let owner = list_first(args);
    let named = js_node_type_is(owner, "Identifier");
    if (not(named)) {
      return;
    }
    let addressed = property_in_list(owner, "name", held);
    if (not(addressed)) {
      return;
    }
    let key2 = list_second(args);
    key_note(called, key2);
  }
  js_visit_type(ast, "CallExpression", lambda);
  return sites;
}
