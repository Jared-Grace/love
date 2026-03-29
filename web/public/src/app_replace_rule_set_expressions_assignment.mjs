import { object_merge } from "../../../love/public/src/object_merge.mjs";
import { list_add } from "../../../love/public/src/list_add.mjs";
import { app_replace_rule_set_logical_expressions_abbreviations } from "../../../love/public/src/app_replace_rule_set_logical_expressions_abbreviations.mjs";
import { app_replace_rule_set_logical_expressions_rules } from "../../../love/public/src/app_replace_rule_set_logical_expressions_rules.mjs";
import { list_add_multiple } from "../../../love/public/src/list_add_multiple.mjs";
export function app_replace_rule_set_expressions_assignment() {
  const rules = [];
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
  object_merge(abbreviations, {
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
    why: "These replacement rules define a context-free grammar for parsing assignment and expression statements similar to those in JavaScript, demonstrating how identifiers, literals, member access, function calls, unary, binary, and assignment expressions are constructed and combined, reflecting the syntactic structure and operator precedence of typical programming languages.",
    rules_used: [
      [
        {
          left: ["le"],
          right: ["ee"],
        },
        {
          left: ["id"],
          right: ["x"],
        },
        {
          left: ["ee"],
          right: ["re"],
        },
        {
          left: ["ase"],
          right: ["lh", "=", "ase"],
        },
        {
          left: ["lh"],
          right: ["id"],
        },
        {
          left: ["ase"],
          right: ["le"],
        },
        {
          left: ["re"],
          right: ["ade"],
        },
      ],
      [
        {
          left: ["id"],
          right: ["x"],
        },
        {
          left: ["ade"],
          right: ["mue"],
        },
        {
          left: ["mue"],
          right: ["ue"],
        },
      ],
      [
        {
          left: ["ue"],
          right: ["ce"],
        },
        {
          left: ["mae"],
          right: ["pe"],
        },
        {
          left: ["pe"],
          right: ["li"],
        },
        {
          left: ["ce"],
          right: ["mae"],
        },
      ],
      [
        {
          left: ["in"],
          right: ["1"],
        },
        {
          left: ["li"],
          right: ["nu"],
        },
        {
          left: ["nu"],
          right: ["in"],
        },
      ],
      [
        {
          left: ["re"],
          right: ["ade"],
        },
        {
          left: ["le"],
          right: ["ee"],
        },
        {
          left: ["ase"],
          right: ["le"],
        },
        {
          left: ["ee"],
          right: ["re"],
        },
        {
          left: ["lh"],
          right: ["mle"],
        },
        {
          left: ["ase"],
          right: ["lh", "=", "ase"],
        },
      ],
      [
        {
          left: ["id"],
          right: ["x"],
        },
        {
          left: ["mae"],
          right: ["pe"],
        },
        {
          left: ["mle"],
          right: ["mae", ".", "id"],
        },
        {
          left: ["pe"],
          right: ["id"],
        },
        {
          left: ["id"],
          right: ["y"],
        },
      ],
      [
        {
          left: ["mue"],
          right: ["ue"],
        },
        {
          left: ["ag"],
          right: ["ex", ",", "ag"],
        },
        {
          left: ["ade"],
          right: ["mue"],
        },
      ],
      [
        {
          left: ["mae"],
          right: ["pe"],
        },
        {
          left: ["pe"],
          right: ["li"],
        },
        {
          left: ["ce"],
          right: ["mae"],
        },
        {
          left: ["ue"],
          right: ["ce"],
        },
      ],
      [
        {
          left: ["li"],
          right: ["nu"],
        },
        {
          left: ["in"],
          right: ["2"],
        },
        {
          left: ["nu"],
          right: ["in"],
        },
      ],
      [
        {
          left: ["ase"],
          right: ["le"],
        },
        {
          left: ["ex"],
          right: ["ase"],
        },
        {
          left: ["le"],
          right: ["ee"],
        },
        {
          left: ["mle"],
          right: ["mae", "[", "ex", "]"],
        },
      ],
      [
        {
          left: ["ee"],
          right: ["re"],
        },
        {
          left: ["re"],
          right: ["ade"],
        },
        {
          left: ["ade"],
          right: ["mue"],
        },
      ],
      [
        {
          left: ["ro"],
          right: [">"],
        },
        {
          left: ["ade"],
          right: ["mue"],
        },
        {
          left: ["id"],
          right: ["x"],
        },
      ],
      [
        {
          left: ["ue"],
          right: ["ce"],
        },
        {
          left: ["mue"],
          right: ["ue"],
        },
        {
          left: ["ce"],
          right: ["mae"],
        },
      ],
      [
        {
          left: ["ue"],
          right: ["ce"],
        },
        {
          left: ["ce"],
          right: ["mae"],
        },
        {
          left: ["mue"],
          right: ["ue"],
        },
      ],
      [
        {
          left: ["mae"],
          right: ["pe"],
        },
        {
          left: ["id"],
          right: ["r", "e", "f", "r", "e", "s", "h"],
        },
        {
          left: ["id"],
          right: ["d", "o", "u", "b", "l", "e"],
        },
      ],
      [
        {
          left: ["pe"],
          right: ["li"],
        },
        {
          left: ["pe"],
          right: ["id"],
        },
        {
          left: ["li"],
          right: ["nu"],
        },
      ],
      [
        {
          left: ["id"],
          right: ["y"],
        },
        {
          left: ["id"],
          right: ["z"],
        },
        {
          left: ["in"],
          right: ["0"],
        },
        {
          left: ["nu"],
          right: ["in"],
        },
      ],
      [
        {
          left: ["ade"],
          right: ["ade", "ao", "mue"],
        },
        {
          left: ["ase"],
          right: ["lh", "=", "ase"],
        },
        {
          left: ["lh"],
          right: ["id"],
        },
      ],
      [
        {
          left: ["id"],
          right: ["y"],
        },
        {
          left: ["id"],
          right: ["x"],
        },
        {
          left: ["id"],
          right: ["l", "o", "v", "e"],
        },
      ],
      [
        {
          left: ["ee"],
          right: ["re"],
        },
        {
          left: ["re"],
          right: ["ade"],
        },
        {
          left: ["ase"],
          right: ["le"],
        },
        {
          left: ["le"],
          right: ["ee"],
        },
      ],
      [
        {
          left: ["ade"],
          right: ["mue"],
        },
        {
          left: ["mue"],
          right: ["ue"],
        },
        {
          left: ["lo"],
          right: ["||"],
        },
      ],
      [
        {
          left: ["in"],
          right: ["0"],
        },
        {
          left: ["ce"],
          right: ["mae"],
        },
        {
          left: ["li"],
          right: ["nu"],
        },
        {
          left: ["mae"],
          right: ["pe"],
        },
        {
          left: ["nu"],
          right: ["in"],
        },
        {
          left: ["pe"],
          right: ["li"],
        },
        {
          left: ["ue"],
          right: ["ce"],
        },
      ],
    ],
  };
  return r;
}
