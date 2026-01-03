import { app_generic_refresh_screen } from "../../../love/public/src/app_generic_refresh_screen.mjs";
import { app_generic_screen_name } from "../../../love/public/src/app_generic_screen_name.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { app_component } from "../../../love/public/src/app_component.mjs";
import { app_a_function } from "../../../love/public/src/app_a_function.mjs";
export async function app_a_preview_back_function(context, a_name) {
  function lambda() {
    marker("1");
    let without = app_generic_screen_name(context, app_a_function);
    app_generic_refresh_screen(context, without);
  }
  await app_component(a_name, lambda);
}
