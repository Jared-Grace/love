import { js_node_type_is_if_async } from "../../../love/public/src/js_node_type_is_if_async.mjs";
export async function js_declare_is_if_async(node, lambda) {
  await js_node_type_is_if_async(node, "VariableDeclaration", lambda);
}
