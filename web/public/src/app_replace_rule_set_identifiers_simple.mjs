import { app_replace_rule_set_identifiers_simple_abbreviations } from "../../../love/public/src/app_replace_rule_set_identifiers_simple_abbreviations.mjs";
import { app_replace_rule_set_identifiers_simple_goals } from "../../../love/public/src/app_replace_rule_set_identifiers_simple_goals.mjs";
import { app_replace_rule_set_identifiers_simple_rules } from "../../../love/public/src/app_replace_rule_set_identifiers_simple_rules.mjs";
export function app_replace_rule_set_identifiers_simple() {
  let abbreviations = {
    id: ["", "id", "entifier"],
    idg: ["", "id", "entifier ", "g", "rower"],
  };
  app_replace_rule_set_identifiers_simple_abbreviations(abbreviations);
  let r = {
    name: "Identifiers Simple",
    rules: app_replace_rule_set_identifiers_simple_rules(),
    goals: app_replace_rule_set_identifiers_simple_goals(),
    abbreviations,
  };
  return r;
}
