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
  let kinds = list_map_property(actions, "kind");
  let size = list_size(actions);
  if (equal(k, size)) {
    if (equal(size, 0)) {
      let r = [
        [
          "This is an if statement. It solves the condition inside the ( ) to true or false. This condition is already true or false, so it doesn't need solving",
        ],
        ["So choose: This line is complete; continue to the next line"],
      ];
      return r;
    }
    let r2 = [
      ["Everything this line does is done"],
      ["So choose: This line is complete; continue to the next line"],
    ];
    return r2;
  }
  let action = list_get(actions, k);
  let kind = property_get(action, "kind");
  let solved_before =
    greater_than(k, 0) &&
    equal(property_get(list_get(actions, subtract(k, 1)), "kind"), "evaluate");
  if (equal(kind, "declare")) {
    let r3 = [
      [
        "This is a let declaration and assign statement. These declare a variable. Then they solve the expression on the right if needed. Finally they assign a value",
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
  if (equal(kind, "log")) {
    if (solved_before) {
      let r6 = [
        ["The value is solved"],
        ["So choose: Log a value to the console"],
      ];
      return r6;
    }
    let r7 = [
      [
        "This logs a value to the console. The value is already a single value, so it doesn't need solving",
      ],
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
      ["So choose: Evaluate an expression"],
    ];
    return r8;
  }
  if (list_includes(kinds, "log")) {
    let r9 = [
      [
        "This logs a value to the console. The value is the name ",
        name,
        ", so it needs solving first",
      ],
      ["So choose: Evaluate an expression"],
    ];
    return r9;
  }
  let r10 = [
    [
      "This is an if statement. It solves the condition inside the ( ) to true or false. The condition is the name ",
      name,
      ", so it needs solving",
    ],
    ["So choose: Evaluate an expression"],
  ];
  return r10;
}
