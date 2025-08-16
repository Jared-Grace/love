import { data_function_current_get } from "./data_function_current_get.mjs";
import { function_transform_marker } from "./function_transform_marker.mjs";
import { marker } from "./marker.mjs";
export async function function_transform_marker_current(f_name, lambda$a) {
  marker("1");
  let f_name_current = await data_function_current_get();
  let v = await function_transform_marker(f_name, lambda$a);
  return v;
}
