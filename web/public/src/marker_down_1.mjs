import { marker_down } from "./marker_down.mjs";
import { marker } from "./marker.mjs";
export async function marker_down_1() {
  marker("1");
  let v = await marker_down(1);
  return v;
}
