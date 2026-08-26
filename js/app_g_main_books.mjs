import { app_g } from "./app_g.mjs";
import { global_function_property_get } from "./global_function_property_get.mjs";
export function app_g_main_books() {
  let value = global_function_property_get(app_g, "books");
  return value;
}
