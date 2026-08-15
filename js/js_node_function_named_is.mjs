import { arguments_assert } from "./arguments_assert.mjs";
import { js_node_function_declared_is } from "./js_node_function_declared_is.mjs";
import { js_node_function_valued_named_is } from "./js_node_function_valued_named_is.mjs";
export function js_node_function_named_is(node) {
  arguments_assert(arguments, 1);
  ("Whether this is a function carrying a name, written down either way - on a line of its own, or as a value under a name.");
  ("One question over the two, because a great deal of what can be done to a function needs nothing more than a name to reach it by, and asking those two things separately at every such place is how the two kinds drift apart.");
  let declared_is = js_node_function_declared_is(node);
  if (declared_is) {
    return true;
  }
  let valued_is = js_node_function_valued_named_is(node);
  return valued_is;
}
