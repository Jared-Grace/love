import { marker_up } from "./marker_up.mjs";
import { marker } from "./marker.mjs";
export async function marker_up_1(delta) {
  marker("1");
  let v = await marker_up(delta);
  return v;
}
