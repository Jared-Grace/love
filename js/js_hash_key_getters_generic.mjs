import { js_hash_key_compared_nodes } from "./js_hash_key_compared_nodes.mjs";
import { js_hash_key_nodes_generic } from "./js_hash_key_nodes_generic.mjs";
import { lists_combine } from "./lists_combine.mjs";
import { js_key_getters_generic } from "./js_key_getters_generic.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export function js_hash_key_getters_generic(ast, held) {
  "Every function this file calls to get the name of a field of the address of a page, over whichever addresses it is told to count.";
  "This is the repaired shape, not the broken one - the word is held somewhere rather than written out at the site. So the answer is a list of names to ask a further question of, not a list of things wrong.";
  "Three shapes reach a field and all three are asked about. Two of them hand the field to something, and those are the ones the received set of names decides. The third never hands it anywhere: it asks whether a word taken out of the address is this field, and a page pulling its own address apart is written only that way. That one is always this page's own address by construction - there is nothing else it could be taking apart - so it is counted whatever is received.";
  arguments_assert(arguments, 2);
  let handed = js_hash_key_nodes_generic(ast, held);
  let compared = js_hash_key_compared_nodes(ast);
  let nodes = lists_combine([handed, compared]);
  let names = js_key_getters_generic(ast, nodes);
  return names;
}
