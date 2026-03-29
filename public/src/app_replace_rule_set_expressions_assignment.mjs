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
          left: ["lh"],
          right: ["id"],
          original: "lh > id",
        },
        {
          left: ["ase"],
          right: ["lh", "=", "ase"],
          original: "ase > lh = ase",
        },
        {
          left: ["id"],
          right: ["x"],
          original: "id > x",
        },
        {
          left: ["le"],
          right: ["ee"],
          original: "le > ee",
        },
        {
          left: ["ase"],
          right: ["le"],
          original: "ase > le",
        },
        {
          left: ["re"],
          right: ["ade"],
          original: "re > ade",
        },
        {
          left: ["ee"],
          right: ["re"],
          original: "ee > re",
        },
      ],
      [
        {
          left: ["mue"],
          right: ["ue"],
          original: "mue > ue",
        },
        {
          left: ["id"],
          right: ["x"],
          original: "id > x",
        },
        {
          left: ["ade"],
          right: ["mue"],
          original: "ade > mue",
        },
      ],
      [
        {
          left: ["ue"],
          right: ["ce"],
          original: "ue > ce",
        },
        {
          left: ["pe"],
          right: ["li"],
          original: "pe > li",
        },
        {
          left: ["ce"],
          right: ["mae"],
          original: "ce > mae",
        },
        {
          left: ["mae"],
          right: ["pe"],
          original: "mae > pe",
        },
      ],
      [
        {
          left: ["in"],
          right: ["1"],
          original: "in > 1",
        },
        {
          left: ["li"],
          right: ["nu"],
          original: "li > nu",
        },
        {
          left: ["nu"],
          right: ["in"],
          original: "nu > in",
        },
      ],
      [
        {
          left: ["ee"],
          right: ["re"],
          original: "ee > re",
        },
        {
          left: ["ase"],
          right: ["lh", "=", "ase"],
          original: "ase > lh = ase",
        },
        {
          left: ["lh"],
          right: ["mle"],
          original: "lh > mle",
        },
        {
          left: ["le"],
          right: ["ee"],
          original: "le > ee",
        },
        {
          left: ["re"],
          right: ["ade"],
          original: "re > ade",
        },
        {
          left: ["ase"],
          right: ["le"],
          original: "ase > le",
        },
      ],
      [
        {
          left: ["id"],
          right: ["y"],
          original: "id > y",
        },
        {
          left: ["pe"],
          right: ["id"],
          original: "pe > id",
        },
        {
          left: ["mle"],
          right: ["mae", ".", "id"],
          original: "mle > mae . id",
        },
        {
          left: ["id"],
          right: ["x"],
          original: "id > x",
        },
        {
          left: ["mae"],
          right: ["pe"],
          original: "mae > pe",
        },
      ],
      [
        {
          left: ["id"],
          right: ["x"],
          original: "id > x",
        },
        {
          left: ["mue"],
          right: ["ue"],
          original: "mue > ue",
        },
        {
          left: ["ade"],
          right: ["mue"],
          original: "ade > mue",
        },
      ],
      [
        {
          left: ["pe"],
          right: ["li"],
          original: "pe > li",
        },
        {
          left: ["mae"],
          right: ["pe"],
          original: "mae > pe",
        },
        {
          left: ["ce"],
          right: ["mae"],
          original: "ce > mae",
        },
        {
          left: ["ue"],
          right: ["ce"],
          original: "ue > ce",
        },
      ],
      [
        {
          left: ["nu"],
          right: ["in"],
          original: "nu > in",
        },
        {
          left: ["li"],
          right: ["nu"],
          original: "li > nu",
        },
        {
          left: ["in"],
          right: ["2"],
          original: "in > 2",
        },
      ],
      [
        {
          left: ["le"],
          right: ["ee"],
          original: "le > ee",
        },
        {
          left: ["ex"],
          right: ["ase"],
          original: "ex > ase",
        },
        {
          left: ["ase"],
          right: ["le"],
          original: "ase > le",
        },
        {
          left: ["mle"],
          right: ["mae", "[", "ex", "]"],
          original: "mle > mae [ ex ]",
        },
      ],
      [
        {
          left: ["ade"],
          right: ["mue"],
          original: "ade > mue",
        },
        {
          left: ["ee"],
          right: ["re"],
          original: "ee > re",
        },
        {
          left: ["re"],
          right: ["ade"],
          original: "re > ade",
        },
      ],
      [
        {
          left: ["ag"],
          right: ["ex", ",", "ag"],
          original: "ag > ex , ag",
        },
        {
          left: ["le"],
          right: ["ee"],
          original: "le > ee",
        },
        {
          left: ["ade"],
          right: ["mue"],
          original: "ade > mue",
        },
      ],
      [
        {
          left: ["ue"],
          right: ["ce"],
          original: "ue > ce",
        },
        {
          left: ["mue"],
          right: ["ue"],
          original: "mue > ue",
        },
        {
          left: ["ce"],
          right: ["mae"],
          original: "ce > mae",
        },
      ],
      [
        {
          left: ["ue"],
          right: ["ce"],
          original: "ue > ce",
        },
        {
          left: ["ce"],
          right: ["mae"],
          original: "ce > mae",
        },
        {
          left: ["mue"],
          right: ["ue"],
          original: "mue > ue",
        },
      ],
      [
        {
          left: ["ao"],
          right: ["+"],
          original: "ao > +",
        },
        {
          left: ["mae"],
          right: ["pe"],
          original: "mae > pe",
        },
        {
          left: ["uo"],
          right: ["typeof"],
          original: "uo > typeof",
        },
      ],
      [
        {
          left: ["li"],
          right: ["nu"],
          original: "li > nu",
        },
        {
          left: ["pe"],
          right: ["li"],
          original: "pe > li",
        },
        {
          left: ["pe"],
          right: ["id"],
          original: "pe > id",
        },
      ],
      [
        {
          left: ["nu"],
          right: ["in"],
          original: "nu > in",
        },
        {
          left: ["id"],
          right: ["y"],
          original: "id > y",
        },
        {
          left: ["id"],
          right: ["z"],
          original: "id > z",
        },
        {
          left: ["in"],
          right: ["0"],
          original: "in > 0",
        },
      ],
      [
        {
          left: ["mle"],
          right: ["mae", ".", "id"],
          original: "mle > mae . id",
        },
        {
          left: ["lh"],
          right: ["id"],
          original: "lh > id",
        },
        {
          left: ["ase"],
          right: ["lh", "=", "ase"],
          original: "ase > lh = ase",
        },
      ],
      [
        {
          left: ["ro"],
          right: ["<"],
          original: "ro > <",
        },
        {
          left: ["id"],
          right: ["y"],
          original: "id > y",
        },
        {
          left: ["id"],
          right: ["x"],
          original: "id > x",
        },
      ],
      [
        {
          left: ["ee"],
          right: ["re"],
          original: "ee > re",
        },
        {
          left: ["ase"],
          right: ["le"],
          original: "ase > le",
        },
        {
          left: ["le"],
          right: ["ee"],
          original: "le > ee",
        },
        {
          left: ["re"],
          right: ["ade"],
          original: "re > ade",
        },
      ],
      [
        {
          left: ["mue"],
          right: ["ue"],
          original: "mue > ue",
        },
        {
          left: ["ade"],
          right: ["mue"],
          original: "ade > mue",
        },
        {
          left: ["ex"],
          right: ["ase"],
          original: "ex > ase",
        },
      ],
      [
        {
          left: ["li"],
          right: ["nu"],
          original: "li > nu",
        },
        {
          left: ["pe"],
          right: ["li"],
          original: "pe > li",
        },
        {
          left: ["ce"],
          right: ["mae"],
          original: "ce > mae",
        },
        {
          left: ["ue"],
          right: ["ce"],
          original: "ue > ce",
        },
        {
          left: ["mae"],
          right: ["pe"],
          original: "mae > pe",
        },
        {
          left: ["nu"],
          right: ["in"],
          original: "nu > in",
        },
        {
          left: ["in"],
          right: ["0"],
          original: "in > 0",
        },
      ],
    ],
  };
  return r;
}
