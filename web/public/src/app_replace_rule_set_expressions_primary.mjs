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
          left: ["li"],
          right: ["bo"],
          original: "li > bo",
        },
        {
          left: ["bo"],
          right: ["true"],
          original: "bo > true",
        },
        {
          left: ["pe"],
          right: ["id"],
          original: "pe > id",
        },
      ],
      [
        {
          left: ["id"],
          right: ["x"],
          original: "id > x",
        },
        {
          left: ["pe"],
          right: ["(", "ex", ")"],
          original: "pe > ( ex )",
        },
        {
          left: ["pe"],
          right: ["id"],
          original: "pe > id",
        },
      ],
      [
        {
          left: ["pe"],
          right: ["li"],
          original: "pe > li",
        },
        {
          left: ["li"],
          right: ["bo"],
          original: "li > bo",
        },
        {
          left: ["bo"],
          right: ["true"],
          original: "bo > true",
        },
      ],
      [
        {
          left: ["li"],
          right: ["bo"],
          original: "li > bo",
        },
        {
          left: ["bo"],
          right: ["false"],
          original: "bo > false",
        },
        {
          left: ["pe"],
          right: ["li"],
          original: "pe > li",
        },
      ],
      [
        {
          left: ["pe"],
          right: ["li"],
          original: "pe > li",
        },
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
          right: ["1"],
          original: "in > 1",
        },
      ],
      [
        {
          left: ["de"],
          right: ["3", ".", "1", "4"],
          original: "de > 3 . 1 4",
        },
        {
          left: ["nu"],
          right: ["de"],
          original: "nu > de",
        },
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
      ],
      [
        {
          left: ["pe"],
          right: ["li"],
          original: "pe > li",
        },
        {
          left: ["li"],
          right: ["st"],
          original: "li > st",
        },
        {
          left: ["st"],
          right: ['"', "l", "u", "v", '"'],
          original: 'st > " l u v "',
        },
      ],
      [
        {
          left: ["ex"],
          right: ["pe"],
          original: "ex > pe",
        },
        {
          left: ["pe"],
          right: ["li"],
          original: "pe > li",
        },
        {
          left: ["li"],
          right: ["null"],
          original: "li > null",
        },
      ],
      [
        {
          left: ["in"],
          right: ["1"],
          original: "in > 1",
        },
        {
          left: ["in"],
          right: ["2"],
          original: "in > 2",
        },
        {
          left: ["pe"],
          right: ["(", "ex", ")"],
          original: "pe > ( ex )",
        },
      ],
      [
        {
          left: ["ex"],
          right: ["pe"],
          original: "ex > pe",
        },
        {
          left: ["pe"],
          right: ["(", "ex", ")"],
          original: "pe > ( ex )",
        },
        {
          left: ["li"],
          right: ["nu"],
          original: "li > nu",
        },
      ],
      [
        {
          left: ["pe"],
          right: ["(", "ex", ")"],
          original: "pe > ( ex )",
        },
        {
          left: ["ex"],
          right: ["pe"],
          original: "ex > pe",
        },
        {
          left: ["pe"],
          right: ["id"],
          original: "pe > id",
        },
      ],
      [
        {
          left: ["pe"],
          right: ["(", "ex", ")"],
          original: "pe > ( ex )",
        },
        {
          left: ["pe"],
          right: ["id"],
          original: "pe > id",
        },
        {
          left: ["ex"],
          right: ["pe"],
          original: "ex > pe",
        },
        {
          left: ["id"],
          right: ["y"],
          original: "id > y",
        },
      ],
      [
        {
          left: ["li"],
          right: ["bo"],
          original: "li > bo",
        },
        {
          left: ["ex"],
          right: ["pe"],
          original: "ex > pe",
        },
        {
          left: ["pe"],
          right: ["(", "ex", ")"],
          original: "pe > ( ex )",
        },
      ],
    ],
  };
  return r;
}
