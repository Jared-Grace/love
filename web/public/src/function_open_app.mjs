import { function_open } from "./function_open.mjs";
import { marker } from "./marker.mjs";
export async function function_open_app(f_name) {
  marker("1");
  return await function_open(f_name);
}
