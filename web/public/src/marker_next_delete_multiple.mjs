import { marker_next_delete } from "./marker_next_delete.mjs";
import { marker } from "./marker.mjs";
export async function marker_next_delete_multiple() {
  marker("1");
  let v = await marker_next_delete();
  return v;
}
