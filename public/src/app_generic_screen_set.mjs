import { app_generic_refresh_screen } from "../../../love/public/src/app_generic_refresh_screen.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { function_name_prefix_without } from "../../../love/public/src/function_name_prefix_without.mjs";
export function app_generic_screen_set(context, fn) {
  marker("1");
  let app_fn = object_property_get(context, "app_fn");
  let without = function_name_prefix_without(fn, app_fn);
  app_generic_refresh_screen(context, without);
}
