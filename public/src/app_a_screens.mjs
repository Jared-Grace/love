import { app_a_function } from "../../../love/public/src/app_a_function.mjs";
import { app_a_home } from "../../../love/public/src/app_a_home.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export function app_a_screens() {
  marker("screens");
  let v = {
    home: app_a_home,
    function: app_a_function,
  };
  return v;
}
