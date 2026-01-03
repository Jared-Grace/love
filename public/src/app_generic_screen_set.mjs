import { log } from "../../../love/public/src/log.mjs";
import { app_generic_screen_name } from "../../../love/public/src/app_generic_screen_name.mjs";
import { app_generic_refresh_screen } from "../../../love/public/src/app_generic_refresh_screen.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export function app_generic_screen_set(context, fn) {
  marker("1");
  let without = app_generic_screen_name(context, fn);
  log({
    without,
  });
  app_generic_refresh_screen(context, without);
}
