import { marker } from "../../../love/public/src/marker.mjs";
import { app_g_main } from "../../../love/public/src/app_g_main.mjs";
import { global_function_property_get } from "../../../love/public/src/global_function_property_get.mjs";
export function app_g_main_books() {
  marker("1");
  let value = global_function_property_get(app_g_main, "books");
  return value;
}
