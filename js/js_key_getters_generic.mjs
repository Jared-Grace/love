import { property_list_empty_is } from "./property_list_empty_is.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { js_bare_call_names } from "./js_bare_call_names.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
import { property_get } from "./property_get.mjs";
import { property_or_null } from "./property_or_null.mjs";
import { list_add_unique } from "./list_add_unique.mjs";
import { null_is } from "./null_is.mjs";
import { not } from "./not.mjs";
export function js_key_getters_generic(ast, nodes) {
  "Given the places a file names a field of an address, the functions it calls to get those names.";
  "This is the repaired shape, not the broken one - the word is held somewhere rather than written out at the site. What is worth knowing about it is that the holding is only half the repair. A word held by a function can still be reworded there, and rewording it silently loses every saved link that spells the old one; the other half is freezing it, and nothing about the call says whether that was done.";
  "A call handed nothing is the whole shape looked for. Anything given arguments is working something out rather than handing back a word it holds, and there is no fixed word in it to freeze.";
  "Both ways the call can stand there count, and the second is the one the repo is actually written in. The pass that canonicalizes a file lifts a call out of the place it stood and gives it a line and a name of its own, so what is left where the field goes is a name. Read only the first way, this finds nothing on every routed file in the repo - which was measured, not guessed.";
  "Which places to look at is received rather than worked out here, because the part after the hash and the part after the question mark are found by different walks and judged by the same one. Written out once per part, the judging had to be got right twice and a repair to either copy left the other holding the fault.";
  arguments_assert(arguments, 2);
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
    let bare = property_list_empty_is(key, "arguments");
    if (not(bare)) {
      continue;
    }
    let f_name = property_get(callee, "name");
    list_add_unique(names, f_name);
  }
  return names;
}
