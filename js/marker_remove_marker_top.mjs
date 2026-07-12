import { marker_top } from "./marker_top.mjs";
import { marker_remove } from "./marker_remove.mjs";
export async function marker_remove_marker_top() {
  await marker_remove();
  let v = await marker_top();
  return v;
}
