import { function_transform_marker_specified } from "./function_transform_marker_specified.mjs";
import { marker } from "./marker.mjs";
export async function js_dollar_new(code) {
  marker("1");
  async function lambda(a) {}
  let code2 = await function_transform_marker_specified(
    f_name,
    marker_name,
    lambda,
  );
}
