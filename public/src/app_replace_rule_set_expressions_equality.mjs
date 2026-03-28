import { app_replace_rule_set_expressions_equality_abbreviations } from "../../../love/public/src/app_replace_rule_set_expressions_equality_abbreviations.mjs";
import { app_replace_rule_set_expressions_equality_rules } from "../../../love/public/src/app_replace_rule_set_expressions_equality_rules.mjs";
import { list_add } from "../../../love/public/src/list_add.mjs";
export function app_replace_rule_set_expressions_equality() {
  const rules = [];
  app_replace_rule_set_expressions_equality_rules(rules);
  list_add(rules, "ex > ee");
  let abbreviations = {};
  app_replace_rule_set_expressions_equality_abbreviations(abbreviations);
  let r = {
    name: "Expressions Equality",
    abbreviations,
    rules,
    goals: [
      {
        start: "ee",
        end: "mue === mue",
      },
      {
        start: "mue === mue",
        end: "mae === mae",
      },
      {
        start: "mae === mae",
        end: "pe === pe",
      },
      {
        start: "mae === mae",
        end: "nu === nu",
      },
      {
        start: "nu === nu",
        end: "1 === 1",
      },
      {
        start: "pe === pe",
        end: "( ade ao mue ) === pe",
      },
      {
        start: "( ade ao mue ) === pe",
        end: "( ue ao ue ) === pe",
      },
      {
        start: "( ue ao ue ) === pe",
        end: "( mae ao mae ) === pe",
      },
      {
        start: "( mae ao mae ) === pe",
        end: "( pe ao pe ) === pe",
      },
      {
        start: "( pe ao pe ) === pe",
        end: "( nu ao nu ) === nu",
      },
      {
        start: "( nu ao nu ) === nu",
        end: "( 1 + 1 ) === 2",
      },
      {
        start: "( nu ao nu ) === nu",
        end: "( 2 - 1 ) === 1",
      },
    ],
    why: "The replacement rules define a grammar for parsing and evaluating equality expressions involving arithmetic, literals, identifiers, member access, function calls, and various operators, demonstrating how complex expressions can be reduced to equality comparisons, as shown by the stepwise transformation of expressions like (1+1)===2.",
  };
  return r;
}
