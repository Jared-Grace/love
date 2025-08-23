import { app_replace_home } from "./app_replace_home.mjs";
import { marker } from "./marker.mjs";
export function app_replace_screens() {
  marker("screens");
  let v = {
    home: app_replace_home,
    rule_set: app_replace_rule_set,
  };
  return v;
}
