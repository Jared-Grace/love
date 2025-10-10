import { marker_up } from "../../../love/public/src/marker_up.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function marker_up_1() {
  marker("1");
  let v = await marker_up(1);
  return v;
}
