import { function_name_combine } from "./function_name_combine.mjs";
import { app_name_prefixed } from "./app_name_prefixed.mjs";
import { function_new } from "./function_new.mjs";
import { marker } from "./marker.mjs";
export async function function_new_app_screen(screen_name) {
  let a_name = app_name_prefixed(screen_name);
  let combined = function_name_combine(a_name, screen_name);
  marker("1");
  let v = await function_new(a_name);
  return v;
}
