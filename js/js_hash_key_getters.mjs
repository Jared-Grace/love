import { list_empty_is } from "./list_empty_is.mjs";
import { js_bare_call_names } from "./js_bare_call_names.mjs";
import { property_or_null } from "./property_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { js_hash_key_nodes } from "./js_hash_key_nodes.mjs";
import { property_get } from "./property_get.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
import { list_add_unique } from "./list_add_unique.mjs";
import { not } from "./not.mjs";
export function js_hash_key_getters(ast) {
  "Every function this file calls to get the name of a field of the address of a page.";
  "This is the repaired shape, not the broken one - the word is held somewhere rather than written out at the site. What is worth knowing about it is that the holding is only half the repair. A word held by a function can still be reworded there, and rewording it silently loses every saved link that spells the old one; the other half is freezing it, and nothing about the call says whether that was done.";
  "So the answer here is a list of names to ask a further question of, not a list of things wrong.";
  "A call handed nothing is the whole shape looked for. Anything given arguments is working something out rather than handing back a word it holds, and there is no fixed word in it to freeze.";
  "Both ways the call can stand there count, and the second is the one the repo is actually written in. The pass that canonicalizes a file lifts a call out of the place it stood and gives it a line and a name of its own, so what is left where the field goes is a name. Read only the first way, this finds nothing on every routed file in the repo - which was measured, not guessed.";
  arguments_assert(arguments, 1);
  let nodes = js_hash_key_nodes(ast);
  let lifted = js_bare_call_names(ast);
  let names = [];
  for (let node of nodes) {
    let key = property_get(node, "key");
    let named = js_node_type_is(key, "Identifier");
    if (named) {
      let name = property_get(key, "name");
      let stood = property_or_null(lifted, name);
      if (null_is(stood)) {
        continue;
      }
      list_add_unique(names, stood);
      continue;
    }
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
    let bare = list_empty_is(args);
    if (not(bare)) {
      continue;
    }
    let f_name = property_get(callee, "name");
    list_add_unique(names, f_name);
  }
  return names;
}
