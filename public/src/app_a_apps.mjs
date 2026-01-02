import { path_name } from "../../../love/public/src/path_name.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { app_a_functions_generic } from "../../../love/public/src/app_a_functions_generic.mjs";
import { apps_paths } from "../../../love/public/src/apps_paths.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function app_a_apps(context) {
  let aps = await apps_paths();
  let mapped = list_map(list, path_name);
  log({
    mapped,
  });
  marker("1");
  app_a_functions_generic(context, mapped);
}
