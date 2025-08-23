import { app_name_prefixed } from "./app_name_prefixed.mjs";
import { function_open } from "./function_open.mjs";
import { marker } from "./marker.mjs";
export async function function_open_app(f_name) {
  marker("1");
  let a_name = app_name_prefixed(name);
  let v = await function_open(f_name);
  return v;
}
