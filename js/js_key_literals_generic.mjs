import { arguments_assert } from "./arguments_assert.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
import { property_get } from "./property_get.mjs";
import { list_add } from "./list_add.mjs";
import { text_is } from "./text_is.mjs";
import { not } from "./not.mjs";
export function js_key_literals_generic(ast, nodes) {
  "Given the places a file names a field of an address, the ones where the word is written straight into the site instead of being got from something that holds it.";
  "A word in an address leaves the moment somebody saves the link or sends it on, and after that it is on disks nobody here can reach. Written out at the site, it is a word anybody may reword while tidying, and the saved link goes on asking for the old one.";
  "Held by a function instead, the same word can be frozen, and rewording it then shows up as a changed value rather than as nothing at all.";
  "Which places name a field at all is received rather than worked out here, because the part after the hash and the part after the question mark are found by different walks and judged by the same one.";
  "The whole file is received as well as the places, because a word set on the line above and handed over as a variable is written out exactly as much as one typed into the slot, and is the shape somebody reaches for when the slot looks crowded. Reading only the slot called that clean, which is the same silence a repo with nothing wrong gives.";
  arguments_assert(arguments, 2);
  let sites = [];
  for (let node of nodes) {
    let key = property_get(node, "key");
    let word = js_key_literal_word_try(ast, key);
    let unwritten = null_is(word);
    if (unwritten) {
      continue;
    }
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
