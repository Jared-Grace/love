import { js_dollar_new_name } from "./js_dollar_new_name.mjs";
import { function_open } from "./function_open.mjs";
import { marker } from "./marker.mjs";
export async function function_open_dollar_choice(code) {
  let combined = js_dollar_new_name(code);
  marker("1");
  let v = await function_open(combined);
  return v;
}
