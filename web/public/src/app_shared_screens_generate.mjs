import { js_expression_array } from "../../../love/public/src/js_expression_array.mjs";
import { function_name_combine } from "../../../love/public/src/function_name_combine.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { app_shared_name_search_info } from "../../../love/public/src/app_shared_name_search_info.mjs";
export async function app_shared_screens_generate(search) {
  let r = await app_shared_name_search_info(search);
  let app_name = property_get(r, "app_name");
  let combined = function_name_combine(app_name, "screens");
  let expression = js_expression_array(elements);function_new_open_transform
}
