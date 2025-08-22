import { marker } from "./marker.mjs";
import { function_transform_marker } from "./function_transform_marker.mjs";
import { data_function_current_get } from "./data_function_current_get.mjs";
import { noop } from "./noop.mjs";
export async function function_transform_marker_empty() {
  marker("1");
  let f_name = await data_function_current_get();
  let v = await function_transform_marker(f_name, noop);
  return v;
}
