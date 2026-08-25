import { arguments_assert } from "./arguments_assert.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
import { property_get } from "./property_get.mjs";
import { equal } from "./equal.mjs";
export function js_node_token_is(node, token) {
  "$plain token";
  "Whether one piece of parsed code is a bare name or a bare value written exactly as the given word.";
  "IT IS HOW A CHANGED LINE IS FOUND AGAIN IN THE FILE IT CAME FROM. A difference hands over the text of a line and nothing else, so a line holding one word is matched back to the tree by that word - and the two kinds of thing a lone word can be, a name and a value written out, are asked about together because the line does not say which it was either.";
  "A VALUE IS MATCHED ON HOW IT WAS WRITTEN AND NOT ON WHAT IT IS WORTH. The number eight and the text eight are different pieces of code that a difference prints identically, and the written form is the one the line carries, so it is the one compared.";
  arguments_assert(arguments, 2);
  let name_is = js_node_type_is(node, "Identifier");
  if (name_is) {
    let name = property_get(node, "name");
    let same = equal(name, token);
    return same;
  }
  let value_is = js_node_type_is(node, "Literal");
  if (value_is) {
    let raw = property_get(node, "raw");
    let same2 = equal(raw, token);
    return same2;
  }
  return false;
}
