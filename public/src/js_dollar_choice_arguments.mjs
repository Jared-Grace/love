import { list_map } from "../../../love/public/src/list_map.mjs";
import { list_single } from "../../../love/public/src/list_single.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { js_object_expression_named } from "../../../love/public/src/js_object_expression_named.mjs";
import { function_transform } from "../../../love/public/src/function_transform.mjs";
import { js_dollar } from "../../../love/public/src/js_dollar.mjs";
import { function_transform_marker_specified } from "../../../love/public/src/function_transform_marker_specified.mjs";
import { marker_next_declare_single_init } from "../../../love/public/src/marker_next_declare_single_init.mjs";
export async function js_dollar_choice_arguments() {
  let result = null;
  async function lambda2(ast) {
    let oes = js_object_expression_named(ast, search);
    let only = list_single(oes);
    let properties = property_get(only, "properties");
    let mapped = list_map(list, function lambda3(item) {});
  }
  let output = await function_transform(f_name, lambda2);
  async function lambda(a) {
    result = marker_next_declare_single_init(a);
  }
  let code2 = await function_transform_marker_specified(
    js_dollar.name,
    "choice_arguments",
    lambda,
  );
  return result;
}
