import { arguments_assert } from "./arguments_assert.mjs";
import { null_is } from "./null_is.mjs";
import { app_code_program_step_piece_start_is } from "./app_code_program_step_piece_start_is.mjs";
import { app_learn_js_braces_dots } from "./app_learn_js_braces_dots.mjs";
import { list_get } from "./list_get.mjs";
import { app_learn_js_program_step_entry_start_is } from "./app_learn_js_program_step_entry_start_is.mjs";
import { property_exists } from "./property_exists.mjs";
import { not } from "./not.mjs";
import { subtract } from "./subtract.mjs";
import { property_get } from "./property_get.mjs";
import { equal } from "./equal.mjs";
export function app_code_program_step_piece_press_words(
  trace,
  index,
  pressed_piece,
) {
  arguments_assert(arguments, 3);
  ("Why what was pressed on the line due is not what runs next, where only a piece of that line runs: a reason and its words, words and code taking turns, text first. pressed_piece is the piece pressed, or null when the press fell outside every piece. Always answers, since every wrong press on this line is one of these three");
  ("2026-11-04: the rule is said rather than the answer, as every wrong press here does, so the learner still finds the piece");
  if (null_is(pressed_piece)) {
    let r = {
      reason: "piece_whole",
      words: [
        "Only part of this line runs next. Press that part, not the rest of the line",
      ],
    };
    return r;
  }
  ("2026-11-04: the code before the first ; has two rules of its own: nothing else on the line runs ahead of it, and once it has run it never runs again");
  if (app_code_program_step_piece_start_is(pressed_piece)) {
    let r5 = {
      reason: "piece_start_once",
      words: [
        "The code before the first ",
        ";",
        " runs only once, before the loop starts",
      ],
    };
    return r5;
  }
  let braces = app_learn_js_braces_dots();
  let entry = list_get(trace, index);
  if (app_learn_js_program_step_entry_start_is(entry)) {
    let r6 = {
      reason: "piece_start_first",
      words: [
        "The code before the first ",
        ";",
        " runs first, before anything else in the ",
        "for",
      ],
    };
    return r6;
  }
  let condition_due = property_exists(entry, "condition");
  if (not(condition_due)) {
    let r2 = {
      reason: "piece_update_due",
      words: [
        "The condition was checked before the ",
        braces,
        " ran. After the ",
        braces,
        ", the code after the second ",
        ";",
        " runs, and only then the condition",
      ],
    };
    return r2;
  }
  let index_before = subtract(index, 1);
  let before = list_get(trace, index_before);
  let line_due = property_get(entry, "line");
  let line_before = property_get(before, "line");
  let start_before = app_learn_js_program_step_entry_start_is(before);
  if (equal(line_due, line_before) && not(start_before)) {
    let r3 = {
      reason: "piece_update_ran",
      words: ["That code just ran, so the condition is checked again"],
    };
    return r3;
  }
  ("2026-11-04, the human's words, with the condition filled in from the program at the human's asking. Not picked: filling in the { ... } too, since a body can be many lines; ( ) around the condition, offered by the human, since it is shown as code and the code does not say them there");
  let value = property_get(entry, "condition_text");
  let r4 = {
    reason: "piece_condition_first",
    words: [
      "The condition ",
      value,
      " runs first. It decides whether the ",
      braces,
      " runs, and the code after the second ",
      ";",
      " runs after the ",
      braces,
    ],
  };
  return r4;
}
