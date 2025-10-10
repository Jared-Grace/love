import { app_replace_settings } from "../../../love/public/src/app_replace_settings.mjs";
import { app_replace_rule_set } from "../../../love/public/src/app_replace_rule_set.mjs";
import { app_replace_home } from "../../../love/public/src/app_replace_home.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export function app_replace_screens() {
  marker("screens");
  let v = {
    home: app_replace_home,
    rule_set: app_replace_rule_set,
    settings: app_replace_settings,
  };
  return v;
}
