import { list_add_multiple } from "./list_add_multiple.mjs";
import { app_replace_rule_set_statements_variable_rules } from "./app_replace_rule_set_statements_variable_rules.mjs";
import { js_code_assign } from "./js_code_assign.mjs";
import { js_code_let_assign } from "./js_code_let_assign.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function app_replace_rule_set_statements_variable() {
  let rules = [];
  app_replace_rule_set_statements_variable_rules(rules);
  list_add_multiple(rules, [
    "id > a",
    "id > b",
    "id > c",
    "id > i",
    "id > j",
    "id > x",
    "id > y",
    "id > z",
    "ex > 0",
    "ex > 1",
    "ex > 2",
  ]);
  let y_eq_ = js_code_assign("y", "2");
  let r = {
    name: "Statements Variable",
    rules,
    goals: [
      {
        start: "vs",
        end: "let i ;",
      },
      {
        start: "vs",
        end: js_code_let_assign("j", "0"),
      },
      {
        start: "vs",
        end: "var x , y ;",
      },
      {
        start: "vs",
        end: "var a , vd , vd ;",
      },
      {
        start: "var a , vd , vd ;",
        end: "var a , b , c ;",
      },
      {
        start: "vs",
        end: text_combine_multiple(["const vdg , ", y_eq_, " ;"]),
      },
      {
        start: text_combine_multiple(["const vdg , ", y_eq_, " ;"]),
        end: text_combine_multiple(["const x = 1 , ", y_eq_, " ;"]),
      },
    ],
    why: "Making a new name and giving it a starting value: the word let, const or var, then the name, then = and the value. Several names can share one instruction, separated by commas.",
  };
  return r;
}
