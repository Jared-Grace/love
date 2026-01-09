import { file_transform_cached } from "../../../love/public/src/file_transform_cached.mjs";
import { js_auto } from "../../../love/public/src/js_auto.mjs";
import { function_transform } from "../../../love/public/src/function_transform.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function function_auto(f_name) {
  marker("1");
  await function_transform(f_name, js_auto);
  return;
  let r = await file_transform_cached(d_path, async function lambda2() {});
}
