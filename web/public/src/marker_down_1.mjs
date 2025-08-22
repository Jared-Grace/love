import { marker_down } from "./marker_down.mjs";
import { marker } from "./marker.mjs";
export async function marker_down_1(delta) {
  marker("1");
  let v = await marker_down(delta);
  return v;
}
