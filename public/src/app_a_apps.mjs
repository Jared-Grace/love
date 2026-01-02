import { app_component } from "../../../love/public/src/app_component.mjs";
import { apps_names } from "../../../love/public/src/apps_names.mjs";
import { app_a_functions_generic } from "../../../love/public/src/app_a_functions_generic.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function app_a_apps(context) {
  let mapped = await apps_names();
  marker("1");
  async function on_select(a_name) {
    function lambda() {}
    await app_component(a_name, lambda);
  }
  app_a_functions_generic(context, "app", mapped, on_select);
}
