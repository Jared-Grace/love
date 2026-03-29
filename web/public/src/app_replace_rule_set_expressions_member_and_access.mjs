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
          original: "li > nu",
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
          left: ["pe"],
          right: ["li"],
          original: "pe > li",
        },
      ],
      [
        {
          left: ["mae"],
          right: ["mle"],
          original: "mae > mle",
        },
        {
          left: ["mle"],
          right: ["mae", ".", "id"],
          original: "mle > mae . id",
        },
        {
          left: ["id"],
          right: ["y"],
          original: "id > y",
        },
        {
          left: ["mae"],
          right: ["pe"],
          original: "mae > pe",
        },
        {
          left: ["id"],
          right: ["x"],
          original: "id > x",
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
          right: ["p", "r", "o", "p"],
          original: "id > p r o p",
        },
        {
          left: ["pe"],
          right: ["(", "ex", ")"],
          original: "pe > ( ex )",
        },
        {
          left: ["mae"],
          right: ["pe"],
          original: "mae > pe",
        },
        {
          left: ["mle"],
          right: ["mae", ".", "id"],
          original: "mle > mae . id",
        },
        {
          left: ["mae"],
          right: ["mle"],
          original: "mae > mle",
        },
      ],
      [
        {
          left: ["pe"],
          right: ["id"],
          original: "pe > id",
        },
        {
          left: ["ex"],
          right: ["mae"],
          original: "ex > mae",
        },
        {
          left: ["mae"],
          right: ["mle"],
          original: "mae > mle",
        },
        {
          left: ["mae"],
          right: ["pe"],
          original: "mae > pe",
        },
        {
          left: ["mle"],
          right: ["mae", ".", "id"],
          original: "mle > mae . id",
        },
      ],
      [
        {
          left: ["id"],
          right: ["n", "a", "m", "e"],
          original: "id > n a m e",
        },
        {
          left: ["id"],
          right: ["l", "a", "s", "t"],
          original: "id > l a s t",
        },
        {
          left: ["id"],
          right: ["h", "u", "m", "a", "n"],
          original: "id > h u m a n",
        },
      ],
      [
        {
          left: ["mle"],
          right: ["mae", ".", "id"],
          original: "mle > mae . id",
        },
        {
          left: ["mae"],
          right: ["mle"],
          original: "mae > mle",
        },
        {
          left: ["pe"],
          right: ["id"],
          original: "pe > id",
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
          right: ["y", "e", "a", "r"],
          original: "id > y e a r",
        },
        {
          left: ["id"],
          right: ["b", "i", "r", "t", "h", "d", "a", "t", "e"],
          original: "id > b i r t h d a t e",
        },
        {
          left: ["id"],
          right: ["h", "u", "m", "a", "n"],
          original: "id > h u m a n",
        },
      ],
      [
        {
          left: ["mle"],
          right: ["mae", "[", "ex", "]"],
          original: "mle > mae [ ex ]",
        },
        {
          left: ["pe"],
          right: ["id"],
          original: "pe > id",
        },
        {
          left: ["ex"],
          right: ["mae"],
          original: "ex > mae",
        },
        {
          left: ["mae"],
          right: ["pe"],
          original: "mae > pe",
        },
        {
          left: ["mae"],
          right: ["mle"],
          original: "mae > mle",
        },
      ],
      [
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
        {
          left: ["pe"],
          right: ["li"],
          original: "pe > li",
        },
      ],
      [
        {
          left: ["mae"],
          right: ["mle"],
          original: "mae > mle",
        },
        {
          left: ["ex"],
          right: ["mae"],
          original: "ex > mae",
        },
        {
          left: ["mle"],
          right: ["mae", "[", "ex", "]"],
          original: "mle > mae [ ex ]",
        },
        {
          left: ["mae"],
          right: ["pe"],
          original: "mae > pe",
        },
      ],
      [
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
      ],
      [
        {
          left: ["mae"],
          right: ["pe"],
          original: "mae > pe",
        },
        {
          left: ["mle"],
          right: ["mae", "[", "ex", "]"],
          original: "mle > mae [ ex ]",
        },
        {
          left: ["ex"],
          right: ["mae"],
          original: "ex > mae",
        },
        {
          left: ["mae"],
          right: ["mle"],
          original: "mae > mle",
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
          right: ["nu"],
          original: "li > nu",
        },
        {
          left: ["in"],
          right: ["2"],
          original: "in > 2",
        },
        {
          left: ["nu"],
          right: ["in"],
          original: "nu > in",
        },
      ],
    ],
  };
  return r;
}
