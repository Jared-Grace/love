import { arguments_assert } from "./arguments_assert.mjs";
import { js_node_type } from "./js_node_type.mjs";
import { property_get } from "./property_get.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { null_not_is } from "./null_not_is.mjs";
export function js_node_function_valued_named_is(node) {
  arguments_assert(arguments, 1);
  ("Whether this is a function written down as a value - handed to something, or put under a name in a thing being written out - and carrying a name of its own.");
  ("A name of its own is asked for because a nameless one cannot be spoken about. Every function in this repo has one by the time anybody reads it: a pass gives the nameless ones a word before the file is written back, which is what makes them addressable at all.");
  let node_type = js_node_type(node);
  let valued_is = equal(node_type, "FunctionExpression");
  if (not(valued_is)) {
    return false;
  }
  let id = property_get(node, "id");
  let named_is = null_not_is(id);
  return named_is;
}
