import { js_if_blockify_generic_node } from "../../../love/public/src/js_if_blockify_generic_node.mjs";
import { js_visit_type_each_async } from "../../../love/public/src/js_visit_type_each_async.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
export async function js_if_blockify_generic(
  ast,
  type,
  property_name,
  add_copy,
) {
  async function lambda(v) {
    let node = property_get(v, "node");
    js_if_blockify_generic_node(node, property_name, add_copy);
  }
  await js_visit_type_each_async(ast, type, lambda);
}
