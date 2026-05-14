import { js_flo_body_empty_return } from "../../../love/public/src/js_flo_body_empty_return.mjs";
import { function_new_open_transform } from "../../../love/public/src/function_new_open_transform.mjs";
import { js_expression_array } from "../../../love/public/src/js_expression_array.mjs";
import { function_name_combine } from "../../../love/public/src/function_name_combine.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { app_shared_name_search_info } from "../../../love/public/src/app_shared_name_search_info.mjs";
export async function app_shared_screens_generate(search) {
  let r = await app_shared_name_search_info(search);
  let app_name = property_get(r, "app_name");
  let combined = function_name_combine(app_name, "screens");
  async function lambda(ast) {
    let expression = js_expression_array([]);
    js_flo_body_empty_return(ast2, expression2);
  }
  let output = await function_new_open_transform(f_name, lambda);
}
