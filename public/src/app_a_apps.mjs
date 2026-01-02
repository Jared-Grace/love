import { log } from "../../../love/public/src/log.mjs";
import { app_a_functions_generic } from "../../../love/public/src/app_a_functions_generic.mjs";
import { apps_paths } from "../../../love/public/src/apps_paths.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function app_a_apps(context) {
  let as = await apps_paths();
  log({
    as,
  });
  marker("1");
  app_a_functions_generic(context, as);
}
