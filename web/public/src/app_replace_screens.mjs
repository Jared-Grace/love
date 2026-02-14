import { app_replace_goal } from "../../../love/public/src/app_replace_goal.mjs";
import { app_replace_settings } from "../../../love/public/src/app_replace_settings.mjs";
import { app_replace_rule_set } from "../../../love/public/src/app_replace_rule_set.mjs";
import { app_replace_home } from "../../../love/public/src/app_replace_home.mjs";
export function app_replace_screens() {
  let s = [
    app_replace_home,
    app_replace_rule_set,
    app_replace_settings,
    app_replace_goal,
  ];
  return s;
}
