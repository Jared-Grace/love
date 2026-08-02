import { js_key_getters_generic } from "./js_key_getters_generic.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { js_hash_key_nodes } from "./js_hash_key_nodes.mjs";
export function js_hash_key_getters(ast) {
  "Every function this file calls to get the name of a field of the address of a page.";
  "This is the repaired shape, not the broken one - the word is held somewhere rather than written out at the site. What is worth knowing about it is that the holding is only half the repair. A word held by a function can still be reworded there, and rewording it silently loses every saved link that spells the old one; the other half is freezing it, and nothing about the call says whether that was done.";
  "So the answer here is a list of names to ask a further question of, not a list of things wrong.";
  "A call handed nothing is the whole shape looked for. Anything given arguments is working something out rather than handing back a word it holds, and there is no fixed word in it to freeze.";
  "Both ways the call can stand there count, and the second is the one the repo is actually written in. The pass that canonicalizes a file lifts a call out of the place it stood and gives it a line and a name of its own, so what is left where the field goes is a name. Read only the first way, this finds nothing on every routed file in the repo - which was measured, not guessed.";
  "All that is said here is which part of the address is meant. The judging is shared with the part after the question mark, which asks the identical question of a different walk.";
  arguments_assert(arguments, 1);
  let nodes = js_hash_key_nodes(ast);
  let names = js_key_getters_generic(ast, nodes);
  return names;
}
