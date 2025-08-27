import { function_transform_marker } from "./function_transform_marker.mjs";
import { data_function_current_get } from "./data_function_current_get.mjs";
export async function marker_rename() {
  async function lambda(a) {}
  marker2("1");
  let f_name_current = await data_function_current_get();
  let v2 = await function_transform_marker(f_name_current, lambda);
  let v = v2;
}
