import { js_hash_object_names_pair } from "./js_hash_object_names_pair.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { list_concat } from "./list_concat.mjs";
export function js_hash_object_names(ast) {
  "The names this file gives to the object a page's address is read into, so a reading can tell a word written into somebody's link apart from a word written into any other object.";
  "Asked of the code rather than of a naming habit. Every one of these is called hash today, and a reading that trusted the word would go on agreeing with itself right up until somebody chose a different one - which is the moment it would matter.";
  "Three ways to come by one. Reading the address gives you it directly. Changing the address hands it to a function you wrote, and that function's first parameter is the same object under whatever name that function chose. Building a link for another tab starts from an empty object that is an address only because of what is done with it at the end.";
  "All three together, which is what a reading about publishing wants: a word saved into a link is lost the same way whichever page the link goes on to open. A reading asking instead which words a page reads back out of its OWN address wants the shorter answer, and that one is next door.";
  arguments_assert(arguments, 1);
  let pair = js_hash_object_names_pair(ast);
  let own = property_get(pair, "own");
  let outgoing = property_get(pair, "outgoing");
  let names = list_concat(own, outgoing);
  return names;
}
