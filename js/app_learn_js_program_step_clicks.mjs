import { arguments_assert } from "./arguments_assert.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { app_learn_js_program_step_trace } from "./app_learn_js_program_step_trace.mjs";
import { app_learn_js_program_step_noun } from "./app_learn_js_program_step_noun.mjs";
import { app_learn_js_program_step_complete_words } from "./app_learn_js_program_step_complete_words.mjs";
import { app_learn_js_program_step_option_words } from "./app_learn_js_program_step_option_words.mjs";
import { list_add } from "./list_add.mjs";
import { property_get } from "./property_get.mjs";
import { js_value_code } from "./js_value_code.mjs";
import { property_exists } from "./property_exists.mjs";
import { list_size } from "./list_size.mjs";
import { list_get } from "./list_get.mjs";
import { text_trim } from "./text_trim.mjs";
import { property_get_or } from "./property_get_or.mjs";
import { null_is } from "./null_is.mjs";
import { less_than } from "./less_than.mjs";
import { app_learn_js_program_step_call_is } from "./app_learn_js_program_step_call_is.mjs";
import { app_learn_js_program_step_call_code } from "./app_learn_js_program_step_call_code.mjs";
import { app_learn_js_program_step_call_words } from "./app_learn_js_program_step_call_words.mjs";
import { equal } from "./equal.mjs";
import { subtract } from "./subtract.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
export function app_learn_js_program_step_clicks(code) {
  arguments_assert(arguments, 1);
  ("every right press a learner makes stepping through the program code, in order: the line that runs next, what it does, the value a name or an operator comes to, and last that the program is complete. 2026-10-23, asked for by the human so Show me the answer on a step-by-step question says the steps to press rather than the program again");
  ("The presses are the ones the step-through asks for, read off the same trace and the same grouping of an expression solved whole, so the two cannot come to disagree. An expression solved whole is one step, since the operators can be pressed in more than one right order. Not picked: one step per operator, which would name one order as the answer when another is right too");
  ("Each step is a list of pieces, each piece a text and its kind: words, code, or button - what is pressed as a button on the screen is drawn as one, at the human's asking the same day, so the learner sees the thing to press");
  let lines = text_split_newline(code);
  let traced = app_learn_js_program_step_trace(code);
  let noun = app_learn_js_program_step_noun(traced);
  let complete_words = app_learn_js_program_step_complete_words(noun);
  let options = app_learn_js_program_step_option_words();
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
    ("2026-11-04: where only a piece of the line runs, the piece is what is chosen, so it is what is named");
    let piece = property_get_or(traced_entry, "piece", null);
    let v11 = words(null_is(piece) ? "Choose the line " : "Choose the code ");
    let v12 = code_piece(
      null_is(piece) ? trimmed : property_get(piece, "text"),
    );
    list_add(clicks, [v11, v12]);
    let actions = property_get(traced_entry, "actions");
    let k = 0;
    while (less_than(k, list_size(actions))) {
      let action = list_get(actions, k);
      let kind = property_get(action, "kind");
      ("2026-11-13, at the human's asking: a function called is solved, as an expression is - Solve an expression, then what the function does, and then, where it stands inside a line, what it comes to - as the step-through asks it");
      if (app_learn_js_program_step_call_is(kind)) {
        let value13 = property_get(options, "evaluate");
        choose_add(value13);
        let into = property_get_or(action, "into", false);
        let call_code = app_learn_js_program_step_call_code(action);
        ("2026-11-14, at the human's asking: a call inside another call runs first, so which runs first is chosen before what it does");
        if (into) {
          let v13 = words("Press ");
          let operator_code = call_code.slice(
            property_get(action, "name").length,
          );
          let v14 = button(operator_code);
          let v15 = words(" to run it first");
          list_add(clicks, [v13, v14, v15]);
        }
        let call_words = app_learn_js_program_step_call_words();
        let value14 = property_get(call_words, kind);
        choose_add(value14);
        if (into) {
          let value3 = property_get(action, "value");
          let said2 = js_value_code(value3);
          let v16 = words("Choose ");
          let v17 = button(said2);
          let v18 = words(" for ");
          let v19 = code_piece(call_code);
          list_add(clicks, [v16, v17, v18, v19]);
        }
      } else {
        let value2 = property_get(options, kind);
        choose_add(value2);
      }
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
    choose_add(complete_words);
  }
  if (list_empty_is(traced)) {
    choose_add("The program is complete");
  }
  return clicks;
}
