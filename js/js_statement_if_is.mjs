import { js_node_type_is } from "./js_node_type_is.mjs";
export function js_statement_if_is(statement_if) {
  let is = js_node_type_is(statement_if, "IfStatement");
  return is;
}
