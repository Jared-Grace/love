import { js_field_call_prefix } from "./js_field_call_prefix.mjs";
import { hash_key_doors } from "./hash_key_doors.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
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
export function js_hash_key_nodes_generic(ast, held) {
  "Every place this file names a field of the address of a page, as {called, key} - the call doing the naming, and whatever stands where the name of the field goes.";
  "What stands there is handed back whole rather than read, because the two things that can stand there are opposites and each one has somebody asking about it. A word written out is a word published unwatched. A call is a word held by a function, which is the repaired shape, and the question about those is a different one: whether that function has been frozen.";
  "Two shapes reach an address. The short doors take the field first and store it themselves, so it stands at the front. The long way changes the address as an object, and there the field stands second, after the object it belongs to.";
  "WHICH addresses count is received rather than worked out, and that is the whole reason this is the general one. A reading about publishing counts every address a file touches, links to other pages included; a reading about which words a page must be able to make sense of counts only the page's own. The walking is identical and only the set of names differs, so writing it twice would be two copies of the difficult half kept in step by hand.";
  "A door is counted whatever is received, because a door writes into the address of THIS page - a word put there is a word a saved link spells back at this page later, so it is this page's to answer for as well as being published.";
  arguments_assert(arguments, 2);
  let doors = hash_key_doors();
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
    let prefix = js_field_call_prefix();
    let field = text_starts_with(called, prefix);
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
