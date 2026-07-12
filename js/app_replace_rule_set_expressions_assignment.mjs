import { object_merge_set } from "./object_merge_set.mjs";
import { list_add } from "./list_add.mjs";
import { app_replace_rule_set_logical_expressions_abbreviations } from "./app_replace_rule_set_logical_expressions_abbreviations.mjs";
import { app_replace_rule_set_logical_expressions_rules } from "./app_replace_rule_set_logical_expressions_rules.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
export function app_replace_rule_set_expressions_assignment() {
  let rules = [];
  app_replace_rule_set_logical_expressions_rules(rules);
  list_add_multiple(rules, [
    "ase > lh = ase",
    "ase > le",
    "lh > mle",
    "lh > id",
    "id > z",
  ]);
  list_add(rules, "ex > ase");
  let abbreviations = {};
  app_replace_rule_set_logical_expressions_abbreviations(abbreviations);
  object_merge_set(abbreviations, {
    ase: ["", "as", "signment ", "e", "xpression"],
  });
  let r = {
    name: "Expressions Assignment",
    rules,
    abbreviations,
    goals: [
      {
        start: "ase",
        end: "x = ade",
      },
      {
        start: "id = ade",
        end: "x = ue",
      },
      {
        start: "x = ue",
        end: "x = li",
      },
      {
        start: "x = li",
        end: "x = 1",
      },
      {
        start: "ase",
        end: "mle = ade",
      },
      {
        start: "mle = ade",
        end: "y . x = ade",
      },
      {
        start: "y . x = ade",
        end: "y . x = ue",
      },
      {
        start: "y . x = ue",
        end: "y . x = li",
      },
      {
        start: "y . x = li",
        end: "y . x = 2",
      },
      {
        start: "mle = ade",
        end: "mae [ ee ] = ade",
      },
      {
        start: "mae [ ee ] = ade",
        end: "mae [ mue ] = ade",
      },
      {
        start: "mae [ mue ] = ade",
        end: "mae [ mue ] = mue",
      },
      {
        start: "mae [ mue ] = mue",
        end: "mae [ mae ] = mue",
      },
      {
        start: "mae [ mae ] = mue",
        end: "mae [ mae ] = mae",
      },
      {
        start: "mae [ mae ] = mae",
        end: "pe [ pe ] = pe",
      },
      {
        start: "pe [ pe ] = pe",
        end: "id [ id ] = nu",
      },
      {
        start: "id [ id ] = nu",
        end: "z [ y ] = 0",
      },
      {
        start: "ase",
        end: "id = id = ase",
      },
      {
        start: "id = id = ase",
        end: "x = y = ase",
      },
      {
        start: "x = y = ase",
        end: "x = y = ade",
      },
      {
        start: "x = y = ade",
        end: "x = y = ue",
      },
      {
        start: "x = y = ue",
        end: "x = y = 0",
      },
    ],
    why: "These replacement rules define a context-free grammar for assignment and expression syntax similar to JavaScript, demonstrating how identifiers, literals, member access, function calls, unary/binary operations, and assignment expressions are constructed and parsed.",
  };
  return r;
}
