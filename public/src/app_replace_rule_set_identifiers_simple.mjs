import { app_replace_rule_set_identifiers_simple_goals } from "../../../love/public/src/app_replace_rule_set_identifiers_simple_goals.mjs";
import { app_replace_rule_set_identifiers_simple_rules } from "../../../love/public/src/app_replace_rule_set_identifiers_simple_rules.mjs";
export function app_replace_rule_set_identifiers_simple() {
  let abbreviations = {
    id: ["", "id", "entifier"],
    id: [
      "",
      "id",
      "entifier ",
      "f",
      "irst  symbol that can be used as the ",
      "f",
      "irst symbol",
    ],
  };
  let r = {
    name: "Identifiers simple",
    rules: app_replace_rule_set_identifiers_simple_rules(),
    goals: app_replace_rule_set_identifiers_simple_goals(),
    abbreviations,
  };
  return r;
}
