import { function_transform_marker_current } from "./function_transform_marker_current.mjs";
import { marker } from "./marker.mjs";
export async function marker_leave() {
  marker("1");
  async function lambda(a) {}
  let v = await function_transform_marker_current(lambda);
  return v;
}
