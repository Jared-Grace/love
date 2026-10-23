import { arguments_assert } from "./arguments_assert.mjs";
import { list_size } from "./list_size.mjs";
import { less_than } from "./less_than.mjs";
import { list_get } from "./list_get.mjs";
import { property_get } from "./property_get.mjs";
import { equal } from "./equal.mjs";
export function app_code_program_step_order_words(actions, k, option_kind) {
  arguments_assert(arguments, 3);
  ("why a choice is not the step now when the line does it at another time: later, or already done. Returns null when the line never does it, and otherwise {reason, words}, words and code taking turns. actions is the line's steps in order and k the one asked now. 2026-10-23, at the human's asking: a choice the line makes later, or made earlier, gets a good explanation rather than a plain miss. The rule is said rather than the answer, so the learner still finds the step. Not picked: naming the step that comes first, which hands over the answer");
  let size = list_size(actions);
  ("past the last step, the step asked is saying the line is complete");
  let kind = "complete";
  if (less_than(k, size)) {
    let step = list_get(actions, k);
    kind = property_get(step, "kind");
  }
  if (equal(option_kind, kind)) {
    return null;
  }
  let at = -1;
  let index = 0;
  for (let item of actions) {
    let left = property_get(item, "kind");
    if (equal(left, option_kind) && equal(at, -1)) {
      at = index;
    }
    index = index + 1;
  }
  if (equal(at, -1)) {
    return null;
  }
  let past = {
    declare: "declared its variable",
    evaluate: "solved its expression",
    assign: "assigned its value",
    log: "logged its value",
    expand: "been written the long way",
  };
  if (less_than(at, k)) {
    let r = {
      reason: "done_already",
      words: [
        "This line has already " +
          property_get(past, option_kind) +
          ", and each step of a line is done once",
      ],
    };
    return r;
  }
  if (equal(kind, "declare")) {
    let r2 = {
      reason: "declare_first",
      words: [
        "This app takes a ",
        "let",
        " line in this order: declare the name, then solve the right of the ",
        "=",
        ", then assign",
      ],
    };
    return r2;
  }
  if (equal(kind, "evaluate") && equal(option_kind, "assign")) {
    let r3 = {
      reason: "evaluate_first",
      words: [
        "A value is assigned once it is solved: the right of the ",
        "=",
        " is solved to one value first, then that value is assigned",
      ],
    };
    return r3;
  }
  if (equal(kind, "evaluate") && equal(option_kind, "log")) {
    let r4 = {
      reason: "evaluate_first",
      words: [
        "A value is logged once it is solved: what is inside ",
        "console.log( )",
        " is solved to one value first, then that value is logged",
      ],
    };
    return r4;
  }
  let gerund = {
    declare: "Declaring a variable",
    evaluate: "Solving an expression",
    assign: "Assigning a value",
    log: "Logging a value",
    expand: "Writing it the long way",
  };
  let r5 = {
    reason: "later",
    words: [
      property_get(gerund, option_kind) +
        " comes later in this line; another step comes first",
    ],
  };
  return r5;
}
