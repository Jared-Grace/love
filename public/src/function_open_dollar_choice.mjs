import { function_open } from "./function_open.mjs";
import { marker } from "./marker.mjs";
export async function function_open_dollar_choice(f_name) {
  marker("1");
  let v = await function_open(f_name);
  return v;
}
