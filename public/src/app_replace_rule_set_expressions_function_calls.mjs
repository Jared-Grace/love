import { app_replace_rule_set_expressions_function_calls_rules } from "../../../love/public/src/app_replace_rule_set_expressions_function_calls_rules.mjs";
import { app_replace_rule_set_expressions_function_calls_abbreviations } from "../../../love/public/src/app_replace_rule_set_expressions_function_calls_abbreviations.mjs";
import { list_add } from "../../../love/public/src/list_add.mjs";
export function app_replace_rule_set_expressions_function_calls() {
  const rules = [];
  app_replace_rule_set_expressions_function_calls_rules(rules);
  list_add(rules, "ex > ce");
  let abbreviations = {};
  app_replace_rule_set_expressions_function_calls_abbreviations(abbreviations);
  let r = {
    name: "Expressions Function Calls",
    abbreviations,
    rules,
    goals: [
      {
        start: "ce",
        end: "id",
      },
      {
        start: "ce",
        end: "f n ( )",
      },
      {
        start: "ce",
        end: "id . id ( )",
      },
      {
        start: "id . id ( )",
        end: "p a g e . r e f r e s h ( )",
      },
      {
        start: "ce",
        end: "id ( ex )",
      },
      {
        start: "id ( ex )",
        end: "id ( li )",
      },
      {
        start: "id ( li )",
        end: "id ( de )",
      },
      {
        start: "id ( ag )",
        end: "id ( ex , ex )",
      },
      {
        start: "id ( ex , ex )",
        end: "id ( nu , ex )",
      },
      {
        start: "id ( nu , ex )",
        end: "id ( nu , nu )",
      },
      {
        start: "id ( nu , nu )",
        end: "a d d ( 1 , 2 )",
      },
      {
        start: "id ( ex )",
        end: "id ( id . id )",
      },
      {
        start: "id ( id . id )",
        end: "k n o c k ( b u i l d i n g . d o o r )",
      },
      {
        start: "id ( ex )",
        end: "id ( id [ ex ] )",
      },
      {
        start: "id ( id [ ex ] )",
        end: "id ( id [ nu ] )",
      },
      {
        start: "id ( id [ nu ] )",
        end: "d o u b l e ( l i s t [ 0 ] )",
      },
      {
        start: "id ( ex )",
        end: "id ( id ( ) )",
      },
      {
        start: "id ( id ( ) )",
        end: "l o v e ( a l l ( ) )",
      },
    ],
    why: "These replacement rules define a grammar for parsing function calls and member access expressions, including identifiers, literals, numbers, strings, booleans, and nested function calls, demonstrating how complex expressions and function invocations are constructed from simpler components.",
    rules_used: [
      [
        {
          left: ["pe"],
          right: ["id"],
          original: "pe > id",
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
          left: ["mae"],
          right: ["pe"],
          original: "mae > pe",
        },
        {
          left: ["id"],
          right: ["f", "n"],
          original: "id > f n",
        },
        {
          left: ["ce"],
          right: ["ce", "(", ")"],
          original: "ce > ce ( )",
        },
        {
          left: ["pe"],
          right: ["id"],
          original: "pe > id",
        },
        {
          left: ["ce"],
          right: ["mae"],
          original: "ce > mae",
        },
      ],
      [
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
          left: ["ce"],
          right: ["ce", "(", ")"],
          original: "ce > ce ( )",
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
          left: ["ce"],
          right: ["mae"],
          original: "ce > mae",
        },
      ],
      [
        {
          left: ["id"],
          right: ["p", "a", "g", "e"],
          original: "id > p a g e",
        },
        {
          left: ["id"],
          right: ["d", "o", "u", "b", "l", "e"],
          original: "id > d o u b l e",
        },
        {
          left: ["id"],
          right: ["r", "e", "f", "r", "e", "s", "h"],
          original: "id > r e f r e s h",
        },
      ],
      [
        {
          left: ["ce"],
          right: ["mae"],
          original: "ce > mae",
        },
        {
          left: ["pe"],
          right: ["id"],
          original: "pe > id",
        },
        {
          left: ["ag"],
          right: ["ex"],
          original: "ag > ex",
        },
        {
          left: ["mae"],
          right: ["pe"],
          original: "mae > pe",
        },
        {
          left: ["ce"],
          right: ["ce", "(", "ag", ")"],
          original: "ce > ce ( ag )",
        },
      ],
      [
        {
          left: ["ce"],
          right: ["mae"],
          original: "ce > mae",
        },
        {
          left: ["pe"],
          right: ["li"],
          original: "pe > li",
        },
        {
          left: ["ex"],
          right: ["ce"],
          original: "ex > ce",
        },
        {
          left: ["mae"],
          right: ["pe"],
          original: "mae > pe",
        },
      ],
      [
        {
          left: ["bo"],
          right: ["true"],
          original: "bo > true",
        },
        {
          left: ["li"],
          right: ["nu"],
          original: "li > nu",
        },
        {
          left: ["nu"],
          right: ["de"],
          original: "nu > de",
        },
      ],
      [
        {
          left: ["ag"],
          right: ["ex"],
          original: "ag > ex",
        },
        {
          left: ["ag"],
          right: ["ex", ",", "ag"],
          original: "ag > ex , ag",
        },
        {
          left: ["id"],
          right: ["p", "a", "g", "e"],
          original: "id > p a g e",
        },
      ],
      [
        {
          left: ["mae"],
          right: ["pe"],
          original: "mae > pe",
        },
        {
          left: ["ex"],
          right: ["ce"],
          original: "ex > ce",
        },
        {
          left: ["li"],
          right: ["nu"],
          original: "li > nu",
        },
        {
          left: ["ce"],
          right: ["mae"],
          original: "ce > mae",
        },
        {
          left: ["pe"],
          right: ["li"],
          original: "pe > li",
        },
      ],
      [
        {
          left: ["ex"],
          right: ["ce"],
          original: "ex > ce",
        },
        {
          left: ["mae"],
          right: ["pe"],
          original: "mae > pe",
        },
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
          left: ["ce"],
          right: ["mae"],
          original: "ce > mae",
        },
      ],
      [
        {
          left: ["id"],
          right: ["a", "d", "d"],
          original: "id > a d d",
        },
        {
          left: ["in"],
          right: ["1"],
          original: "in > 1",
        },
        {
          left: ["nu"],
          right: ["in"],
          original: "nu > in",
        },
        {
          left: ["in"],
          right: ["2"],
          original: "in > 2",
        },
      ],
      [
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
          left: ["ex"],
          right: ["ce"],
          original: "ex > ce",
        },
        {
          left: ["ce"],
          right: ["mae"],
          original: "ce > mae",
        },
      ],
      [
        {
          left: ["id"],
          right: ["d", "o", "o", "r"],
          original: "id > d o o r",
        },
        {
          left: ["id"],
          right: ["k", "n", "o", "c", "k"],
          original: "id > k n o c k",
        },
        {
          left: ["id"],
          right: ["b", "u", "i", "l", "d", "i", "n", "g"],
          original: "id > b u i l d i n g",
        },
      ],
      [
        {
          left: ["ex"],
          right: ["ce"],
          original: "ex > ce",
        },
        {
          left: ["mae"],
          right: ["mle"],
          original: "mae > mle",
        },
        {
          left: ["ce"],
          right: ["mae"],
          original: "ce > mae",
        },
        {
          left: ["pe"],
          right: ["id"],
          original: "pe > id",
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
          left: ["ce"],
          right: ["mae"],
          original: "ce > mae",
        },
        {
          left: ["mae"],
          right: ["pe"],
          original: "mae > pe",
        },
        {
          left: ["ex"],
          right: ["ce"],
          original: "ex > ce",
        },
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
      ],
      [
        {
          left: ["id"],
          right: ["d", "o", "u", "b", "l", "e"],
          original: "id > d o u b l e",
        },
        {
          left: ["id"],
          right: ["l", "i", "s", "t"],
          original: "id > l i s t",
        },
        {
          left: ["in"],
          right: ["0"],
          original: "in > 0",
        },
        {
          left: ["nu"],
          right: ["in"],
          original: "nu > in",
        },
      ],
      [
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
        {
          left: ["pe"],
          right: ["id"],
          original: "pe > id",
        },
        {
          left: ["ex"],
          right: ["ce"],
          original: "ex > ce",
        },
        {
          left: ["ce"],
          right: ["ce", "(", ")"],
          original: "ce > ce ( )",
        },
      ],
      [
        {
          left: ["id"],
          right: ["l", "o", "v", "e"],
          original: "id > l o v e",
        },
        {
          left: ["pe"],
          right: ["(", "ex", ")"],
          original: "pe > ( ex )",
        },
        {
          left: ["id"],
          right: ["a", "l", "l"],
          original: "id > a l l",
        },
      ],
    ],
  };
  return r;
}
