import { marker_down } from "../../../love/public/src/marker_down.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function marker_down_1() {
  marker("1");
  let v = await marker_down(1);
  return v;
}
