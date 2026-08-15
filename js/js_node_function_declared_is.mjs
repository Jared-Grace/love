import { arguments_assert } from "./arguments_assert.mjs";
import { js_node_type } from "./js_node_type.mjs";
import { equal } from "./equal.mjs";
export function js_node_function_declared_is(node) {
  arguments_assert(arguments, 1);
  ("Whether this is a function written down as a function - given a name where it stands, on a line of its own, among other lines.");
  ("Its neighbour asks after the other kind, a function written down as a value. The two are told apart constantly, because where a function stands decides what may be done to it, and the answer belongs in one place rather than beside each question.");
  let node_type = js_node_type(node);
  let declared_is = equal(node_type, "FunctionDeclaration");
  return declared_is;
}
