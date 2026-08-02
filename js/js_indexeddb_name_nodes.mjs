import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
import { property_exists } from "./property_exists.mjs";
import { list_get_or_null } from "./list_get_or_null.mjs";
import { list_add } from "./list_add.mjs";
import { js_visit_type } from "./js_visit_type.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
export function js_indexeddb_name_nodes(ast, doors) {
  "Every place this file names a browser database or one of its stores, as {called, key} - the call doing the naming, and whatever stands where the name goes.";
  "What stands there is handed back whole rather than read, because the two things that can stand there are opposites. A word written out is a word published unwatched. A call is a word held by a function, which is the repaired shape, and the question about those is the other one: whether that function has been frozen.";
  "Which functions these are, and which of their arguments, is received rather than worked out here - it is read off the functions themselves once, and this reading is then asked of one file at a time.";
  "A name kept here differs from a word in a page address in one way that matters: nothing follows it with an equals sign, and its value is an everyday word like files or bible. So the reading that watches frozen words fused into a longer address cannot see these at all, and searching the repo for the values themselves would answer with every sentence that happens to use the word. What is left is the shape - which argument of which call - and that is what this asks.";
  arguments_assert(arguments, 2);
  let sites = [];
  function lambda(visited) {
    let node = property_get(visited, "node");
    let callee = property_get(node, "callee");
    let plain = js_node_type_is(callee, "Identifier");
    if (not(plain)) {
      return;
    }
    let called = property_get(callee, "name");
    let known = property_exists(doors, called);
    if (not(known)) {
      return;
    }
    let positions = property_get(doors, called);
    let args = property_get(node, "arguments");
    for (let position of positions) {
      let key = list_get_or_null(args, position);
      let missing = equal(key, null);
      if (missing) {
        continue;
      }
      let site = {
        called,
        key,
      };
      list_add(sites, site);
    }
  }
  js_visit_type(ast, "CallExpression", lambda);
  return sites;
}
