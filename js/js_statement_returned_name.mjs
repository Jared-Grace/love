import { js_node_type_is } from "./js_node_type_is.mjs";
import { not } from "./not.mjs";
import { property_get } from "./property_get.mjs";
export function js_statement_returned_name(statement) {
  "The plain name this statement returns, or nothing when it returns anything else.";
  let return_is = js_node_type_is(statement, "ReturnStatement");
  if (not(return_is)) {
    return null;
  }
  let argument = property_get(statement, "argument");
  let name_is = js_node_type_is(argument, "Identifier");
  if (not(name_is)) {
    return null;
  }
  let name = property_get(argument, "name");
  return name;
}
