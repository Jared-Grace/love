import { js_keyword_null } from "../../../love/public/src/js_keyword_null.mjs";
import { js_keyword_false } from "../../../love/public/src/js_keyword_false.mjs";
import { js_keyword_true } from "../../../love/public/src/js_keyword_true.mjs";
import { app_replace_rule_set_expressions_primary_abbreviations } from "../../../love/public/src/app_replace_rule_set_expressions_primary_abbreviations.mjs";
import { app_replace_rule_set_expressions_primary_rules } from "../../../love/public/src/app_replace_rule_set_expressions_primary_rules.mjs";
import { list_add } from "../../../love/public/src/list_add.mjs";
export function app_replace_rule_set_expressions_primary() {
  const rules = [];
  app_replace_rule_set_expressions_primary_rules(rules);
  list_add(rules, "ex > pe");
  let abbreviations = {};
  app_replace_rule_set_expressions_primary_abbreviations(abbreviations);
  let r = {
    name: "Expressions Primary",
    abbreviations,
    rules: rules,
    goals: [
      {
        start: "pe",
        end: "id",
      },
      {
        start: "pe",
        end: "x",
      },
      {
        start: "pe",
        end: js_keyword_true(),
      },
      {
        start: "pe",
        end: js_keyword_false(),
      },
      {
        start: "pe",
        end: "1",
      },
      {
        start: "pe",
        end: "3 . 1 4",
      },
      {
        start: "pe",
        end: '" l u v "',
      },
      {
        start: "pe",
        end: js_keyword_null(),
      },
      {
        start: "pe",
        end: "( ex )",
      },
      {
        start: "pe",
        end: "( pe )",
      },
      {
        start: "pe",
        end: "( id )",
      },
      {
        start: "pe",
        end: "( y )",
      },
      {
        start: "pe",
        end: "( ( ex ) )",
      },
    ],
    why: "The replacement rules define a grammar for primary expressions in a programming language, allowing identifiers, literals (numbers, strings, booleans, null), and parenthesized expressions, demonstrating how basic building blocks of expressions are structured and parsed.",
    rules_used: [
      [
        {
          left: ["nu"],
          right: ["in"],
        },
        {
          left: ["st"],
          right: ['"', "l", "u", "v", '"'],
        },
        {
          left: ["pe"],
          right: ["id"],
        },
      ],
      [
        {
          left: ["nu"],
          right: ["de"],
        },
        {
          left: ["pe"],
          right: ["id"],
        },
        {
          left: ["id"],
          right: ["x"],
        },
      ],
      [
        {
          left: ["pe"],
          right: ["li"],
        },
        {
          left: ["bo"],
          right: ["true"],
        },
        {
          left: ["li"],
          right: ["bo"],
        },
      ],
      [
        {
          left: ["li"],
          right: ["bo"],
        },
        {
          left: ["pe"],
          right: ["li"],
        },
        {
          left: ["bo"],
          right: ["false"],
        },
      ],
      [
        {
          left: ["nu"],
          right: ["in"],
        },
        {
          left: ["li"],
          right: ["nu"],
        },
        {
          left: ["in"],
          right: ["1"],
        },
        {
          left: ["pe"],
          right: ["li"],
        },
      ],
      [
        {
          left: ["li"],
          right: ["nu"],
        },
        {
          left: ["pe"],
          right: ["li"],
        },
        {
          left: ["nu"],
          right: ["de"],
        },
        {
          left: ["de"],
          right: ["3", ".", "1", "4"],
        },
      ],
      [
        {
          left: ["st"],
          right: ['"', "l", "u", "v", '"'],
        },
        {
          left: ["pe"],
          right: ["li"],
        },
        {
          left: ["li"],
          right: ["st"],
        },
      ],
      [
        {
          left: ["pe"],
          right: ["li"],
        },
        {
          left: ["li"],
          right: ["bo"],
        },
        {
          left: ["li"],
          right: ["null"],
        },
      ],
      [
        {
          left: ["pe"],
          right: ["(", "ex", ")"],
        },
        {
          left: ["li"],
          right: ["null"],
        },
        {
          left: ["bo"],
          right: ["false"],
        },
      ],
      [
        {
          left: ["pe"],
          right: ["(", "ex", ")"],
        },
        {
          left: ["nu"],
          right: ["in"],
        },
        {
          left: ["ex"],
          right: ["pe"],
        },
      ],
      [
        {
          left: ["ex"],
          right: ["pe"],
        },
        {
          left: ["pe"],
          right: ["(", "ex", ")"],
        },
        {
          left: ["pe"],
          right: ["id"],
        },
      ],
      [
        {
          left: ["pe"],
          right: ["id"],
        },
        {
          left: ["id"],
          right: ["y"],
        },
        {
          left: ["pe"],
          right: ["(", "ex", ")"],
        },
        {
          left: ["ex"],
          right: ["pe"],
        },
      ],
      [
        {
          left: ["ex"],
          right: ["pe"],
        },
        {
          left: ["pe"],
          right: ["(", "ex", ")"],
        },
        {
          left: ["pe"],
          right: ["li"],
        },
      ],
    ],
  };
  return r;
}
