import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { function_name_prefix_without } from "../../../karate_code/public/src/function_name_prefix_without.mjs";
import { storage_local_set_context } from "../../../love/public/src/storage_local_set_context.mjs";
import { app_refresh } from "../../../love/public/src/app_refresh.mjs";
export function app_screen_set(context, fn) {
  let app_fn = object_property_get(context, "app_fn");
  let without = function_name_prefix_without(fn, app_fn);
  storage_local_set_context(context, "screen", value);
  app_refresh(context);
}
