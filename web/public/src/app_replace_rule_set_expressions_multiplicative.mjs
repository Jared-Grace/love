import { list_add_multiple } from "../../../love/public/src/list_add_multiple.mjs";
import { object_merge } from "../../../love/public/src/object_merge.mjs";
import { app_replace_rule_set_expressions_unary_abbreviations } from "../../../love/public/src/app_replace_rule_set_expressions_unary_abbreviations.mjs";
import { list_add } from "../../../love/public/src/list_add.mjs";
import { app_replace_rule_set_expressions_unary_rules } from "../../../love/public/src/app_replace_rule_set_expressions_unary_rules.mjs";
export function app_replace_rule_set_expressions_multiplicative() {
  const rules = [];
  app_replace_rule_set_expressions_unary_rules(rules);
  list_add_multiple(rules, ["mue > ue", "mue > mue mo ue", "mo > *", "mo > /"]);
  list_add(rules, "ex > mue");
  let abbreviations = {};
  app_replace_rule_set_expressions_unary_abbreviations(abbreviations);
  object_merge(abbreviations, {
    mue: ["", "mu", "ltiplicative ", "e", "xpression"],
    mo: ["", "m", "ultiplicative ", "o", "perator"],
  });
  let r = {
    name: "Expressions multiplicative",
    rules,
    goals: [
      {
        start: "mue",
        end: "mae mo mae",
      },
      {
        start: "mae mo mae",
        end: "nu mo mae",
      },
      {
        start: "nu mo mae",
        end: "nu mo nu",
      },
      {
        start: "nu mo nu",
        end: "1 / 2",
      },
      {
        start: "nu mo nu",
        end: "3 . 1 4 * 2",
      },
      {
        start: "nu mo mae",
        end: "nu mo ( ex )",
      },
      {
        start: "nu mo mae",
        end: "nu mo ( ex )",
      },
    ],
  };
  return r;
}
