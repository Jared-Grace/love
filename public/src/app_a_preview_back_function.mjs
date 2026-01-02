import { app_component } from "../../../love/public/src/app_component.mjs";
import { app_a_function } from "../../../love/public/src/app_a_function.mjs";
import { app_generic_screen_set } from "../../../love/public/src/app_generic_screen_set.mjs";
export async function app_a_preview_back_function(context, a_name) {
  function lambda() {
    app_generic_screen_set(context, app_a_function);
  }
  await app_component(a_name, lambda);
}
