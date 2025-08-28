import { function_transform_marker_specified } from "./function_transform_marker_specified.mjs";
import { marker } from "./marker.mjs";
export async function js_auto_transform_new() {
  marker("1");
  async function lambda(a) {}
  let code = await function_transform_marker_specified(
    f_name,
    marker_name,
    lambda,
  );
}
