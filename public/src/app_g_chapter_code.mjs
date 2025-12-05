import { app_g_main } from "../../../love/public/src/app_g_main.mjs";
import { global_function_property_get } from "../../../love/public/src/global_function_property_get.mjs";
export function app_g_chapter_code() {
  let value = global_function_property_get(app_g_main, "chapter_code");
  return value;
}
