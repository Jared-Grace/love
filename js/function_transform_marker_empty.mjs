import { marker } from "../../../love/public/src/marker.mjs";
import { function_transform_marker } from "../../../love/public/src/function_transform_marker.mjs";
import { function_current_get } from "../../../love/public/src/function_current_get.mjs";
import { noop } from "../../../love/public/src/noop.mjs";
export async function function_transform_marker_empty() {
  marker("1");
  let f_name = await function_current_get();
  let v = await function_transform_marker(f_name, noop);
  return v;
}
