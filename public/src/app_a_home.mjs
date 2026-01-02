import { app_a_functions } from "../../../love/public/src/app_a_functions.mjs";
import { app_generic_screen_set } from "../../../love/public/src/app_generic_screen_set.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export function app_a_home(context) {
  marker("1");
  app_generic_screen_set(context, app_a_functions);
}
