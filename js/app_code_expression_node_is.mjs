import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { app_code_expression_name_is } from "./app_code_expression_name_is.mjs";
import { object_is } from "./object_is.mjs";
import { property_exists } from "./property_exists.mjs";
export function app_code_expression_node_is(item) {
  arguments_assert(arguments, 1);
  ("whether a side of an expression is still an operator waiting to be worked out, rather than a value already worked out");
  ("The whole of what a step-by-step solver has to decide. An operator may be taken next exactly when neither of its sides is one of these any more, so this is the question underneath ",
    fn_name("app_code_expression_nodes_ready"),
    ".");
  ("2026-10-17: a name still to be read is waiting to be worked out too, as an operator is, so it holds up whatever it stands in until it is read");
  if (app_code_expression_name_is(item)) {
    return true;
  }
  let o = object_is(item);
  if (o) {
    let e = property_exists(item, "operator");
    return e;
  }
  return false;
}
