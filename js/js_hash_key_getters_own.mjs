import { js_hash_key_getters_generic } from "./js_hash_key_getters_generic.mjs";
import { js_hash_object_names_own } from "./js_hash_object_names_own.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export function js_hash_key_getters_own(ast) {
  "Every function this file calls to get the name of a field of the address of the page it is itself part of.";
  "The narrower of the two readings, and the one to ask when the question is which words a page has to be able to make sense of. A page can only get a word wrong if it reads it, and it only reads the address it is standing in.";
  "A link built here to hand to another page is left out. Its words are the destination page's words, and that page is the one that reads them back and the one that has to answer for them. Counted here, a page would be asked to declare it understands an address it never looks at - which it could only do by saying something untrue, and a page that has declared it understands one word looks answered for from the outside ever after.";
  "It stays counted by the reading about publishing next door, which is the one that matters for such a word: what can go wrong with it is that somebody rewords it and every saved link stops opening.";
  arguments_assert(arguments, 1);
  let held = js_hash_object_names_own(ast);
  let names = js_hash_key_getters_generic(ast, held);
  return names;
}
