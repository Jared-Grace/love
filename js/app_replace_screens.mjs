import { app_replace_goals } from "./app_replace_goals.mjs";
import { app_replace_settings } from "./app_replace_settings.mjs";
import { app_replace_rule_set } from "./app_replace_rule_set.mjs";
import { app_replace_home } from "./app_replace_home.mjs";
export function app_replace_screens() {
  let s = [
    app_replace_home,
    app_replace_rule_set,
    app_replace_settings,
    app_replace_goals,
  ];
  return s;
}
