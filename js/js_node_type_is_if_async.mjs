import { js_node_type_is } from "./js_node_type_is.mjs";
export async function js_node_type_is_if_async(node, type, lambda) {
  let type_is = js_node_type_is(node, type);
  if (type_is) {
    await lambda();
  }
}
