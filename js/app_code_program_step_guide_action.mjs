import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { list_size } from "./list_size.mjs";
import { equal } from "./equal.mjs";
import { list_get } from "./list_get.mjs";
import { greater_than } from "./greater_than.mjs";
import { subtract } from "./subtract.mjs";
import { list_includes } from "./list_includes.mjs";
export function app_code_program_step_guide_action(entry, k) {
  arguments_assert(arguments, 2);
  let actions = property_get(entry, "actions");
  ("what a guided example says while it asks what a line does next: what kind of line it is, the first time it is asked about, and then which to choose. Each sentence is a list of parts, words and code taking turns.");
  ("Asked for by the human 2026-10-14, whose words for a let line are these: This is a let declaration and assign statement. These declare a variable. Then they solve the expression on the right if needed. Finally they assign a value. First, choose ... and then: This expression is already solved to a single value, so it doesn't need solving. So choose assign a value.");
  ("Which kind of line it is, is read off what it does: a line that declares is a let, a line that logs is a console.log, and any other line here is an if. Not picked: reading it off the line's text, which would be a second answer to a question the trace already answers.");
  ("2026-10-14, the human asked for the line spacing of the order lesson's guide, so each sentence is its own line and a sentence never holds two; and for if, ( ), true and false written as code. Evaluate an expression is said Solve an expression, as the human asked, the same words the option carries");
  let kinds = list_map_property(actions, "kind");
  let size = list_size(actions);
  let complete = [
    "So choose: This line is complete; continue to the next line",
  ];
  let if_is = ["This is an ", "if", " statement"];
  let if_solves = [
    "It solves the condition inside the ",
    "( )",
    " to ",
    "true",
    " or ",
    "false",
  ];
  let solve = ["So choose: Solve an expression"];
  if (equal(k, size)) {
    if (equal(size, 0)) {
      let r = [
        if_is,
        if_solves,
        [
          "This condition is already ",
          "true",
          " or ",
          "false",
          ", so it doesn't need solving",
        ],
        complete,
      ];
      return r;
    }
    let r2 = [["Everything this line does is done"], complete];
    return r2;
  }
  let action = list_get(actions, k);
  let kind = property_get(action, "kind");
  let solved_before =
    greater_than(k, 0) &&
    equal(property_get(list_get(actions, subtract(k, 1)), "kind"), "evaluate");
  if (equal(kind, "declare")) {
    let name2 = property_get(action, "name");
    ("the human's words 2026-10-14, with let and = written as code. They replace the whole first sentence group, which also said the expression on the right is solved if needed. Not picked: keeping that clause, since the guide asking to evaluate says so at the step it happens");
    let r3 = [
      ["This is a ", "let", " declaration and assign (", "=", ") statement"],
      [
        "The declaration means the code is telling JS there is a variable named ",
        name2,
      ],
      [
        "The assign means the variable named ",
        name2,
        " will be given a value of whatever is to the right of the ",
        "=",
      ],
      ["First, choose: Declare a variable"],
    ];
    return r3;
  }
  if (equal(kind, "assign")) {
    if (solved_before) {
      let r4 = [
        ["The expression is solved to a single value"],
        ["So choose: Assign a value"],
      ];
      return r4;
    }
    let r5 = [
      [
        "This expression is already solved to a single value, so it doesn't need solving",
      ],
      ["So choose: Assign a value"],
    ];
    return r5;
  }
  let logs = ["This logs a value to the console"];
  if (equal(kind, "log")) {
    if (solved_before) {
      let r6 = [
        ["The value is solved"],
        ["So choose: Log a value to the console"],
      ];
      return r6;
    }
    let r7 = [
      logs,
      ["The value is already a single value, so it doesn't need solving"],
      ["So choose: Log a value to the console"],
    ];
    return r7;
  }
  let name = property_get(action, "name");
  if (list_includes(kinds, "declare")) {
    let r8 = [
      [
        "The expression on the right is the name ",
        name,
        ", so it needs solving",
      ],
      solve,
    ];
    return r8;
  }
  if (list_includes(kinds, "log")) {
    let r9 = [
      logs,
      ["The value is the name ", name, ", so it needs solving first"],
      solve,
    ];
    return r9;
  }
  let r10 = [
    if_is,
    if_solves,
    ["The condition is the name ", name, ", so it needs solving"],
    solve,
  ];
  return r10;
}
