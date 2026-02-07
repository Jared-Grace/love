import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { function_transform } from "../../../love/public/src/function_transform.mjs";
import { list_single } from "../../../love/public/src/list_single.mjs";
import { js_list_type } from "../../../love/public/src/js_list_type.mjs";
import { function_name_combine } from "../../../love/public/src/function_name_combine.mjs";
import { app_shared_name_prefixed } from "../../../love/public/src/app_shared_name_prefixed.mjs";
export async function app_shared_screen_add_generic(a_name, lambda) {
  let prefixed = app_shared_name_prefixed(a_name);
  let combined = function_name_combine(prefixed, "screens");
  async function lambda_ftms(ast) {
    let node_type = "ArrayExpression";
    let vs = js_list_type(ast, node_type);
    let only = list_single(vs);
    let node = object_property_get(only, "node");
    let elements = object_property_get(node, "elements");
    await lambda(elements, prefixed);
  }
  let result = await function_transform(combined, lambda_ftms);
  return result;
}
