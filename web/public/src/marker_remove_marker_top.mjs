import { marker_top } from "../../../love/public/src/marker_top.mjs";
import { marker_remove } from "../../../love/public/src/marker_remove.mjs";
export async function marker_remove_marker_top() {
  await marker_remove();
  let v = await marker_top();
  return v;
}
