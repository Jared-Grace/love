import { app_replace_rule_set_logical_expressions_rules } from "./app_replace_rule_set_logical_expressions_rules.mjs";
import { list_add } from "./list_add.mjs";
export function app_replace_rule_set_expressions_logical() {
  let rules = [];
  app_replace_rule_set_logical_expressions_rules(rules);
  list_add(rules, "ex > le");
  let r = {
    name: "Expressions Logical",
    rules,
    goals: [
      {
        start: "le",
        end: "re lo re",
      },
      {
        start: "re lo re",
        end: "mue lo mue",
      },
      {
        start: "mue lo mue",
        end: "mae lo mae",
      },
      {
        start: "mae lo mae",
        end: "li lo li",
      },
      {
        start: "pe lo pe",
        end: "true && false",
      },
      {
        start: "pe lo pe",
        end: "false || true",
      },
      {
        start: "pe lo pe",
        end: "( le ) && true",
      },
      {
        start: "( le ) && true",
        end: "( re || re ) && true",
      },
      {
        start: "( re || re ) && true",
        end: "( mue || mue ) && true",
      },
      {
        start: "( mue || mue ) && true",
        end: "( mae || mae ) && true",
      },
      {
        start: "( mae || mae ) && true",
        end: "( li || li ) && true",
      },
      {
        start: "( li || li ) && true",
        end: "( true || false ) && true",
      },
    ],
    why: "Joining two questions into one: && means both must hold, || means either one will do.",
  };
  return r;
}
