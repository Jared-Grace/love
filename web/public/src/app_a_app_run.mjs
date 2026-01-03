import { app_generic_screen_set } from "../../../love/public/src/app_generic_screen_set.mjs";
import { app_component } from "../../../love/public/src/app_component.mjs";
import { app_a_function } from "../../../love/public/src/app_a_function.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function app_a_app_run(context) {
  function lambda() {
    marker("1");
    app_generic_screen_set(context, app_a_function);
  }
  await app_component(a_name, lambda);
}
