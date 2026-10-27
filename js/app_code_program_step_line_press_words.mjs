import { arguments_assert } from "./arguments_assert.mjs";
import { list_size } from "./list_size.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
import { list_get } from "./list_get.mjs";
import { text_trim } from "./text_trim.mjs";
import { app_code_braces_dots } from "./app_code_braces_dots.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { property_get } from "./property_get.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
import { greater_than } from "./greater_than.mjs";
import { null_is } from "./null_is.mjs";
import { app_code_program_step_line_wrong_words } from "./app_code_program_step_line_wrong_words.mjs";
import { app_code_program_step_line_ran_words } from "./app_code_program_step_line_ran_words.mjs";
import { app_code_program_step_line_never_words } from "./app_code_program_step_line_never_words.mjs";
export function app_code_program_step_line_press_words(lines, trace, index, i) {
  arguments_assert(arguments, 4);
  ("Why line i is not the line to press next, in the program's lines, run in the order trace gives, with index lines run so far: a reason and its words, words and code taking turns, text first; or null where no rule says why. One function so the step-through screen and the gate over every program ask the same thing");
  let b = list_size(trace);
  let done = greater_than_equal(index, b);
  ("2026-10-21, at the human's asking: a wrong press says why when the reason is a rule, and the rule is said rather than the answer, so the learner still finds the right line. The first is a line holding only }, which a learner may take for a step; said once each time the next line is asked for. Not picked: making } a step, which would be a press with nothing to do");
  let message = list_get(lines, i);
  let pressed_text = text_trim(message);
  let braces_shown = app_code_braces_dots();
  let reason = null;
  let reason_words = null;
  if (equal(pressed_text, "}")) {
    reason = "brace";
    reason_words = [
      "Nothing runs on a line holding only ",
      "}",
      "; it only marks where the ",
      braces_shown,
      " ends",
    ];
  } else if (equal(pressed_text, "} else {")) {
    ("2026-10-23, at the human's asking: like a line holding only }, a } else { line is never run by itself. Not picked: telling the learner to choose a line inside the { } that runs, since the line due may come after the whole if");
    reason = "else_brace";
    reason_words = [
      "Nothing runs on a line holding only ",
      "} else {",
      "; it only marks where the ",
      "if",
      "'s ",
      braces_shown,
      " ends and the ",
      "else " + braces_shown,
      " starts",
    ];
  } else if (not(done)) {
    ("2026-10-21, at the human's asking: the second is a line pressed below an if that is to run next - most likely if (false), whose { ... } the learner can already see will not run. The if line still runs first, since running it is how the computer finds that out. Not picked: taking the skip as right for a written false, which would teach skipping whenever the learner thinks they know the answer");
    let object = list_get(trace, index);
    let line_due = property_get(object, "line");
    let message3 = list_get(lines, line_due);
    let due_text = text_trim(message3);
    if (text_starts_with(due_text, "if (") && greater_than(i, line_due)) {
      reason = "if_skip";
      reason_words = [
        "The computer reaches the ",
        "if",
        " line first; it runs that line to find out whether the ",
        braces_shown,
        " runs",
      ];
    }
    ("2026-10-23, at the human's asking that every wrong press says why: otherwise the rule that decides the next line is said, where one does");
    if (null_is(reason)) {
      let wrong = app_code_program_step_line_wrong_words(
        lines,
        trace,
        index,
        i,
      );
      if (null_is(wrong)) {
        wrong = app_code_program_step_line_ran_words(lines, trace, index, i);
      }
      if (null_is(wrong)) {
        wrong = app_code_program_step_line_never_words(lines, trace, i);
      }
      return wrong;
    }
  }
  if (done && null_is(reason)) {
    ("2026-10-24, at the human's asking that every wrong press says why: a line pressed once every line due has run. Words picked by the human from the ones offered");
    reason = "program_done";
    reason_words = ["The program is complete - no line is left to run"];
  }
  if (null_is(reason)) {
    return null;
  }
  let r = {
    reason,
    words: reason_words,
  };
  return r;
}
