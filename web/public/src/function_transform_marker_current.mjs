import { function_current_get } from "../../../love/public/src/function_current_get.mjs";
import { function_transform_marker } from "../../../love/public/src/function_transform_marker.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function function_transform_marker_current(lambda$a) {
  marker("1");
  let f_name_current = await function_current_get();
  let v = await function_transform_marker(f_name_current, lambda$a);
  return v;
}
