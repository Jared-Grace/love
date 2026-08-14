import { js_keyword_null } from "./js_keyword_null.mjs";
import { js_keyword_false } from "./js_keyword_false.mjs";
import { js_keyword_true } from "./js_keyword_true.mjs";
import { app_replace_rule_set_expressions_primary_rules } from "./app_replace_rule_set_expressions_primary_rules.mjs";
import { list_add } from "./list_add.mjs";
export function app_replace_rule_set_expressions_primary() {
  let rules = [];
  app_replace_rule_set_expressions_primary_rules(rules);
  list_add(rules, "ex > pe");
  let r = {
    name: "Expressions Primary",
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
        end: "3.14",
      },
      {
        start: "pe",
        end: '"luv"',
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
    why: "An expression is any piece of code that stands for a value. The simplest ones are a name, a number, some text, true, false, null - or any expression wrapped in round brackets. Everything in the rest of the course is built out of these.",
  };
  return r;
}
