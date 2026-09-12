import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_expression_press_steps } from "./app_code_expression_press_steps.mjs";
import { app_code_expression_code } from "./app_code_expression_code.mjs";
import { app_code_expression_meaning } from "./app_code_expression_meaning.mjs";
import { app_code_expression_code_meaning } from "./app_code_expression_code_meaning.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { list_add } from "./list_add.mjs";
import { each } from "./each.mjs";
export function app_code_expression_written_faults(item) {
  arguments_assert(arguments, 1);
  ("every step of an expression whose printed line does not mean the shape it was printed from, each fault carrying the line, what the shape meant and what the line says");
  ("This is the one thing a learner cannot check and must not have to. A line stands above the buttons and the buttons press the shape apart, and if the two ever come apart the learner is told to work out a line nobody wrote. It has happened twice: Math.floor3.8 * 5 and 23 - Math.floor2.3 * 10 both reached a screen, and both were found by a person reading them rather than by anything here.");
  ("Every step, not the first one. The printed line is made afresh at each press, so a pair of brackets is lost in the middle of the working as easily as at the start - and the start is the half somebody looked at.");
  let steps = app_code_expression_press_steps(item);
  let faults = [];
  function one(step) {
    "one step: what the shape means, against what the line it printed means";
    let code = app_code_expression_code(step);
    let meant = app_code_expression_meaning(step);
    let says = app_code_expression_code_meaning(code);
    let agree = equal(meant, says);
    if (not(agree)) {
      let fault = {
        code,
        meant,
        says,
      };
      list_add(faults, fault);
    }
  }
  each(steps, one);
  return faults;
}
