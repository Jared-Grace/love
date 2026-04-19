import { js_return_atomize_node } from "../../../love/public/src/js_return_atomize_node.mjs";
import { js_return_identifier_name } from "../../../love/public/src/js_return_identifier_name.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { each_async } from "../../../love/public/src/each_async.mjs";
import { js_list_type } from "../../../love/public/src/js_list_type.mjs";
export async function js_return_atomize(ast) {
  let rs = js_list_type(ast, "ReturnStatement");
  async function lambda(v) {
    let node = property_get(v, "node");
    let variable_name = js_return_identifier_name();
    await js_return_atomize_node(ast, node, variable_name);
  }
  await each_async(rs, lambda);
  return;
}
