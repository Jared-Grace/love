import { js_hash_key_nodes } from "./js_hash_key_nodes.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
import { property_get } from "./property_get.mjs";
import { list_add } from "./list_add.mjs";
import { text_is } from "./text_is.mjs";
import { not } from "./not.mjs";
export function js_hash_key_literals(ast) {
  "Every place this file writes a word straight into the address of a page instead of calling something that holds the word.";
  "A word in an address leaves the moment somebody saves the link or sends it on, and after that it is on disks nobody here can reach. Written out at the site, it is a word anybody may reword while tidying, and the saved link goes on asking for the old one.";
  "Held by a function instead, the same word can be frozen, and rewording it then shows up as a changed value rather than as nothing at all.";
  "Which places name a field of the address at all is asked elsewhere, because a call standing in the same place is the repaired shape and has its own question asked of it. Kept apart, the two readings cannot drift, and a drift here would be silent: a reading that stopped reaching an address simply finds nothing, which is what a clean repo looks like too.";
  arguments_assert(arguments, 1);
  let nodes = js_hash_key_nodes(ast);
  let sites = [];
  for (let node of nodes) {
    let key = property_get(node, "key");
    let spelled = js_node_type_is(key, "Literal");
    if (not(spelled)) {
      continue;
    }
    let word = property_get(key, "value");
    let written = text_is(word);
    if (not(written)) {
      continue;
    }
    let called = property_get(node, "called");
    let site = {
      called,
      word,
    };
    list_add(sites, site);
  }
  return sites;
}
