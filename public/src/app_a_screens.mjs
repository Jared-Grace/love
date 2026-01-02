import { app_a_home } from "../../../love/public/src/app_a_home.mjs";
import { app_a_apps } from "../../../love/public/src/app_a_apps.mjs";
import { app_a_functions } from "../../../love/public/src/app_a_functions.mjs";
import { app_a_function } from "../../../love/public/src/app_a_function.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export function app_a_screens() {
  marker("screens");
  let v = {
    functions: app_a_functions,
    function: app_a_function,
    apps: app_a_apps,
    home: app_a_home,
  };
  return v;
}
