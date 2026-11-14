import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { list_size } from "./list_size.mjs";
import { app_learn_js_program_step_complete_words } from "./app_learn_js_program_step_complete_words.mjs";
import { greater_than } from "./greater_than.mjs";
import { equal } from "./equal.mjs";
import { list_get } from "./list_get.mjs";
import { property_get_or } from "./property_get_or.mjs";
import { app_learn_js_program_step_loop_keyword } from "./app_learn_js_program_step_loop_keyword.mjs";
import { subtract } from "./subtract.mjs";
import { list_includes } from "./list_includes.mjs";
import { not } from "./not.mjs";
import { list_last_property } from "./list_last_property.mjs";
import { js_value_code } from "./js_value_code.mjs";
import { list_concat } from "./list_concat.mjs";
import { null_is } from "./null_is.mjs";
import { property_exists } from "./property_exists.mjs";
export function app_learn_js_program_step_guide_action(lines, entry, k, noun) {
  arguments_assert(arguments, 4);
  ("2026-11-01: lines, the program's lines, is handed in so a loop line is called by the word it starts with, while or for");
  let actions = property_get(entry, "actions");
  ("what a guided example says while it asks what a line does next: what kind of line it is, the first time it is asked about, and then which to choose. Each sentence is a list of parts, words and code taking turns.");
  ("Asked for by the human 2026-10-14, whose words for a let line are these: This is a let declaration and assign statement. These declare a variable. Then they solve the expression on the right if needed. Finally they assign a value. First, choose ... and then: This expression is already solved to a single value, so it doesn't need solving. So choose assign a value.");
  ("Which kind of line it is, is read off what it does: a line that declares is a let, a line that logs is a console.log, and any other line here is an if. Not picked: reading it off the line's text, which would be a second answer to a question the trace already answers.");
  ("2026-10-14, the human asked for the line spacing of the order lesson's guide, so each sentence is its own line and a sentence never holds two; and for if, (...), true and false written as code. The parentheses are (...), as the human asked the same day, so their dots are drawn grey as the dots in { ... } are, by the one code writer every sentence goes through. Evaluate an expression is said Solve an expression, as the human asked, the same words the option carries");
  let kinds = list_map_property(actions, "kind");
  let size = list_size(actions);
  let complete = [
    "So choose: " + app_learn_js_program_step_complete_words(noun),
  ];
  ("2026-10-28: a line run again starts by being reset, so what is said the first time a line is asked about is said at the step after the reset");
  let start = 0;
  if (
    greater_than(size, 0) &&
    equal(property_get(list_get(actions, 0), "kind"), "reset")
  ) {
    start = 1;
  }
  let if_is = ["This is an ", "if", " statement"];
  ("2026-10-28: a while line is said to be a while, read off the trace, which marks the condition of a loop");
  let left = property_get_or(entry, "alternate", null);
  if (equal(left, "loop")) {
    let line = property_get(entry, "line");
    let keyword = app_learn_js_program_step_loop_keyword(lines, line);
    if_is = ["This is a ", keyword, " statement"];
  }
  let if_solves = [
    "It solves the condition inside the ",
    "(...)",
    " to ",
    "true",
    " or ",
    "false",
  ];
  let solve = ["So choose: Solve an expression"];
  if (equal(k, size)) {
    if (property_get_or(entry, "break", false)) {
      ("2026-11-14, at the human's asking, for the break lesson: a break line has nothing to solve, so it is said what it does, and then that the line is complete");
      let r31 = [
        ["This is a ", "break", " statement"],
        ["It ends the loop it is in, at once; there is nothing to solve"],
        complete,
      ];
      return r31;
    }
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
    let r2 = [["Everything this " + noun + " does is done"], complete];
    return r2;
  }
  let action = list_get(actions, k);
  let kind = property_get(action, "kind");
  ("2026-11-13: a pop just before gave back the item it took off, so what it stood in is solved, as an evaluate leaves it");
  let kind_before = null;
  if (greater_than(k, 0)) {
    let index = subtract(k, 1);
    let object = list_get(actions, index);
    kind_before = property_get(object, "kind");
  }
  let solved_before =
    equal(kind_before, "evaluate") || equal(kind_before, "pop");
  ("2026-10-15, at the human's asking: a line giving a name a new value, as a = 5; does, assigns without declaring, so the first time it is asked about it says so in the let line's words for its assign. Not picked: saying nothing of what kind of line it is, as the other kinds each say");
  let assigns_only =
    list_includes(kinds, "assign") && not(list_includes(kinds, "declare"));
  let intro = [];
  if (assigns_only && equal(k, start)) {
    let name3 = list_last_property(actions, "name");
    intro = [
      ["This is an assign (", "=", ") statement, with no ", "let"],
      [
        "The variable named ",
        name3,
        " was declared before, so it is not declared again",
      ],
      ["It will be given a value of whatever is to the right of the ", "="],
    ];
  }
  if (equal(kind, "reset")) {
    ("2026-10-28, at the human's asking: a line run again still shows the values solved into it the last time it ran, and those values may no longer be true, so it is put back the way it is written first");
    let line2 = property_get(entry, "line");
    let keyword2 = app_learn_js_program_step_loop_keyword(lines, line2);
    let r23 = [
      [
        "This ",
        keyword2,
        " ran before, so it and the lines inside its { } still show the values solved into them then",
      ],
      [
        "Those values may have changed since, so the whole block goes back to how it is written",
      ],
      ["First, choose: Reset the block"],
    ];
    return r23;
  }
  if (equal(kind, "expand")) {
    ("2026-10-15, at the human's asking: a += b; is said to be the shorter way to write a = a + b;, the words its lesson teaches it by. 2026-10-21, at the human's asking: writing it the long way is then chosen, and every step after is asked of the long line");
    let compound = property_get(action, "compound");
    let written = property_get(action, "written");
    let name4 = property_get(action, "name");
    let r22 = [
      ["This is a ", compound, " statement, a shorter way to write ", written],
      [
        "The variable named ",
        name4,
        " was declared before, so it is not declared again",
      ],
      ["First, choose: Write it the long way"],
    ];
    return r22;
  }
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
    let value = property_get(action, "value");
    let code = js_value_code(value);
    let r5 = [
      ["", code, " is already a solved value, so no solving is needed"],
      ["So choose: Assign a value"],
    ];
    let concated = list_concat(intro, r5);
    return concated;
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
    let value2 = property_get(action, "value");
    let code2 = js_value_code(value2);
    let r7 = [
      logs,
      ["", code2, " is already a solved value, so no solving is needed"],
      ["So choose: Log a value to the console"],
    ];
    return r7;
  }
  ("2026-11-13, at the human's asking, for Adding to an array: a push line says what it does, which array it adds to and where, the first time it is asked about, in the words of the lesson teaching it");
  ("2026-11-13: only a push line's last action has a name to add to; a log line such as console.log(a[a.length - 1]) ends in a log, which has none");
  let push_name = list_includes(kinds, "push")
    ? list_last_property(actions, "name")
    : null;
  ("2026-11-14, at the human's asking, for Adding to the front and Taking off the front: an unshift and a shift say the front where a push and a pop say the end, each in the words of the lesson teaching it");
  let push_method = list_includes(kinds, "push")
    ? list_last_property(actions, "method")
    : "push";
  let push_end = equal(push_method, "unshift") ? "front" : "end";
  let pushes_to = [
    "This adds an item to the " + push_end + " of the array named ",
    push_name,
  ];
  ("2026-11-13, at the human's asking: a function called is solved as an expression is, so it is chosen as Solve an expression. Not picked: a choice of its own, Call a function, built first, which made the list of choices grow and set calls apart from Math.floor( ), already solved as an expression");
  let push_choose = [
    "A function called is solved as an expression is, so choose: Solve an expression",
  ];
  if (equal(kind, "pop")) {
    ("2026-11-13, at the human's asking, for Taking an item off: a pop says what it does, in the words of the lesson teaching it. Standing inside a line, as console.log(a.pop()) does, it also says it runs first, since what it gives back is what the line uses");
    let pop_name = property_get(action, "name");
    let pop_method = property_get(action, "method");
    let pop_code = pop_name + "." + pop_method + "()";
    let shift_is = equal(pop_method, "shift");
    let pop_which = shift_is ? "first" : "last";
    let pop_end = shift_is ? "front" : "end";
    let takes = [
      "This takes the " +
        pop_which +
        " item off the " +
        pop_end +
        " of the array named ",
      pop_name,
    ];
    if (property_get_or(action, "into", false)) {
      let pop_lead = list_includes(kinds, "log") ? [logs] : [];
      let r29 = [
        ...pop_lead,
        [
          "The value is ",
          pop_code,
          ", which takes the " + pop_which + " item off ",
          pop_name,
          " and gives it back, so it runs first",
        ],
        push_choose,
      ];
      return r29;
    }
    let r30 = [takes, push_choose];
    return r30;
  }
  if (equal(kind, "push")) {
    if (solved_before) {
      let r24 = [
        ["The item is solved, so the " + push_method + " itself is next"],
        push_choose,
      ];
      return r24;
    }
    let value3 = property_get(action, "value");
    let code3 = js_value_code(value3);
    let r25 = [
      pushes_to,
      [
        "",
        code3,
        " is already a solved value, so the " + push_method + " itself is next",
      ],
      push_choose,
    ];
    return r25;
  }
  ("2026-10-15: what kind of line a log or an if is, is said only the first time the line is asked about; a line solving a name and then an operator would otherwise say it again before each");
  let first = equal(k, start);
  let lead_log = first ? [logs] : [];
  let lead_if = first ? [if_is, if_solves] : [];
  let lead_push = first ? [pushes_to] : [];
  let push_is = list_includes(kinds, "push");
  let name = property_get(action, "name");
  let expression = property_get(action, "expression");
  let b = null_is(expression);
  if (not(b)) {
    ("2026-10-15: an operator between two values, such as 9 + 7, is not a name, so it is called by what it is, in the words each kind of line uses for a name");
    let operated = ", which has an operator, so it needs solving";
    ("2026-10-15, at the human's asking: an expression holding more than one operator, as a + b + c does, is named whole, as it reads now, and the operator to solve next is named after it, since one is solved at a time; an expression with one operator is the operator itself, and is said as before");
    let whole = property_get(action, "whole");
    function said_of(ending) {
      "2026-10-17: an expression solved whole, its operators pressed in the order they go, is said to have more than one operator and to be solved one at a time, since the learner is about to choose which goes first";
      if (property_exists(action, "tree")) {
        let r21 = [
          whole,
          ", which has more than one operator, so it is solved one operator at a time",
        ];
        return r21;
      }
      if (equal(whole, name)) {
        let r19 = [whole, operated + ending];
        return r19;
      }
      let r20 = [
        whole,
        operated + ", one operator at a time, starting with ",
        name,
      ];
      return r20;
    }
    if (list_includes(kinds, "assign")) {
      let r12 = [["The expression on the right is ", ...said_of("")], solve];
      let concated2 = list_concat(intro, r12);
      return concated2;
    }
    if (list_includes(kinds, "log")) {
      let r11 = list_concat(lead_log, [
        ["The value is ", ...said_of(" first")],
        solve,
      ]);
      return r11;
    }
    if (push_is) {
      let r26 = list_concat(lead_push, [
        ["The item is ", ...said_of(" first")],
        solve,
      ]);
      return r26;
    }
    let r13 = list_concat(lead_if, [
      ["The condition is ", ...said_of("")],
      solve,
    ]);
    return r13;
  }
  let within = property_get(action, "within");
  let b2 = null_is(within);
  if (not(b2)) {
    ("2026-10-15, at the human's asking: a name standing in an operator's expression, as a in a + 1, is said to be in it, and to need solving before the operator can be");
    let inside = [
      ", which has the name ",
      name,
      " in it, so ",
      name,
      " needs solving first",
    ];
    if (list_includes(kinds, "assign")) {
      let r14 = [["The expression on the right is ", within, ...inside], solve];
      let concated4 = list_concat(intro, r14);
      return concated4;
    }
    if (list_includes(kinds, "log")) {
      let r15 = list_concat(lead_log, [
        ["The value is ", within, ...inside],
        solve,
      ]);
      return r15;
    }
    if (push_is) {
      let r27 = list_concat(lead_push, [
        ["The item is ", within, ...inside],
        solve,
      ]);
      return r27;
    }
    let r16 = list_concat(lead_if, [
      ["The condition is ", within, ...inside],
      solve,
    ]);
    return r16;
  }
  if (list_includes(kinds, "assign")) {
    let r8 = [
      [
        "The expression on the right is the name ",
        name,
        ", so it needs solving",
      ],
      solve,
    ];
    let concated3 = list_concat(intro, r8);
    return concated3;
  }
  if (list_includes(kinds, "log")) {
    let r9 = list_concat(lead_log, [
      ["The value is the name ", name, ", so it needs solving first"],
      solve,
    ]);
    return r9;
  }
  if (push_is) {
    let r28 = list_concat(lead_push, [
      ["The item is the name ", name, ", so it needs solving first"],
      solve,
    ]);
    return r28;
  }
  let r10 = list_concat(lead_if, [
    ["The condition is the name ", name, ", so it needs solving"],
    solve,
  ]);
  return r10;
}
