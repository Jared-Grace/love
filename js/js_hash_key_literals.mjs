import { js_key_literals_generic } from "./js_key_literals_generic.mjs";
import { js_hash_key_nodes } from "./js_hash_key_nodes.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export function js_hash_key_literals(ast) {
  "Every place this file writes a word straight into the address of a page instead of calling something that holds the word.";
  "A word in an address leaves the moment somebody saves the link or sends it on, and after that it is on disks nobody here can reach. Written out at the site, it is a word anybody may reword while tidying, and the saved link goes on asking for the old one.";
  "Held by a function instead, the same word can be frozen, and rewording it then shows up as a changed value rather than as nothing at all.";
  "Which places name a field of the address at all is asked elsewhere, because a call standing in the same place is the repaired shape and has its own question asked of it. Kept apart, the two readings cannot drift, and a drift here would be silent: a reading that stopped reaching an address simply finds nothing, which is what a clean repo looks like too.";
  "All that is said here is which part of the address is meant. The judging is shared with the part after the question mark, which asks the identical question of a different walk.";
  arguments_assert(arguments, 1);
  let nodes = js_hash_key_nodes(ast);
  let sites = js_key_literals_generic(ast, nodes);
  return sites;
}
