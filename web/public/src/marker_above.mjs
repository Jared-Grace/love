import { function_transform_marker_current } from "./function_transform_marker_current.mjs";
import { marker } from "./marker.mjs";
export async function marker_above(code) {
  marker("1");
  let v = await function_transform_marker_current(async function lambda(a) {});
}
