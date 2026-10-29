import { arguments_assert } from "./arguments_assert.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { app_code_program_step_trace } from "./app_code_program_step_trace.mjs";
import { list_add } from "./list_add.mjs";
import { property_get } from "./property_get.mjs";
import { js_value_code } from "./js_value_code.mjs";
import { property_exists } from "./property_exists.mjs";
import { list_size } from "./list_size.mjs";
import { list_get } from "./list_get.mjs";
import { text_trim } from "./text_trim.mjs";
import { less_than } from "./less_than.mjs";
import { equal } from "./equal.mjs";
import { property_get_or } from "./property_get_or.mjs";
import { subtract } from "./subtract.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
export function app_code_program_step_clicks(code) {
  arguments_assert(arguments, 1);
  ("every right press a learner makes stepping through the program code, in order: the line that runs next, what it does, the value a name or an operator comes to, and last that the program is complete. 2026-10-23, asked for by the human so Show me the answer on a step-by-step question says the steps to press rather than the program again");
  ("The presses are the ones the step-through asks for, read off the same trace and the same grouping of an expression solved whole, so the two cannot come to disagree. An expression solved whole is one step, since the operators can be pressed in more than one right order. Not picked: one step per operator, which would name one order as the answer when another is right too");
  ("Each step is a list of pieces, each piece a text and its kind: words, code, or button - what is pressed as a button on the screen is drawn as one, at the human's asking the same day, so the learner sees the thing to press");
  let lines = text_split_newline(code);
  let traced = app_code_program_step_trace(code);
  let options = {
    declare: "Declare a variable",
    evaluate: "Solve an expression",
    assign: "Assign a value",
    log: "Log a value to the console",
    expand: "Write it the long way",
    reset: "Reset the block",
  };
  function words(text) {
    let r = {
      text,
      kind: "words",
    };
    return r;
  }
  function code_piece(text) {
    let r2 = {
      text,
      kind: "code",
    };
    return r2;
  }
  function button(text) {
    let r3 = {
      text,
      kind: "button",
    };
    return r3;
  }
  let clicks = [];
  function choose_add(text) {
    let v = words("Choose ");
    let v2 = button(text);
    list_add(clicks, [v, v2]);
  }
  function value_add(action) {
    let value = property_get(action, "value");
    let said = js_value_code(value);
    if (property_exists(action, "tree")) {
      let whole = property_get(action, "whole");
      let v3 = words("Solve ");
      let v4 = code_piece(whole);
      let v5 = words(" one operator at a time, until it is ");
      let v6 = code_piece(said);
      list_add(clicks, [v3, v4, v5, v6]);
      return;
    }
    ("the value is said with what it is the value of, the question it answers being What is a?, since a row of bare values would not say which one is which");
    let name = property_get(action, "name");
    let v7 = words("Choose ");
    let v8 = button(said);
    let v9 = words(" for ");
    let v10 = code_piece(name);
    list_add(clicks, [v7, v8, v9, v10]);
  }
  ("counted down rather than compared with the last entry, since a line run twice can make two entries alike");
  let entries_left = list_size(traced);
  for (let traced_entry of traced) {
    let line = property_get(traced_entry, "line");
    let message = list_get(lines, line);
    let trimmed = text_trim(message);
    let v11 = words("Choose the line ");
    let v12 = code_piece(trimmed);
    list_add(clicks, [v11, v12]);
    let actions = property_get(traced_entry, "actions");
    let k = 0;
    while (less_than(k, list_size(actions))) {
      let action = list_get(actions, k);
      let kind = property_get(action, "kind");
      let value2 = property_get(options, kind);
      choose_add(value2);
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
    ("2026-10-23: the last line ends with the one press saying the program is complete, the shortcut the step-through offers there, rather than the two presses it stands for");
    entries_left = subtract(entries_left, 1);
    if (equal(entries_left, 0)) {
      choose_add("This program is complete");
      continue;
    }
    choose_add("This line is complete; continue to the next line");
  }
  if (list_empty_is(traced)) {
    choose_add("The program is complete");
  }
  return clicks;
}
