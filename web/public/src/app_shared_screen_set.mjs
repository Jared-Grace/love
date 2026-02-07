import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { fn_name } from "../../../love/public/src/fn_name.mjs";
import { app_shared_refresh_screen } from "../../../love/public/src/app_shared_refresh_screen.mjs";
export function app_shared_screen_set(context, fn) {
  let fn_name = object_property_get(fn, "name");
  app_shared_refresh_screen(context, fn_name);
}
