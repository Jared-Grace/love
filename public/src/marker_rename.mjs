import { function_transform_marker_current } from "./function_transform_marker_current.mjs";
import { marker } from "./marker.mjs";
export async function marker_rename() {
  marker("1");
  marker("2");
  async function lambda(a) {}
  let v = await function_transform_marker_current(lambda);
}
