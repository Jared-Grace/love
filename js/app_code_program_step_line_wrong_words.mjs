import { arguments_assert } from "./arguments_assert.mjs";
import { list_get } from "./list_get.mjs";
import { equal } from "./equal.mjs";
import { subtract } from "./subtract.mjs";
import { app_code_braces_dots } from "./app_code_braces_dots.mjs";
import { less_than } from "./less_than.mjs";
import { not } from "./not.mjs";
import { greater_than } from "./greater_than.mjs";
import { less_than_equal } from "./less_than_equal.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
import { app_code_program_line_enclosing } from "./app_code_program_line_enclosing.mjs";
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
  let due = list_get(trace, index).line;
  if (equal(index, 0)) {
    let r = {
      reason: "first_line",
      words: [
        "The line at the top always runs first. This line is not at the top",
      ],
    };
    return r;
  }
  let index2 = subtract(index, 1);
  let previous = list_get(trace, index2).line;
  let previous_text = list_get(lines, previous).trim();
  let braces = app_code_braces_dots();
  let opens = previous_text.endsWith("{");
  if (opens && previous_text.includes("if (")) {
    ("where the if's own { ... } closes, and where the whole if closes, else and all: a } followed by else carries on into the else. The count starts inside the { the if line ends with, since a line like } else if (b) { also starts with a }");
    let depth = 1;
    let block_end = -1;
    let chain_end = -1;
    for (
      let j = previous + 1;
      less_than(j, lines.length) && equal(chain_end, -1);
      j++
    ) {
      let text = list_get(lines, j);
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
    let has_else = list_get(lines, block_end).trim().startsWith("} else");
    let b2 = equal(due, previous + 1);
    if (not(b2)) {
      ("2026-10-23, the human's words for an if that was false, with are ran said as run: the line due is not the one right after the if, so its { ... } was skipped");
      if (greater_than(pressed, previous) && less_than(pressed, block_end)) {
        let r5 = {
          reason: "if_false_skip",
          words: [
            "The ",
            "if",
            " was false, so its ",
            braces,
            " is skipped - none of the lines inside the ",
            "if (...) " + braces,
            " run",
          ],
        };
        return r5;
      }
      ("2026-10-23, the human's words for pressing a later } else if line while an earlier one is due, with are ran said as run: each is checked in turn, so none is passed over. Said for any line pressed further down the chain, not only another } else if: a line inside a later branch is reached past the one due just the same");
      if (
        equal(due, block_end) &&
        list_get(lines, due).trim().startsWith("} else if (") &&
        greater_than(pressed, block_end) &&
        less_than_equal(pressed, chain_end)
      ) {
        let r8 = {
          reason: "else_if_order",
          words: [
            "The ",
            "} else if (...) {",
            " lines run in order until ",
            "...",
            " is true - You skipped a ",
            "} else if (...) {",
            " line",
          ],
        };
        return r8;
      }
      if (
        has_else &&
        greater_than_equal(due, block_end) &&
        less_than_equal(due, chain_end) &&
        greater_than(pressed, chain_end)
      ) {
        let r6 = {
          reason: "if_false_else",
          words: [
            "The ",
            "if",
            " was false, so its ",
            "else " + braces,
            " runs - ",
            "else " + braces,
            " cannot be skipped",
          ],
        };
        return r6;
      }
      return null;
    }
    if (
      greater_than_equal(pressed, block_end) &&
      less_than_equal(pressed, chain_end) &&
      has_else
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
    ("2026-10-23, the human's words for a plain line inside a { ... }, with is ran said as runs: there the next line runs unless something jumps out, which a line with no { } of its own does not");
    if (
      greater_than(app_code_program_line_enclosing(lines, previous).length, 0)
    ) {
      let r7 = {
        reason: "next_inside",
        words: [
          "There is no ",
          "continue",
          ", ",
          "return",
          ", ",
          "Error",
          " or ",
          braces,
          " structure. So inside a ",
          braces,
          " the next line runs",
        ],
      };
      return r7;
    }
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
