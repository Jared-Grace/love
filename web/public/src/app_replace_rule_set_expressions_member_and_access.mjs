import { list_add_multiple } from "../../../love/public/src/list_add_multiple.mjs";
import { app_replace_rule_set_expressions_member_and_access_abbreviations } from "../../../love/public/src/app_replace_rule_set_expressions_member_and_access_abbreviations.mjs";
import { app_replace_rule_set_expressions_member_and_access_rules } from "../../../love/public/src/app_replace_rule_set_expressions_member_and_access_rules.mjs";
import { list_add } from "../../../love/public/src/list_add.mjs";
export function app_replace_rule_set_expressions_member_and_access() {
  const rules = [];
  app_replace_rule_set_expressions_member_and_access_rules(rules);
  list_add_multiple(rules, [
    "id > p r o p",
    "id > h u m a n",
    "id > n a m e",
    "id > l a s t",
    "id > b i r t h d a t e",
    "id > y e a r",
  ]);
  let abbreviations = {};
  app_replace_rule_set_expressions_member_and_access_abbreviations(
    abbreviations,
  );
  list_add(rules, "ex > mae");
  let r = {
    name: "Expressions Member And Access",
    rules: rules,
    abbreviations,
    goals: [
      {
        start: "mae",
        end: "in",
      },
      {
        start: "mae",
        end: "x . y",
      },
      {
        start: "mae",
        end: "( ex ) . p r o p",
      },
      {
        start: "( ex ) . id",
        end: "( id . id ) . id",
      },
      {
        start: "( id . id ) . id",
        end: "( h u m a n . n a m e ) . l a s t",
      },
      {
        start: "mae . id",
        end: "id . id . id",
      },
      {
        start: "id . id . id",
        end: "h u m a n . b i r t h d a t e . y e a r",
      },
      {
        start: "mae",
        end: "id [ pe ]",
      },
      {
        start: "id [ pe ]",
        end: 'id [ " l u v " ]',
      },
      {
        start: "mae",
        end: "mae [ pe ]",
      },
      {
        start: "mae [ pe ]",
        end: "mae [ 1 ]",
      },
      {
        start: "mae [ 1 ]",
        end: "mae [ pe ] [ 1 ]",
      },
      {
        start: "mae [ pe ] [ 1 ]",
        end: "mae [ 2 ] [ 1 ]",
      },
    ],
    why: "The replacement rules define a grammar for parsing member access and property access expressions (like obj.prop, obj['key'], or nested forms) in a programming language, demonstrating how identifiers, literals, and expressions can be composed to form complex member access chains.",
    rules_used: [
      [
        {
          left: ["li"],
          right: ["nu"],
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
          left: ["nu"],
          right: ["in"],
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
          left: ["id"],
          right: ["x"],
        },
        {
          left: ["mae"],
          right: ["mle"],
        },
        {
          left: ["mle"],
          right: ["mae", ".", "id"],
        },
        {
          left: ["mae"],
          right: ["pe"],
        },
      ],
      [
        {
          left: ["pe"],
          right: ["(", "ex", ")"],
        },
        {
          left: ["mle"],
          right: ["mae", ".", "id"],
        },
        {
          left: ["id"],
          right: ["p", "r", "o", "p"],
        },
        {
          left: ["mae"],
          right: ["pe"],
        },
        {
          left: ["mae"],
          right: ["mle"],
        },
      ],
      [
        {
          left: ["pe"],
          right: ["id"],
        },
        {
          left: ["mle"],
          right: ["mae", ".", "id"],
        },
        {
          left: ["ex"],
          right: ["mae"],
        },
        {
          left: ["mae"],
          right: ["pe"],
        },
        {
          left: ["mae"],
          right: ["mle"],
        },
      ],
      [
        {
          left: ["id"],
          right: ["l", "a", "s", "t"],
        },
        {
          left: ["id"],
          right: ["n", "a", "m", "e"],
        },
        {
          left: ["id"],
          right: ["h", "u", "m", "a", "n"],
        },
      ],
      [
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
          left: ["mae"],
          right: ["mle"],
        },
      ],
      [
        {
          left: ["id"],
          right: ["y", "e", "a", "r"],
        },
        {
          left: ["id"],
          right: ["h", "u", "m", "a", "n"],
        },
        {
          left: ["id"],
          right: ["b", "i", "r", "t", "h", "d", "a", "t", "e"],
        },
      ],
      [
        {
          left: ["mae"],
          right: ["mle"],
        },
        {
          left: ["mle"],
          right: ["mae", "[", "ex", "]"],
        },
        {
          left: ["ex"],
          right: ["mae"],
        },
        {
          left: ["mae"],
          right: ["pe"],
        },
        {
          left: ["pe"],
          right: ["id"],
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
          left: ["ex"],
          right: ["mae"],
        },
        {
          left: ["mae"],
          right: ["mle"],
        },
        {
          left: ["mae"],
          right: ["pe"],
        },
        {
          left: ["mle"],
          right: ["mae", "[", "ex", "]"],
        },
      ],
      [
        {
          left: ["in"],
          right: ["1"],
        },
        {
          left: ["nu"],
          right: ["in"],
        },
        {
          left: ["li"],
          right: ["nu"],
        },
        {
          left: ["pe"],
          right: ["li"],
        },
      ],
      [
        {
          left: ["mle"],
          right: ["mae", "[", "ex", "]"],
        },
        {
          left: ["mae"],
          right: ["pe"],
        },
        {
          left: ["ex"],
          right: ["mae"],
        },
        {
          left: ["mae"],
          right: ["mle"],
        },
      ],
      [
        {
          left: ["pe"],
          right: ["li"],
        },
        {
          left: ["in"],
          right: ["2"],
        },
        {
          left: ["nu"],
          right: ["in"],
        },
        {
          left: ["li"],
          right: ["nu"],
        },
      ],
    ],
  };
  return r;
}
