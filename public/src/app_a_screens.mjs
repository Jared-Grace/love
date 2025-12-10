import { app_karate_home } from "../../../karate_code/public/src/app_karate_home.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export function app_a_screens() {
  marker("screens");
  let v = {
    home: app_karate_home,
  };
  return v;
}
