import { function_current_get } from "./function_current_get.mjs";
import { function_transform_marker } from "./function_transform_marker.mjs";
import { marker } from "./marker.mjs";
export async function function_transform_marker_current(lambda$a) {
  marker("1");
  let f_name_current = await function_current_get();
  let v = await function_transform_marker(f_name_current, lambda$a);
  return v;
}
