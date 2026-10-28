import { arguments_assert } from "./arguments_assert.mjs";
import { equal } from "./equal.mjs";
import { app_code_braces_dots } from "./app_code_braces_dots.mjs";
import { list_get } from "./list_get.mjs";
import { property_get } from "./property_get.mjs";
import { subtract } from "./subtract.mjs";
import { property_get_or } from "./property_get_or.mjs";
import { less_than } from "./less_than.mjs";
import { not } from "./not.mjs";
import { greater_than } from "./greater_than.mjs";
export function app_code_program_step_line_while_words(
  lines,
  trace,
  index,
  pressed,
) {
  arguments_assert(arguments, 4);
  ("Why a pressed line is not the next to run, where a while decides it: null when no while does. lines is the program's lines, trace the lines it runs in order, index how many have run, and pressed the line pressed. Words and code take turns, text first");
  ("2026-10-28: the step lessons over the while lessons left two places with no reason, found by the presses gate: going back up to the while line once its { ... } has run, and going on below the loop once its condition is false. Not picked: saying runs later for the body, which is not so on the last check");
  if (equal(index, 0)) {
    return null;
  }
  let braces = app_code_braces_dots();
  let entry = list_get(trace, index);
  let due = property_get(entry, "line");
  let index2 = subtract(index, 1);
  let previous = list_get(trace, index2);
  let previous_line = property_get(previous, "line");
  let alternate = property_get_or(entry, "alternate", null);
  if (equal(alternate, "loop") && less_than(due, previous_line)) {
    let r = {
      reason: "while_back",
      words: [
        "The end of the ",
        "while",
        "'s ",
        braces,
        " was reached, so the computer goes back up to the ",
        "while",
        " line to check its condition again",
      ],
    };
    return r;
  }
  let previous_alternate = property_get_or(previous, "alternate", null);
  if (
    equal(previous_alternate, "loop") &&
    not(property_get(previous, "condition"))
  ) {
    if (equal(pressed, previous_line)) {
      let r2 = {
        reason: "while_ran",
        words: [
          "The ",
          "while",
          " line just ran and its condition was false, so the loop is done - the computer goes on below the ",
          "}",
        ],
      };
      return r2;
    }
    if (greater_than(pressed, previous_line) && less_than(pressed, due)) {
      let r3 = {
        reason: "while_false_skip",
        words: [
          "The ",
          "while",
          "'s condition was false, so its ",
          braces,
          " is skipped - the loop is done",
        ],
      };
      return r3;
    }
  }
  return null;
}
