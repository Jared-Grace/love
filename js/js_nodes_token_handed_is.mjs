import { arguments_assert } from "./arguments_assert.mjs";
import { js_node_types_is } from "./js_node_types_is.mjs";
import { property_get } from "./property_get.mjs";
import { js_nodes_token_any_is } from "./js_nodes_token_any_is.mjs";
export function js_nodes_token_handed_is(nodes, token) {
  "$plain token";
  "Whether the given word stands anywhere in the gathered code as an argument handed to a call or as a parameter a function takes - which is to say, as program rather than as a value.";
  "IT IS THE OTHER HALF OF SETTLING A DOUBT NO SINGLE LINE CAN SETTLE, and the half that answers for program. A call whose arguments are broken over several lines puts one name alone on a line, and so does a function whose parameters are; both are written exactly like an entry of a list, which is why the file has to be asked rather than the line.";
  "A PARAMETER IS ASKED ABOUT ALONGSIDE AN ARGUMENT because the two are the same shape from the difference's point of view, and because a function grown a parameter is the change this whole reading exists to find - counting it as a value would hide it in the one bucket nobody opens.";
  arguments_assert(arguments, 2);
  let called_types = ["CallExpression", "NewExpression"];
  let taking_types = [
    "FunctionDeclaration",
    "FunctionExpression",
    "ArrowFunctionExpression",
  ];
  for (let node of nodes) {
    let called_is = js_node_types_is(node, called_types);
    if (called_is) {
      let handed = property_get(node, "arguments");
      let held = js_nodes_token_any_is(handed, token);
      if (held) {
        return true;
      }
    }
    let takes_is = js_node_types_is(node, taking_types);
    if (takes_is) {
      let taken = property_get(node, "params");
      let held2 = js_nodes_token_any_is(taken, token);
      if (held2) {
        return true;
      }
    }
  }
  return false;
}
