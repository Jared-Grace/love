import { function_transform_marker } from "./function_transform_marker.mjs";
import { data_function_current_get } from "./data_function_current_get.mjs";
import { marker } from "./marker.mjs";
export async function marker_rename(from,to) {
  async function lambda(a) {}
  marker("1");
  let f_name_current = await data_function_current_get();
  let v = await function_transform_marker(f_name_current, lambda);
}
