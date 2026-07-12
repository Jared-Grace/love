import { js_expression_array_empty } from "./js_expression_array_empty.mjs";
import { js_flo_body_empty_return } from "./js_flo_body_empty_return.mjs";
import { function_new_open_transform } from "./function_new_open_transform.mjs";
import { function_name_combine } from "./function_name_combine.mjs";
import { property_get } from "./property_get.mjs";
import { app_shared_name_search_info } from "./app_shared_name_search_info.mjs";
export async function app_shared_screens_generate(search) {
  let r = await app_shared_name_search_info(search);
  let app_name = property_get(r, "app_name");
  let combined = function_name_combine(app_name, "screens");
  async function lambda(ast) {
    let expression = js_expression_array_empty();
    js_flo_body_empty_return(ast, expression);
  }
  let output = await function_new_open_transform(combined, lambda);
}
