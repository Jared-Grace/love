import { js_node_type_is_if } from "../../../love/public/src/js_node_type_is_if.mjs";
export function js_declare_is_if_async(node, lambda) {
  js_node_type_is_if(node, "VariableDeclaration", lambda);
}
