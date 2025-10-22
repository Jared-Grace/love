import { marker } from "../../../love/public/src/marker.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { function_name_prefix_without } from "../../../love/public/src/function_name_prefix_without.mjs";
import { storage_local_set_context } from "../../../love/public/src/storage_local_set_context.mjs";
import { app_generic_refresh } from "../../../love/public/src/app_generic_refresh.mjs";
export function app_generic_screen_set(context, fn) {
  marker("1");
  let app_fn = object_property_get(context, "app_fn");
  let without = function_name_prefix_without(fn, app_fn);
  storage_local_set_context(context, "screen", without);
  app_generic_refresh(context);
}
