import { js_marker_remove } from "./js_marker_remove.mjs";
import { functions_transform } from "./functions_transform.mjs";
export async function functions_marker_remove() {
  let lambda = js_marker_remove;
  let v = await functions_transform(lambda);
  return v;
}
