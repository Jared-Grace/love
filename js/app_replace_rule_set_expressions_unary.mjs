import { app_replace_rule_set_expressions_unary_rules } from "./app_replace_rule_set_expressions_unary_rules.mjs";
import { list_add } from "./list_add.mjs";
export function app_replace_rule_set_expressions_unary() {
  let rules = [];
  app_replace_rule_set_expressions_unary_rules(rules);
  list_add(rules, "ex > ue");
  let r = {
    name: "Expressions Unary",
    rules,
    goals: [
      {
        start: "ue",
        end: "uo li",
      },
      {
        start: "uo li",
        end: "- 2",
      },
      {
        start: "uo li",
        end: "! true",
      },
      {
        start: "uo li",
        end: "+ 3.14",
      },
      {
        start: "uo li",
        end: "typeof null",
      },
      {
        start: "ue",
        end: "- ( ex )",
      },
      {
        start: "- ( ex )",
        end: "- ( - li )",
      },
      {
        start: "- ( - li )",
        end: "- ( - 1 )",
      },
    ],
    why: "An operator that takes just one thing, written before it: ! flips true and false, and typeof asks what kind of value something is.",
  };
  return r;
}
