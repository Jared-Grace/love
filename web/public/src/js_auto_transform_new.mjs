import { js_auto_transforms } from "./js_auto_transforms.mjs";
import { marker_next_declare_single_init } from "./marker_next_declare_single_init.mjs";
import { function_transform_marker_specified } from "./function_transform_marker_specified.mjs";
import { marker } from "./marker.mjs";
export async function js_auto_transform_new() {
  marker("1");
  async function lambda(a) {
    let array_expression = marker_next_declare_single_init(a);
  }
  let code = await function_transform_marker_specified(
    js_auto_transforms.name,
    marker_name,
    lambda,
  );
}
