import { app_replace_rule_set_expressions_multiplicative_rules } from "./app_replace_rule_set_expressions_multiplicative_rules.mjs";
import { list_add } from "./list_add.mjs";
export function app_replace_rule_set_expressions_multiplicative() {
  let rules = [];
  app_replace_rule_set_expressions_multiplicative_rules(rules);
  list_add(rules, "ex > mue");
  let r = {
    name: "Expressions Multiplicative",
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
        end: "3.14 * 2",
      },
      {
        start: "nu mo mae",
        end: "nu mo ( ex )",
      },
      {
        start: "nu mo ( ex )",
        end: "nu mo ( mue mo ue )",
      },
      {
        start: "nu mo ( mue mo ue )",
        end: "nu mo ( pe mo ue )",
      },
      {
        start: "nu mo ( pe mo ue )",
        end: "nu mo ( nu mo pe )",
      },
      {
        start: "nu mo ( nu mo pe )",
        end: "nu mo ( nu mo nu )",
      },
      {
        start: "nu mo ( nu mo nu )",
        end: "3.14 / ( 2 * 2 )",
      },
    ],
    why: "Multiplying and dividing: the signs * and /. Two expressions with one of those signs between them.",
  };
  return r;
}
