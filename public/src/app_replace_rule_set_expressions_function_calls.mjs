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
          left: ["ce"],
          right: ["mae"],
        },
        {
          left: ["pe"],
          right: ["id"],
        },
        {
          left: ["mae"],
          right: ["pe"],
        },
      ],
      [
        {
          left: ["ce"],
          right: ["mae"],
        },
        {
          left: ["pe"],
          right: ["id"],
        },
        {
          left: ["id"],
          right: ["f", "n"],
        },
        {
          left: ["ce"],
          right: ["ce", "(", ")"],
        },
        {
          left: ["mae"],
          right: ["pe"],
        },
      ],
      [
        {
          left: ["ce"],
          right: ["ce", "(", ")"],
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
          left: ["pe"],
          right: ["id"],
        },
        {
          left: ["ce"],
          right: ["mae"],
        },
        {
          left: ["mle"],
          right: ["mae", ".", "id"],
        },
      ],
      [
        {
          left: ["id"],
          right: ["l", "o", "v", "e"],
        },
        {
          left: ["id"],
          right: ["p", "a", "g", "e"],
        },
        {
          left: ["id"],
          right: ["r", "e", "f", "r", "e", "s", "h"],
        },
      ],
      [
        {
          left: ["ce"],
          right: ["ce", "(", "ag", ")"],
        },
        {
          left: ["mae"],
          right: ["pe"],
        },
        {
          left: ["ag"],
          right: ["ex"],
        },
        {
          left: ["ce"],
          right: ["mae"],
        },
        {
          left: ["pe"],
          right: ["id"],
        },
      ],
      [
        {
          left: ["mae"],
          right: ["pe"],
        },
        {
          left: ["ce"],
          right: ["mae"],
        },
        {
          left: ["ex"],
          right: ["ce"],
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
          left: ["nu"],
          right: ["de"],
        },
        {
          left: ["id"],
          right: ["f", "n"],
        },
      ],
      [
        {
          left: ["ag"],
          right: ["ex"],
        },
        {
          left: ["id"],
          right: ["y"],
        },
        {
          left: ["ag"],
          right: ["ex", ",", "ag"],
        },
      ],
      [
        {
          left: ["ce"],
          right: ["mae"],
        },
        {
          left: ["li"],
          right: ["nu"],
        },
        {
          left: ["ex"],
          right: ["ce"],
        },
        {
          left: ["pe"],
          right: ["li"],
        },
        {
          left: ["mae"],
          right: ["pe"],
        },
      ],
      [
        {
          left: ["pe"],
          right: ["li"],
        },
        {
          left: ["li"],
          right: ["nu"],
        },
        {
          left: ["ex"],
          right: ["ce"],
        },
        {
          left: ["ce"],
          right: ["mae"],
        },
        {
          left: ["mae"],
          right: ["pe"],
        },
      ],
      [
        {
          left: ["in"],
          right: ["1"],
        },
        {
          left: ["id"],
          right: ["a", "d", "d"],
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
          left: ["mae"],
          right: ["mle"],
        },
        {
          left: ["ex"],
          right: ["ce"],
        },
        {
          left: ["mle"],
          right: ["mae", ".", "id"],
        },
        {
          left: ["mae"],
          right: ["pe"],
        },
        {
          left: ["pe"],
          right: ["id"],
        },
        {
          left: ["ce"],
          right: ["mae"],
        },
      ],
      [
        {
          left: ["id"],
          right: ["k", "n", "o", "c", "k"],
        },
        {
          left: ["id"],
          right: ["b", "u", "i", "l", "d", "i", "n", "g"],
        },
        {
          left: ["id"],
          right: ["d", "o", "o", "r"],
        },
      ],
      [
        {
          left: ["mae"],
          right: ["pe"],
        },
        {
          left: ["mae"],
          right: ["mle"],
        },
        {
          left: ["mle"],
          right: ["mae", "[", "ex", "]"],
        },
        {
          left: ["pe"],
          right: ["id"],
        },
        {
          left: ["ex"],
          right: ["ce"],
        },
        {
          left: ["ce"],
          right: ["mae"],
        },
      ],
      [
        {
          left: ["ce"],
          right: ["mae"],
        },
        {
          left: ["pe"],
          right: ["li"],
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
          left: ["ex"],
          right: ["ce"],
        },
      ],
      [
        {
          left: ["nu"],
          right: ["in"],
        },
        {
          left: ["id"],
          right: ["d", "o", "u", "b", "l", "e"],
        },
        {
          left: ["in"],
          right: ["0"],
        },
        {
          left: ["id"],
          right: ["l", "i", "s", "t"],
        },
      ],
      [
        {
          left: ["ce"],
          right: ["mae"],
        },
        {
          left: ["ex"],
          right: ["ce"],
        },
        {
          left: ["pe"],
          right: ["id"],
        },
        {
          left: ["ce"],
          right: ["ce", "(", ")"],
        },
        {
          left: ["mae"],
          right: ["pe"],
        },
      ],
      [
        {
          left: ["id"],
          right: ["a", "l", "l"],
        },
        {
          left: ["id"],
          right: ["l", "o", "v", "e"],
        },
        {
          left: ["id"],
          right: ["f", "n"],
        },
      ],
    ],
  };
  return r;
}
