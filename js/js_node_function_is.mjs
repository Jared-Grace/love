import { arguments_assert } from "./arguments_assert.mjs";
import { js_node_is } from "./js_node_is.mjs";
import { js_node_type } from "./js_node_type.mjs";
import { js_types_function_node } from "./js_types_function_node.mjs";
import { list_includes } from "./list_includes.mjs";
import { not } from "./not.mjs";
export function js_node_function_is(node) {
  arguments_assert(arguments, 1);
  ("Whether a piece of parsed code is a function, written down whichever of the three ways the language offers.");
  ("Its two neighbours each ask after one way of writing one - a function given a name where it stands, or a function standing as a value. Both are the right question when what may be done to the function is what is being decided, because where it stands is what decides that. This is the other question: which piece of a chain of code is the function the line was written inside, where every way of writing one is equally the answer.");
  ("Nothing is not a function, and asking a nothing for its kind throws - so the guard comes first and on its own line, for the same reason its neighbour spells out at length.");
  let node_is = js_node_is(node);
  if (not(node_is)) {
    return false;
  }
  let type = js_node_type(node);
  let types = js_types_function_node();
  let is = list_includes(types, type);
  return is;
}
