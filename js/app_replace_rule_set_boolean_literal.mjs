import { app_replace_rule_set_boolean_literal_rules } from "./app_replace_rule_set_boolean_literal_rules.mjs";
export function app_replace_rule_set_boolean_literal() {
  let r = {
    name: "Boolean Literal",
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
    why: "From here on the short words stand for places where a value goes, and the list above says what each one means. bo is a place that holds one of only two values: true or false. Pick the one the goal asks for.",
  };
  return r;
}
