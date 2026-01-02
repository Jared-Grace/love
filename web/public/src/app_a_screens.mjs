import { app_a_function } from "../../../love/public/src/app_a_function.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export function app_a_screens() {
  marker("screens");
  let v = {
    functions: app_a_functions,
    function: app_a_function,
  };
  return v;
}
