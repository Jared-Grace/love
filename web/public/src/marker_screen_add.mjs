import { marker_next_get } from "./marker_next_get.mjs";
import { function_transform_marker_current } from "./function_transform_marker_current.mjs";
import { marker } from "./marker.mjs";
export async function marker_screen_add(screen_name) {
  marker("1");
  async function lambda(a) {
    let { next } = marker_next_get(a);
  }
  let v2 = await function_transform_marker_current(lambda);
  return v;
}
