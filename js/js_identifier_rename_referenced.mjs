import { js_identifiers_referenced_nodes } from "./js_identifiers_referenced_nodes.mjs";
import { property_set_if_equals_curried_right_3 } from "./property_set_if_equals_curried_right_3.mjs";
import { equal } from "./equal.mjs";
import { each } from "./each.mjs";
export function js_identifier_rename_referenced(ast, name_from, name_to) {
  "Give a new name to a value, everywhere the file reads that value - and nowhere it merely spells that word as the name of a property or a key.";
  "A property is text that belongs to whatever object is being asked, not a variable this file is free to call something else. Renaming one asks that object for a thing it does not have, and the answer is nothing rather than an error, so the file goes on running and quietly does the wrong thing. That is not a guess: a canonicalizing pass renamed `compressToUTF16` to `compressToUTF` on a compression library, and both the writing and the reading of every compressed text became undefined without a word said.";
  if (equal(name_from, name_to)) {
    return;
  }
  let nodes = js_identifiers_referenced_nodes(ast);
  let r = property_set_if_equals_curried_right_3("name", name_from, name_to);
  each(nodes, r);
}
