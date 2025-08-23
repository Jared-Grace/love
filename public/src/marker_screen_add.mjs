import { marker_below } from "./marker_below.mjs";
import { marker } from "./marker.mjs";
export async function marker_screen_add(code) {
  marker("1");
  return await marker_below(code);
}
