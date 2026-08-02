import { arguments_assert } from "./arguments_assert.mjs";
import { js_query_key_nodes } from "./js_query_key_nodes.mjs";
import { js_key_getters_generic } from "./js_key_getters_generic.mjs";
export function js_query_key_getters(ast) {
  "Every function this file calls to get the name of a field of the query part of a page address.";
  "This is the repaired shape rather than the broken one, so the answer is a list of names to ask a further question of - whether each has been frozen - and not a list of things wrong.";
  "All that is said here is which part of the address is meant. The judging is shared with the part after the hash, which asks the identical question of a different walk.";
  arguments_assert(arguments, 1);
  let nodes = js_query_key_nodes(ast);
  let names = js_key_getters_generic(ast, nodes);
  return names;
}
