import { data_app_current_get } from "./data_app_current_get.mjs";
import { function_name_combine } from "./function_name_combine.mjs";
import { function_new } from "./function_new.mjs";
import { marker } from "./marker.mjs";
export async function function_new_app_screen(screen_name) {
  let a_name = await data_app_current_get();
  let combined = function_name_combine(a_name, screen_name);
  marker("1");
  let v = await function_new(combined);
  return v;
}
