import { arguments_assert } from "./arguments_assert.mjs";
import { list_size } from "./list_size.mjs";
import { less_than } from "./less_than.mjs";
import { list_get } from "./list_get.mjs";
import { property_get } from "./property_get.mjs";
import { equal } from "./equal.mjs";
import { js_value_code } from "./js_value_code.mjs";
import { subtract } from "./subtract.mjs";
import { null_is } from "./null_is.mjs";
import { app_code_program_step_assign_none_words } from "./app_code_program_step_assign_none_words.mjs";
export function app_code_program_step_order_words(
  actions,
  k,
  option_kind,
  line_text,
) {
  arguments_assert(arguments, 4);
  ("why a choice is not the step now when the line does it at another time: later, or already done, or the line said complete with a step still to do. Returns null when none of these is so, and otherwise {reason, words}, words and code taking turns. actions is the line's steps in order and k the one asked now. 2026-10-23, at the human's asking: a choice the line makes later, or made earlier, gets a good explanation rather than a plain miss. The rule is said rather than the answer, so the learner still finds the step. Not picked: naming the step that comes first, which hands over the answer");
  ("2026-10-23, at the human's asking, whose words were: This line doesn't have a // yet, so it hasn't been declared; The // still has undefined as its value, so it hasn't been assigned yet. So each reason points at a sign on the screen - the // line, the value it shows, what is right of the =, the output - that says whether a step has happened. Not picked: the order rule alone, as it was, which the learner had to take on trust");
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
  let name = null;
  let value = null;
  let solved = null;
  let declared = false;
  let assigned = false;
  let logged = false;
  for (let item of actions) {
    let left = property_get(item, "kind");
    if (equal(left, option_kind) && equal(at, -1)) {
      at = index;
    }
    if (equal(left, "declare")) {
      declared = true;
      name = property_get(item, "name");
    }
    if (equal(left, "evaluate")) {
      ("the last piece solved is the whole, so its value is what the line comes to");
      let value2 = property_get(item, "value");
      solved = js_value_code(value2);
    }
    if (equal(left, "assign")) {
      assigned = true;
      name = property_get(item, "name");
      let value3 = property_get(item, "value");
      value = js_value_code(value3);
    }
    if (equal(left, "log")) {
      logged = true;
      let value4 = property_get(item, "value");
      value = js_value_code(value4);
    }
    index = index + 1;
  }
  ("where the value is solved: inside the ( ) on a line that logs, right of the = on a line that assigns, and otherwise the condition of an if");
  let solved_in = ["The condition is"];
  if (assigned) {
    solved_in = ["The right of the ", "=", " is"];
  }
  if (logged) {
    solved_in = ["What is inside ", "console.log( )", " is"];
  }
  function words_then(words, more) {
    "words followed by more, the last text of words and the first of more joined, so words and code still take turns";
    let joined = [];
    for (let piece of words) {
      joined.push(piece);
    }
    let last = subtract(joined.length, 1);
    joined[last] = joined[last] + more[0];
    for (let piece of more.slice(1)) {
      joined.push(piece);
    }
    return joined;
  }
  function sign_not_yet(step_kind) {
    "what on the screen shows a step has not happened yet";
    if (equal(step_kind, "declare")) {
      let r7 = [
        "",
        name,
        " has no ",
        "//",
        " line yet, so it has not been declared",
      ];
      return r7;
    }
    if (equal(step_kind, "evaluate")) {
      let r8 = words_then(solved_in, [
        " not one value yet, so it has not been solved",
      ]);
      return r8;
    }
    if (equal(step_kind, "assign")) {
      if (declared) {
        let r9 = [
          "The ",
          "//",
          " line of ",
          name,
          " still has ",
          "undefined",
          " as its value, so it has not been assigned yet",
        ];
        return r9;
      }
      let r10 = [
        "The ",
        "//",
        " line of ",
        name,
        " still has its old value, so it has not been assigned yet",
      ];
      return r10;
    }
    if (equal(step_kind, "log")) {
      let r11 = [
        "The output does not show this line's value yet, so it has not been logged",
      ];
      return r11;
    }
    if (equal(step_kind, "reset")) {
      let r22 = [
        "This line still shows the values solved into it the last time it ran, so it has not been reset",
      ];
      return r22;
    }
    let r12 = ["This line is still written the short way"];
    return r12;
  }
  function sign_done(step_kind) {
    "what on the screen shows a step has happened already";
    if (equal(step_kind, "declare")) {
      let r13 = [
        "",
        name,
        " already has its ",
        "//",
        " line, so it has already been declared",
      ];
      return r13;
    }
    if (equal(step_kind, "evaluate")) {
      let r14 = words_then(solved_in, [
        " already one value, ",
        solved,
        ", so it has already been solved",
      ]);
      return r14;
    }
    if (equal(step_kind, "assign")) {
      let r15 = [
        "The ",
        "//",
        " line of ",
        name,
        " already has ",
        value,
        " as its value, so it has already been assigned",
      ];
      return r15;
    }
    if (equal(step_kind, "log")) {
      let r16 = [
        "The output already shows ",
        value,
        ", so it has already been logged",
      ];
      return r16;
    }
    if (equal(step_kind, "reset")) {
      let r23 = [
        "This line is already back to how it is written, so it has already been reset",
      ];
      return r23;
    }
    let r17 = ["This line is already written the long way"];
    return r17;
  }
  if (equal(option_kind, "complete")) {
    let v = sign_not_yet(kind);
    let r = {
      reason: "complete_early",
      words: words_then(v, [". So this line is not complete yet"]),
    };
    return r;
  }
  if (equal(at, -1) && equal(option_kind, "expand")) {
    ("2026-10-23, at the human's asking: writing it the long way, chosen on a line with no shorter way in it, says what a shorter way looks like, so the learner can see this line has none; shown with the line's own name where it has one");
    let shown = null_is(name) ? "a" : name;
    let r18 = {
      reason: "long_already",
      words: [
        "Only a line written the shorter way, like ",
        shown + " += 1;",
        " or ",
        shown + "++;",
        ", has a long way to write. This line has no ",
        "+=",
        " or ",
        "++",
        ", so it is already written the long way",
      ],
    };
    return r18;
  }
  if (equal(at, -1) && equal(option_kind, "declare")) {
    ("2026-10-23, at the human's asking, whose words were: if a line has let then it needs a declare; however this line doesn't have let. Said one way only, if and not only if, so it stays true once var or const is taught; and only let is named, the one way to declare this course has taught so far. Not picked: This line doesn't have let, so no declare, which says let is the only way");
    let r19 = {
      reason: "declare_none",
      words: [
        "If a line has ",
        "let",
        ", then it needs a declare. However, this line doesn't have ",
        "let",
      ],
    };
    return r19;
  }
  if (equal(at, -1) && equal(option_kind, "assign")) {
    ("line_text is the line as written, so the words can name an operator holding = that is not an assign");
    let r20 = {
      reason: "assign_none",
      words: app_code_program_step_assign_none_words(line_text),
    };
    return r20;
  }
  if (equal(at, -1) && equal(option_kind, "log")) {
    ("2026-10-23, at the human's asking, in their words: Logging to the console needs console.log(...) - but there is no console.log(...)");
    let r21 = {
      reason: "log_none",
      words: [
        "Logging to the console needs ",
        "console.log(...)",
        " - but there is no ",
        "console.log(...)",
      ],
    };
    return r21;
  }
  if (equal(at, -1) && equal(option_kind, "reset")) {
    ("2026-10-28: Reset the line, chosen on a line running for the first time, says why there is nothing to put back");
    let r24 = {
      reason: "reset_none",
      words: [
        "Only a line that ran before still shows values solved into it. This line has not run before, so there is nothing to reset",
      ],
    };
    return r24;
  }
  if (equal(at, -1)) {
    return null;
  }
  if (less_than(at, k)) {
    let r2 = {
      reason: "done_already",
      words: sign_done(option_kind),
    };
    return r2;
  }
  let not_yet = sign_not_yet(kind);
  if (equal(kind, "declare")) {
    let r3 = {
      reason: "declare_first",
      words: words_then(not_yet, [
        ". This app takes a ",
        "let",
        " line in this order: declare the name, then solve the right of the ",
        "=",
        ", then assign",
      ]),
    };
    return r3;
  }
  if (equal(kind, "evaluate") && equal(option_kind, "assign")) {
    let r4 = {
      reason: "evaluate_first",
      words: words_then(not_yet, [
        ", and a value is assigned once it is solved",
      ]),
    };
    return r4;
  }
  if (equal(kind, "evaluate") && equal(option_kind, "log")) {
    let r5 = {
      reason: "evaluate_first",
      words: words_then(not_yet, [", and a value is logged once it is solved"]),
    };
    return r5;
  }
  let r6 = {
    reason: "later",
    words: words_then(not_yet, [", and that comes first"]),
  };
  return r6;
}
