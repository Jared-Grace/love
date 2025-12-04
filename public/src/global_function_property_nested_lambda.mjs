import { object_property_lambda_async } from "../../../love/public/src/object_property_lambda_async.mjs";
import { app_g_conversation } from "../../../love/public/src/app_g_conversation.mjs";
import { global_function_property_get } from "../../../love/public/src/global_function_property_get.mjs";
export function global_function_property_nested_lambda(
  property_name,
  chapter_code,
  lambda5,
) {
  let value = global_function_property_get(app_g_conversation, property_name);
  let o = object_property_lambda_async(value, chapter_code, lambda5);
  return o;
}
