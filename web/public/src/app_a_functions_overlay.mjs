import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { app_a_functions_overlay_first } from "../../../love/public/src/app_a_functions_overlay_first.mjs";
import { app_a_functions_generic } from "../../../love/public/src/app_a_functions_generic.mjs";
export async function app_a_functions_overlay(a, lambda$f_name) {
  let v2 = app_a_functions_overlay_first(a);
  let overlay_result = object_property_get(v2, "overlay_result");
  let context_copy = object_property_get(v2, "context_copy");
  let functions_result = await app_a_functions_generic(
    context_copy,
    lambda$f_name,
  );
  let v = {
    overlay_result,
    functions_result,
  };
  return v;
}
