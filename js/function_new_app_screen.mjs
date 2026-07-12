import { data_app_current_get } from "./data_app_current_get.mjs";
import { function_name_combine } from "./function_name_combine.mjs";
import { function_new_open } from "./function_new_open.mjs";
export async function function_new_app_screen(screen_name) {
  let a_name = await data_app_current_get();
  let combined = function_name_combine(a_name, screen_name);
  let v = await function_new_open(combined);
  return v;
}
