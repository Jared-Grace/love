import { marker_next_declare_single_init_elements } from "./marker_next_declare_single_init_elements.mjs";
import { log } from "./log.mjs";
import { js_auto_transforms } from "./js_auto_transforms.mjs";
import { function_transform_marker_specified } from "./function_transform_marker_specified.mjs";
import { marker } from "./marker.mjs";
export async function js_auto_transform_new() {
  marker("1");
  async function lambda(a) {
    let elements = marker_next_declare_single_init_elements(a);
    log(ae);
  }
  let code = await function_transform_marker_specified(
    js_auto_transforms.name,
    "transforms",
    lambda,
  );
}
