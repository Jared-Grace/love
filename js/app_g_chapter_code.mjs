import { app_g } from "./app_g.mjs";
import { global_function_property_get } from "./global_function_property_get.mjs";
export function app_g_chapter_code() {
  let value = global_function_property_get(app_g, "chapter_code");
  return value;
}
