import { function_transform } from "../../../love/public/src/function_transform.mjs";
import { exit } from "../../../love/public/src/exit.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { list_single } from "../../../love/public/src/list_single.mjs";
import { js_list_type } from "../../../love/public/src/js_list_type.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { marker_next_declare_single_init } from "../../../love/public/src/marker_next_declare_single_init.mjs";
import { function_name_combine } from "../../../love/public/src/function_name_combine.mjs";
import { app_generic_name_prefixed } from "../../../love/public/src/app_generic_name_prefixed.mjs";
export async function marker_screen_add_generic(a_name, lambda) {
  let prefixed = app_generic_name_prefixed(a_name);
  let combined = function_name_combine(prefixed, "screens");
  async function lambda_ftms(a) {
    let v2 = marker_next_declare_single_init(a);
    let properties = object_property_get(v2, "properties");
    let node_type = "ArrayExpression";
    let vs = js_list_type(ast, node_type);
    let only = list_single(vs);
    log({
      only,
    });
    exit();
    await lambda(properties, prefixed);
  }
  let result = await function_transform(combined, lambda_ftms);
  return result;
}
