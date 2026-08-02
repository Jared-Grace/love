import { arguments_assert } from "./arguments_assert.mjs";
import { js_query_key_nodes } from "./js_query_key_nodes.mjs";
import { js_key_literals_generic } from "./js_key_literals_generic.mjs";
export function js_query_key_literals(ast) {
  "Every place this file writes a word straight into the query part of a page address instead of calling something that holds the word.";
  "The query part is saved and shared exactly like the part after the hash, so a word written out at the site is a word anybody may reword while tidying while every saved link goes on asking for the old one.";
  "All that is said here is which part of the address is meant. The judging is shared with the part after the hash, which asks the identical question of a different walk.";
  arguments_assert(arguments, 1);
  let nodes = js_query_key_nodes(ast);
  let sites = js_key_literals_generic(nodes);
  return sites;
}
