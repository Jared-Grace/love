import { js_hash_object_names_pair } from "./js_hash_object_names_pair.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";

export function js_hash_object_names_own(ast) {
  "The names this file gives to the address of the page it is itself part of - leaving out the links it builds to hand to another page.";
  "Read the address and you have this page's own. Hand it to a function of your own to change it and that function's first parameter is the same thing under another name. Both are addresses this page will read back later, and a word in either is a word this page has to be able to make sense of.";
  "An empty object filled up and turned into a link is left out, because the words in it are never read here. They are the destination page's words, spelled on the way out; asking this page to answer for them would be asking it to declare it understands an address it never looks at.";
  arguments_assert(arguments, 1);
  let pair = js_hash_object_names_pair(ast);
  let own = property_get(pair, "own");
  return own;
}
