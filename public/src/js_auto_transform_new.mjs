import { function_transform_marker_specified } from "./function_transform_marker_specified.mjs";
import { marker } from "./marker.mjs";
export async function js_auto_transform_new() {
  marker("1");
  let code = await function_transform_marker_specified(
    f_name,
    marker_name,
    async function lambda(a) {},
  );
}
