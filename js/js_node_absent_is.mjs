import { property_get_or_null } from "./property_get_or_null.mjs";
import { equal } from "./equal.mjs";
import { null_is } from "./null_is.mjs";
export function js_node_absent_is(node) {
  "Whether a value written in the code stands for nothing at all - the word for";
  "nothing, and the name a language gives a value never set.";
  let type = property_get_or_null(node, "type");
  let literal = equal(type, "Literal");
  if (literal) {
    let value = property_get_or_null(node, "value");
    let none = null_is(value);
    return none;
  }
  let identifier = equal(type, "Identifier");
  if (identifier) {
    let name = property_get_or_null(node, "name");
    let absent_word_is = equal(name, "undefined");
    return absent_word_is;
  }
  return false;
}
