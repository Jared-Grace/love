import { js_node_type_is } from "./js_node_type_is.mjs";
import { not } from "./not.mjs";
import { property_get } from "./property_get.mjs";
export function js_statement_returned_call(statement) {
  "The call this statement returns, or nothing when it is not a return of a call.";
  let return_is = js_node_type_is(statement, "ReturnStatement");
  if (not(return_is)) {
    return null;
  }
  let argument = property_get(statement, "argument");
  let call = js_expression_call_only(argument);
  return call;
}
