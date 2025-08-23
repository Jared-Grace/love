import { function_transform_marker_specified } from "./function_transform_marker_specified.mjs";
import { marker } from "./marker.mjs";
import { data_marker_current_get } from "./data_marker_current_get.mjs";
export async function function_transform_marker(f_name, lambda$a) {
  marker("1");
  let marker_name = await data_marker_current_get();
  let code = await function_transform_marker_specified(
    f_name,
    marker_name,
    lambda$a,
  );
  return code;
}
