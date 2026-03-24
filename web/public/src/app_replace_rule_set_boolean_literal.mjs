import { app_replace_rule_set_boolean_literal_rules } from "../../../love/public/src/app_replace_rule_set_boolean_literal_rules.mjs";
export function app_replace_rule_set_boolean_literal() {
  let abbreviations = {
    bo: ["", "bo", "oolean literal"],
  };
  let r = {
    name: "Boolean Literal",
    abbreviations,
    rules: app_replace_rule_set_boolean_literal_rules(),
    goals: [
      {
        start: "bo",
        end: "true",
      },
      {
        start: "bo",
        end: "false",
      },
    ],
  };
  return r;
}
