import { app_replace_rule_set_expressions_multiplicative_abbreviations } from "../../../love/public/src/app_replace_rule_set_expressions_multiplicative_abbreviations.mjs";
import { app_replace_rule_set_expressions_multiplicative_rules } from "../../../love/public/src/app_replace_rule_set_expressions_multiplicative_rules.mjs";
import { list_add } from "../../../love/public/src/list_add.mjs";
export function app_replace_rule_set_expressions_multiplicative() {
  const rules = [];
  app_replace_rule_set_expressions_multiplicative_rules(rules);
  list_add(rules, "ex > mue");
  let abbreviations = {};
  app_replace_rule_set_expressions_multiplicative_abbreviations(abbreviations);
  let r = {
    name: "Expressions Multiplicative",
    rules,abbreviations,
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
        end: "3 . 1 4 / ( 2 * 2 )",
      },
    ],
    why: "These replacement rules define a context-free grammar for parsing multiplicative expressions (like those in programming languages), supporting identifiers, numbers, strings, booleans, null, member access, function calls, unary operators, and specifically the precedence and associativity of multiplication and division.",
  };
  return r;
}
