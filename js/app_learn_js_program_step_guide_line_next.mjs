import { arguments_assert } from "./arguments_assert.mjs";
import { list_size } from "./list_size.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
import { list_get_property } from "./list_get_property.mjs";
import { list_get } from "./list_get.mjs";
import { property_get_or } from "./property_get_or.mjs";
import { null_is } from "./null_is.mjs";
import { text_trim } from "./text_trim.mjs";
import { property_get } from "./property_get.mjs";
import { app_learn_js_program_step_entry_start_is } from "./app_learn_js_program_step_entry_start_is.mjs";
import { equal } from "./equal.mjs";
import { subtract } from "./subtract.mjs";
import { property_exists } from "./property_exists.mjs";
import { text_to } from "./text_to.mjs";
import { app_learn_js_braces_dots } from "./app_learn_js_braces_dots.mjs";
import { app_learn_js_program_step_loop_keyword } from "./app_learn_js_program_step_loop_keyword.mjs";
import { list_concat } from "./list_concat.mjs";
import { add } from "./add.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { not } from "./not.mjs";
import { less_than } from "./less_than.mjs";
export function app_learn_js_program_step_guide_line_next(lines, trace, index) {
  arguments_assert(arguments, 3);
  ("what a guided example says while it asks which line runs next: why that line, and then which to choose. Each sentence is a list of parts, words and code taking turns, the way every sentence in this app that holds code is written.");
  ("Asked for by the human 2026-10-14, in words modelled on the order lesson's guided example: We always run the first line of code; the line at the top. Choose: ...");
  ("Why a line runs next is read off the line that ran before it. After an if, it is the condition's value that decides; after any other line, the next line down runs, unless that line was the last of its { } to run, when the computer goes on below the }. Which { ... } is run and which is not is now said too, at the human's asking 2026-10-14; first not picked because the lesson Does this section run? already teaches it.");
  let size = list_size(trace);
  if (greater_than_equal(index, size)) {
    let r = [["No line is left to run"], ["Choose: The program is complete"]];
    return r;
  }
  let line = list_get_property(trace, index, "line");
  let message = list_get(lines, line);
  ("2026-11-04: where only a piece of the line runs, the piece is what is chosen");
  let entry_due = list_get(trace, index);
  let piece_due = property_get_or(entry_due, "piece", null);
  let text = null_is(piece_due)
    ? text_trim(message)
    : property_get(piece_due, "text");
  let choose = ["Choose: ", text];
  if (app_learn_js_program_step_entry_start_is(entry_due)) {
    ("2026-11-04: the code before a for's first ; runs before the rest of its line, whatever ran before it, so this is said ahead of the rule for the first line");
    let r18 = [
      ["The code before the first ", ";", " runs first, and only once"],
      choose,
    ];
    return r18;
  }
  if (equal(index, 0)) {
    let r2 = [
      ["We always run the first line of code; the line at the top"],
      choose,
    ];
    return r2;
  }
  let index2 = subtract(index, 1);
  let before = list_get(trace, index2);
  if (property_get_or(before, "break", false)) {
    ("2026-11-14, at the human's asking, for the break lesson: after a break, the loop is over, so the next line is the one below the loop's }, not the next one down nor the loop's own line");
    let r20 = [
      [
        "The ",
        "break",
        " ended the loop, so the computer goes on below the loop's ",
        "}",
      ],
      choose,
    ];
    return r20;
  }
  if (property_exists(before, "condition")) {
    let value = property_get(before, "condition");
    let said = text_to(value);
    let alternate = property_get(before, "alternate");
    let braces = app_learn_js_braces_dots();
    ("2026-10-28: a while line is not an if and has no else, so its two outcomes are said in its own words: true runs the { ... } for the while, false ends the loop. Found reading the first while step lesson, which said the else was not run.");
    if (equal(alternate, "loop")) {
      let line_loop = property_get(before, "line");
      let keyword = app_learn_js_program_step_loop_keyword(lines, line_loop);
      let loop_runs = [
        "The condition is ",
        said,
        ", so the ",
        braces,
        " for the ",
        keyword,
      ];
      if (value) {
        let concated = list_concat(loop_runs, [" is run"]);
        let r11 = [concated, choose];
        return r11;
      }
      let concated2 = list_concat(loop_runs, [" is not run"]);
      let r12 = [
        concated2,
        ["The loop is done, so the computer goes on below the ", "}"],
        choose,
      ];
      return r12;
    }
    ("2026-10-14, the human asked the if and else explained more, in these words for a false condition with an else: the { ... } for the if is not ran, so the { ... } for the else is ran, instead. Written with run for ran. The true case and the other two shapes after an if are said the same way, so the four read as one rule");
    let runs = [
      "The condition is ",
      said,
      ", so the ",
      braces,
      " for the ",
      "if",
      " is run",
    ];
    if (value) {
      if (equal(alternate, "none")) {
        let r3 = [runs, choose];
        return r3;
      }
      let r9 = [
        runs,
        ["So the ", braces, " for the ", "else", " is not run"],
        choose,
      ];
      return r9;
    }
    if (equal(alternate, "else")) {
      let r4 = [
        [
          "The condition is ",
          said,
          ", so the ",
          braces,
          " for the ",
          "if",
          " is not run, so the ",
          braces,
          " for the ",
          "else",
          " is run, instead",
        ],
        choose,
      ];
      return r4;
    }
    if (equal(alternate, "else_if")) {
      let r7 = [
        [
          "The condition is ",
          said,
          ", so the ",
          braces,
          " for the ",
          "if",
          " is not run, so the ",
          "else if",
          " is checked, instead",
        ],
        choose,
      ];
      return r7;
    }
    let r8 = [
      [
        "The condition is ",
        said,
        ", so the ",
        braces,
        " for the ",
        "if",
        " is not run",
      ],
      ["There is no ", "else", ", so the computer goes on below the ", "}"],
      choose,
    ];
    return r8;
  }
  let line_before = property_get(before, "line");
  let right = add(line_before, 1);
  if (null_not_is(piece_due)) {
    ("2026-11-04: a for with code after its second ; goes three ways, and none of them is the next line down or back to the top of the for alone");
    if (equal(line, line_before)) {
      if (app_learn_js_program_step_entry_start_is(before)) {
        let r19 = [
          [
            "That code is done, so the computer checks the condition (what's in between the two ",
            ";",
            ")",
          ],
          choose,
        ];
        return r19;
      }
      let r14 = [
        ["That code is done, so the computer checks the condition again"],
        choose,
      ];
      return r14;
    }
    let b = property_exists(entry_due, "condition");
    if (not(b)) {
      let r17 = app_learn_js_braces_dots();
      let r15 = [
        [
          "Nothing more runs inside this ",
          r17,
          ", so the computer goes back up to the code after the second ",
          ";",
        ],
        choose,
      ];
      return r15;
    }
    let r16 = [
      ["The line under it runs next, and the condition runs first"],
      choose,
    ];
    return r16;
  }
  if (equal(line, right)) {
    let r5 = [["The line under it runs next"], choose];
    return r5;
  }
  let r10 = app_learn_js_braces_dots();
  ("2026-10-28: a line above the one before it is reached only by a loop going round again, so it is said as going back up, not on below.");
  if (less_than(line, line_before)) {
    let keyword2 = app_learn_js_program_step_loop_keyword(lines, line);
    let r13 = [
      [
        "Nothing more runs inside this ",
        r10,
        ", so the computer goes back up to the ",
        keyword2,
        " line, to check its condition again",
      ],
      choose,
    ];
    return r13;
  }
  let r6 = [
    [
      "Nothing more runs inside this ",
      r10,
      ", so the computer goes on below it",
    ],
    choose,
  ];
  return r6;
}
