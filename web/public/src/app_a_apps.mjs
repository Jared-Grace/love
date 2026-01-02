import { app_a_functions_generic } from "../../../love/public/src/app_a_functions_generic.mjs";
import { apps_get } from "../../../love/public/src/apps_get.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function app_a_apps(context) {
  let as = await apps_get();
  marker("1");
  app_a_functions_generic(context, as);
}
