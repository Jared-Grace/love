import { js_list_type } from "../../../love/public/src/js_list_type.mjs";
export function js_list_calls(ast) {
  let node_type = "CallExpression";
  let vs = js_list_type(ast, node_type);
  return vs;
}
