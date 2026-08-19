import { js_hash_key_nodes_generic } from "./js_hash_key_nodes_generic.mjs";
import { js_hash_object_names } from "./js_hash_object_names.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export function js_hash_key_nodes(ast) {
  "Every place this file names a field of the address of a page, as {called, key} - counting every address it touches, the links it builds to hand to another page included.";
  "This is the reading about publishing. A word written into any of them is a word somebody can save, and saving is what makes rewording it lose the link, so which page the address belongs to does not come into it.";
  "The reading that asks instead which words a page must be able to make sense of wants only that page's own addresses, and it asks the general one directly with a shorter set of names.";
  arguments_assert(arguments, 1);
  let held = js_hash_object_names(ast);
  let sites = js_hash_key_nodes_generic(ast, held);
  return sites;
}
