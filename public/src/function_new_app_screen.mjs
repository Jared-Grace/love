import { app_name_prefixed } from "./app_name_prefixed.mjs";
import { function_new } from "./function_new.mjs";
import { marker } from "./marker.mjs";
export async function function_new_app_screen(f_name) {
  let a_name = app_name_prefixed(f_name);
  marker("1");
  let v = await function_new(a_name);
  return v;
}
