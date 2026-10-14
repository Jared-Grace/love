import { arguments_assert } from "./arguments_assert.mjs";
import { list_size } from "./list_size.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
import { list_get } from "./list_get.mjs";
import { property_get } from "./property_get.mjs";
import { text_trim } from "./text_trim.mjs";
import { equal } from "./equal.mjs";
import { subtract } from "./subtract.mjs";
import { property_exists } from "./property_exists.mjs";
import { text_to } from "./text_to.mjs";
import { add } from "./add.mjs";
export function app_code_program_step_guide_line_next(lines, trace, index) {
  arguments_assert(arguments, 3);
  ("what a guided example says while it asks which line runs next: why that line, and then which to choose. Each sentence is a list of parts, words and code taking turns, the way every sentence in this app that holds code is written.");
  ("Asked for by the human 2026-10-14, in words modelled on the order lesson's guided example: We always run the first line of code; the line at the top. Choose: ...");
  ("Why a line runs next is read off the line that ran before it. After an if, it is the condition's value that decides; after any other line, the next line down runs, unless that line was the last of its { } to run, when the computer goes on below the }. Not picked: naming which } and which else are skipped, which is the lesson Does this section run? already teaches, and would make every step here a sentence longer.");
  let size = list_size(trace);
  if (greater_than_equal(index, size)) {
    let r = [["No line is left to run"], ["Choose: The program is complete"]];
    return r;
  }
  let entry = list_get(trace, index);
  let line = property_get(entry, "line");
  let message = list_get(lines, line);
  let text = text_trim(message);
  let choose = ["Choose: ", text];
  if (equal(index, 0)) {
    let r2 = [
      ["We always run the first line of code; the line at the top"],
      choose,
    ];
    return r2;
  }
  let index2 = subtract(index, 1);
  let before = list_get(trace, index2);
  if (property_exists(before, "condition")) {
    let value = property_get(before, "condition");
    let said = text_to(value);
    if (value) {
      let r3 = [
        ["The condition is ", said, ", so the code inside its { } runs next"],
        choose,
      ];
      return r3;
    }
    let r4 = [
      ["The condition is ", said, ", so the code inside its { } is skipped"],
      choose,
    ];
    return r4;
  }
  let line_before = property_get(before, "line");
  let right = add(line_before, 1);
  if (equal(line, right)) {
    let r5 = [["The line under it runs next"], choose];
    return r5;
  }
  let r6 = [
    ["Nothing more runs inside this { }, so the computer goes on below it"],
    choose,
  ];
  return r6;
}
