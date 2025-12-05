import { app_g_main } from "../../../love/public/src/app_g_main.mjs";
import { global_function_property_get } from "../../../love/public/src/global_function_property_get.mjs";
export function g_main_books() {
  let value = global_function_property_get(app_g_main, "books");
  return value;
}
