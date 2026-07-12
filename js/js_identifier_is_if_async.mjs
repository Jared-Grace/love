import { js_node_type_is_if_async } from "./js_node_type_is_if_async.mjs";
export async function js_identifier_is_if_async(node, lambda) {
  await js_node_type_is_if_async(node, "Identifier", lambda);
}
