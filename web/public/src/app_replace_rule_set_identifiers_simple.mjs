import { object_merge } from "../../../love/public/src/object_merge.mjs";
import { app_replace_rule_set_identifiers_simple_goals } from "../../../love/public/src/app_replace_rule_set_identifiers_simple_goals.mjs";
import { app_replace_rule_set_identifiers_simple_rules } from "../../../love/public/src/app_replace_rule_set_identifiers_simple_rules.mjs";
export function app_replace_rule_set_identifiers_simple() {
  let abbreviations = {
    id: ["", "id", "entifier"],
    idf: [
      "",
      "id",
      "entifier ",
      "f",
      "irst: symbol that can be used as the first symbol of an identifier",
    ],
    ida: [
      "",
      "id",
      "entifier ",
      "a",
      "ny: symbol that can be used as any symbol of an identifier",
    ],
    idg: ["", "id", "entifier ", "g", "rower"],
  };
  object_merge(abbreviations, {
    di: ["", "di", "git sample: a few choices of digits"],
  });
  let r = {
    name: "Identifiers simple",
    rules: app_replace_rule_set_identifiers_simple_rules(),
    goals: app_replace_rule_set_identifiers_simple_goals(),
    abbreviations,
  };
  return r;
}
