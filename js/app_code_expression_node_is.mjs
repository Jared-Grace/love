import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { object_is } from "./object_is.mjs";
import { property_exists } from "./property_exists.mjs";
export function app_code_expression_node_is(item) {
  arguments_assert(arguments, 1);
  ("whether a side of an expression is still an operator waiting to be worked out, rather than a value already worked out");
  ("The whole of what a step-by-step solver has to decide. An operator may be taken next exactly when neither of its sides is one of these any more, so this is the question underneath ",
    fn_name("app_code_expression_nodes_ready"),
    ".");
  let o = object_is(item);
  if (o) {
    let e = property_exists(item, "operator");
    return e;
  }
  return false;
}
