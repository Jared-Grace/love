import { object_merge } from "../../../love/public/src/object_merge.mjs";
import { app_replace_rule_set_expressions_multiplicative_abbreviations } from "../../../love/public/src/app_replace_rule_set_expressions_multiplicative_abbreviations.mjs";
import { list_add } from "../../../love/public/src/list_add.mjs";
import { app_replace_rule_set_expressions_multiplicative_rules } from "../../../love/public/src/app_replace_rule_set_expressions_multiplicative_rules.mjs";
import { list_add_multiple } from "../../../love/public/src/list_add_multiple.mjs";
export function app_new_rule_set_new_2() {
  const rules = [];
  app_replace_rule_set_expressions_multiplicative_rules(rules);
  list_add_multiple(rules, ["ae > mue", "ae > ae mo mue", "ao > +", "ao > -"]);
  list_add(rules, "ex > ae");
  let abbreviations = {};
  app_replace_rule_set_expressions_multiplicative_abbreviations(abbreviations);
  object_merge(abbreviations, {
    ae: ["", "a", "dditive ", "e", "xpression"],
    ao: ["", "a", "dditive ", "o", "perator"],
  });
  let r = {
    name: "Expresions additive",
    rules: rules,
    goals: [
      {
        start: "ae",
        end: "ce mo ce",
      },
      {
        start: "ce mo ce",
        end: "nu mo mae",
      },
      {
        start: "nu mo ce",
        end: "nu mo nu",
      },
      {
        start: "nu ao nu",
        end: "1 - 2",
      },
      {
        start: "nu ao nu",
        end: "3 . 1 4 + 2",
      },
      {
        start: "nu ao ce",
        end: "nu ao ( ex )",
      },
      {
        start: "nu ao ( ex )",
        end: "nu ao ( ae ao ue )",
      },
      {
        start: "nu ao ( ae ao ue )",
        end: "nu ao ( pe ao ue )",
      },
      {
        start: "nu ao ( pe ao ue )",
        end: "nu ao ( nu ao pe )",
      },
      {
        start: "nu ao ( nu ao pe )",
        end: "nu ao ( nu ao nu )",
      },
      {
        start: "nu ao ( nu ao nu )",
        end: "3 . 1 4 - ( 2 + 2 )",
      },
    ],
  };
  return r;
}
