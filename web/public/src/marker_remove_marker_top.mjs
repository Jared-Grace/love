import { marker_top } from "./marker_top.mjs";
import { marker_remove } from "./marker_remove.mjs";
import { marker } from "./marker.mjs";
export async function marker_remove_marker_top() {
  marker("1");
  await marker_remove();
  await marker_top();
}
