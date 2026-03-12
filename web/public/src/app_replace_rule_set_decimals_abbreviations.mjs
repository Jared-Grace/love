import { app_replace_rule_set_integers_abbreivations } from "../../../love/public/src/app_replace_rule_set_integers_abbreivations.mjs";
import { object_merge } from "../../../love/public/src/object_merge.mjs";
export function app_replace_rule_set_decimals_abbreviations() {
  let i = app_replace_rule_set_integers_abbreivations();
  let a = {
    de: ["", "de", "cimal number"],
  };
  let ab = object_merge(a, i);
  return ab;
}
