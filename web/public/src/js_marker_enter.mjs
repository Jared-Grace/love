import { function_types } from "./function_types.mjs";
import { function_transform_marker_current } from "./function_transform_marker_current.mjs";
import { marker } from "./marker.mjs";
export async function js_marker_enter(ast) {
  marker("1");
  let f_types = await function_types();
  async function lambda(a) {
    let stack2 = a;
  }
  let v = await function_transform_marker_current(lambda);
}
