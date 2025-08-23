import { function_new } from "./function_new.mjs";
import { marker } from "./marker.mjs";
export async function function_new_app_screen(f_name) {
  marker("1");
  let v = await function_new(f_name);
  return v;
}
