import { app_a_function_overlay_refresh } from "../../../love/public/src/app_a_function_overlay_refresh.mjs";
import { file_js_unparse } from "../../../love/public/src/file_js_unparse.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
export async function app_a_function_on_change(a, o) {
  let parsed = property_get(a, "parsed");
  await file_js_unparse(parsed);
  await app_a_function_overlay_refresh(a, o);
}
