import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { fn_name } from "../../../love/public/src/fn_name.mjs";
import { app_generic_refresh_screen } from "../../../love/public/src/app_generic_refresh_screen.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export function app_generic_screen_set(context, fn) {
  let fn_name = object_property_get(fn, "name");
  app_generic_refresh_screen(context, fn_name);
}
