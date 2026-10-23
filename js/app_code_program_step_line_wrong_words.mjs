import { equal } from "./equal.mjs";
import { subtract } from "./subtract.mjs";
import { less_than } from "./less_than.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
import { less_than_equal } from "./less_than_equal.mjs";
import { greater_than } from "./greater_than.mjs";
import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_braces_dots } from "./app_code_braces_dots.mjs";
export function app_code_program_step_line_wrong_words(
  lines,
  trace,
  index,
  pressed,
) {
  arguments_assert(arguments, 4);
  ("Why a pressed line is not the next to run, by the rule that decides it: null when none of these rules is what decides it. lines is the program's lines, trace the lines it runs in order, index how many have run, and pressed the line pressed. Words and code take turns, text first");
  ("2026-10-23, at the human's asking, in nearly their words: the top line always runs first; after a line with no { }, the next line is the one right after it; after an if that was true, its { ... } runs and its else { ... } is skipped. Changed from their words: is ran said as runs; and There is no { } said as The previous line has no { }, since a line inside an if is itself inside a { }");
  ("Each is said only where it is so: the line right after is said only when the line due is the one right after, which it is not when a } stands between; and an if is taken as true only when the line due is the one right after it, which is where its { ... } starts");
  let due = trace[index].line;
  if (equal(index, 0)) {
    let r = {
      reason: "first_line",
      words: [
        "The line at the top always runs first. This line is not at the top",
      ],
    };
    return r;
  }
  let previous = trace[subtract(index, 1)].line;
  let previous_text = lines[previous].trim();
  let braces = app_code_braces_dots();
  let opens = previous_text.endsWith("{");
  if (opens && previous_text.includes("if (") && equal(due, previous + 1)) {
    ("where the if's own { ... } closes, and where the whole if closes, else and all: a } followed by else carries on into the else");
    let depth = 0;
    let block_end = -1;
    let chain_end = -1;
    for (
      let j = previous;
      less_than(j, lines.length) && equal(chain_end, -1);
      j++
    ) {
      let text = lines[j];
      for (let c = 0; less_than(c, text.length); c++) {
        if (equal(text[c], "{")) {
          depth++;
        }
        if (equal(text[c], "}")) {
          depth--;
          if (equal(depth, 0)) {
            if (equal(block_end, -1)) {
              block_end = j;
            }
            let b = text
              .slice(c + 1)
              .trim()
              .startsWith("else");
            if (not(b)) {
              chain_end = j;
              break;
            }
          }
        }
      }
    }
    if (equal(block_end, -1) || equal(chain_end, -1)) {
      return null;
    }
    if (
      greater_than_equal(pressed, block_end) &&
      less_than_equal(pressed, chain_end) &&
      lines[block_end].trim().startsWith("} else")
    ) {
      let r2 = {
        reason: "if_true_else",
        words: [
          "The ",
          "if",
          " was true, so its ",
          "else " + braces,
          " is skipped - none of the lines inside the ",
          "else " + braces,
          " run",
        ],
      };
      return r2;
    }
    if (greater_than(pressed, chain_end)) {
      let r3 = {
        reason: "if_true_run",
        words: [
          "The ",
          "if",
          " was true, so its ",
          braces,
          " runs - it cannot be skipped",
        ],
      };
      return r3;
    }
    return null;
  }
  let plain = not(opens) && not(previous_text.startsWith("}"));
  if (plain && equal(due, previous + 1)) {
    let r4 = {
      reason: "next_after",
      words: [
        "The previous line has no ",
        "{ }",
        ". Therefore the next line is the line right after the previous",
      ],
    };
    return r4;
  }
  return null;
}
