import { functions_transform } from "../../../love/public/src/functions_transform.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { js_log_remove } from "../../../love/public/src/js_log_remove.mjs";
export async function functions_log_remove() {
  marker("1");
  let lambda = js_log_remove;
  let v = await functions_transform(lambda);
  return v;
}
