import { app_replace_rule_set_integers_abbreviations } from "../../../love/public/src/app_replace_rule_set_integers_abbreviations.mjs";
import { object_merge } from "../../../love/public/src/object_merge.mjs";
export function app_replace_rule_set_decimals_abbreviations() {
  let i = app_replace_rule_set_integers_abbreviations();
  let a = {
    de: ["", "de", "cimal number"],
  };
  let ab = object_merge(a, i);
  return ab;
}
