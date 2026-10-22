import { arguments_assert } from "./arguments_assert.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { app_code_program_trace } from "./app_code_program_trace.mjs";
import { property_get } from "./property_get.mjs";
import { js_value_code } from "./js_value_code.mjs";
import { property_exists } from "./property_exists.mjs";
import { list_add } from "./list_add.mjs";
import { list_get } from "./list_get.mjs";
import { text_trim } from "./text_trim.mjs";
import { app_code_program_step_actions_solve_whole } from "./app_code_program_step_actions_solve_whole.mjs";
import { less_than } from "./less_than.mjs";
import { list_size } from "./list_size.mjs";
import { equal } from "./equal.mjs";
import { property_get_or } from "./property_get_or.mjs";
export function app_code_program_step_clicks(code) {
  arguments_assert(arguments, 1);
  ("every right press a learner makes stepping through the program code, in order, each one a sentence of words and code taking turns: the line that runs next, what it does, the value a name or an operator comes to, and last that the program is complete. 2026-10-23, asked for by the human so Show me the answer on a step-by-step question says the steps to press rather than the program again");
  ("The presses are the ones the step-through asks for, read off the same trace and the same grouping of an expression solved whole, so the two cannot come to disagree. An expression solved whole is one sentence, since the operators can be pressed in more than one right order. Not picked: one sentence per operator, which would name one order as the answer when another is right too");
  let lines = text_split_newline(code);
  let traced = app_code_program_trace(code);
  let words = {
    declare: "Declare a variable",
    evaluate: "Solve an expression",
    assign: "Assign a value",
    log: "Log a value to the console",
    expand: "Write it the long way",
  };
  let clicks = [];
  function value_add(action) {
    let value = property_get(action, "value");
    let said = js_value_code(value);
    if (property_exists(action, "tree")) {
      let whole = property_get(action, "whole");
      list_add(clicks, [
        "Solve ",
        whole,
        " one operator at a time, until it is ",
        said,
      ]);
      return;
    }
    ("the value is said with what it is the value of, the question it answers being What is a?, since a row of bare values would not say which one is which");
    let name = property_get(action, "name");
    list_add(clicks, ["Choose ", said, " for ", name]);
  }
  for (let traced_entry of traced) {
    let line = property_get(traced_entry, "line");
    let message = list_get(lines, line);
    let trimmed = text_trim(message);
    list_add(clicks, ["Choose the line ", trimmed]);
    let traced_actions = property_get(traced_entry, "actions");
    let actions = app_code_program_step_actions_solve_whole(
      code,
      traced_actions,
    );
    let k = 0;
    while (less_than(k, list_size(actions))) {
      let action = list_get(actions, k);
      let kind = property_get(action, "kind");
      list_add(clicks, ["Choose: " + property_get(words, kind)]);
      k = k + 1;
      if (equal(kind, "evaluate")) {
        value_add(action);
      }
      while (
        less_than(k, list_size(actions)) &&
        property_get_or(list_get(actions, k), "continues", false)
      ) {
        let item = list_get(actions, k);
        value_add(item);
        k = k + 1;
      }
    }
    list_add(clicks, [
      "Choose: This line is complete; continue to the next line",
    ]);
  }
  list_add(clicks, ["Choose: The program is complete"]);
  return clicks;
}
