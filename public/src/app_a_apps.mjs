import { path_name } from "../../../love/public/src/path_name.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { app_a_functions_generic } from "../../../love/public/src/app_a_functions_generic.mjs";
import { apps_paths } from "../../../love/public/src/apps_paths.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function app_a_apps(context) {
  let aps = await apps_paths();
  let mapped = list_map(aps, path_name);
  log({
    mapped,
  });
  marker("1");
  function on_select(f_name) {
    alert(f_name);
  }
  app_a_functions_generic(context, "app", mapped, on_select);
}
