import { log } from "./log.mjs";
import { function_transform_marker_current } from "./function_transform_marker_current.mjs";
import { marker } from "./marker.mjs";
export async function marker_leave() {
  async function lambda(a) {
    marker("1");
    let { stack } = a;
    log(stack);
  }
  let v = await function_transform_marker_current(lambda);
  return v;
}
