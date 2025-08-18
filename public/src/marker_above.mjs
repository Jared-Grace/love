import { marker_index } from "./marker_index.mjs";
import { function_transform_marker_current } from "./function_transform_marker_current.mjs";
import { marker } from "./marker.mjs";
export async function marker_above(code) {
  marker("1");
  async function lambda(a) {
    let i = marker_index(a);
  }
  let v = await function_transform_marker_current(lambda);
}
