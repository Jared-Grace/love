import { arguments_assert } from "./arguments_assert.mjs";
import { js_hash_key_nodes } from "./js_hash_key_nodes.mjs";
import { property_get } from "./property_get.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
import { list_size } from "./list_size.mjs";
import { list_add_unique } from "./list_add_unique.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
export function js_hash_key_getters(ast) {
  "Every function this file calls to get the name of a field of the address of a page.";
  "This is the repaired shape, not the broken one - the word is held somewhere rather than written out at the site. What is worth knowing about it is that the holding is only half the repair. A word held by a function can still be reworded there, and rewording it silently loses every saved link that spells the old one; the other half is freezing it, and nothing about the call says whether that was done.";
  "So the answer here is a list of names to ask a further question of, not a list of things wrong.";
  "A call handed nothing is the whole shape looked for. Anything given arguments is working something out rather than handing back a word it holds, and there is no fixed word in it to freeze.";
  arguments_assert(arguments, 1);
  let nodes = js_hash_key_nodes(ast);
  let names = [];
  for (let node of nodes) {
    let key = property_get(node, "key");
    let called = js_node_type_is(key, "CallExpression");
    if (not(called)) {
      continue;
    }
    let callee = property_get(key, "callee");
    let plain = js_node_type_is(callee, "Identifier");
    if (not(plain)) {
      continue;
    }
    let args = property_get(key, "arguments");
    let count = list_size(args);
    let bare = equal(count, 0);
    if (not(bare)) {
      continue;
    }
    let f_name = property_get(callee, "name");
    list_add_unique(names, f_name);
  }
  return names;
}
