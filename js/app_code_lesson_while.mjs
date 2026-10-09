import { arguments_assert } from "./arguments_assert.mjs";
import { js_operator_less_than_symbol } from "./js_operator_less_than_symbol.mjs";
import { js_operator_plus_symbol } from "./js_operator_plus_symbol.mjs";
import { less_than_equal } from "./less_than_equal.mjs";
import { add } from "./add.mjs";
import { js_code_binary_spaced_nb } from "./js_code_binary_spaced_nb.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { app_code_remember_from_lesson } from "./app_code_remember_from_lesson.mjs";
import { app_code_lesson_if_thrice } from "./app_code_lesson_if_thrice.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { js_code_assign_operator_statement } from "./js_code_assign_operator_statement.mjs";
import { js_code_if_lines } from "./js_code_if_lines.mjs";
import { js_code_console_log_statement } from "./js_code_console_log_statement.mjs";
import { list_concat_multiple } from "./list_concat_multiple.mjs";
import { app_code_code_lines_writes_out } from "./app_code_code_lines_writes_out.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { app_code_lesson_statement_title_name_id } from "./app_code_lesson_statement_title_name_id.mjs";
import { app_code_lesson_while_generic } from "./app_code_lesson_while_generic.mjs";
import { subtract } from "./subtract.mjs";
export function app_code_lesson_while() {
  arguments_assert(arguments, 0);
  ("the first while: let n = 1; while (n < 9) { n += 3; } console.log(n); writes out 10, the same as if (n < 9) { n += 3; } written three times");
  ("The one new fact is that while asks again after its lines run, and keeps going until what it asks is false, so it does what the same if written over and over does, without the learner counting how many to write.");
  ("Asked for by the human 2026-10-09, as the lesson after The same if three times: the first box writes that program and this one side by side, so the two are seen to write out the same.");
  ("Each screen has four programs drawn from five counts of runs - none, one, two, three and four - so a screen always asks one that runs more often than three ifs could.");
  ("Reading forwards, the wrong answers are n after one run fewer, one run more, and where n starts, each once and never the answer, so stopping a run early or late is offered, and so is reading while as never running.");
  ("Reading backwards, the wrong program is the same program compared against one more than the answer, so it runs once more and writes out the answer plus what is added.");
  ("The numbers are chosen so that n never lands exactly on the number it is compared against, except in the backwards wrong program, as in The same if twice.");
  ("The writing is a first draft by Claude 2026-10-09.");
  let less = js_operator_less_than_symbol();
  let plus = js_operator_plus_symbol();
  let name = "n";
  let groups = [
    [
      [6, 4, 2],
      [9, 5, 3],
    ],
    [
      [3, 5, 4],
      [2, 4, 3],
    ],
    [
      [1, 6, 3],
      [2, 5, 2],
    ],
    [
      [1, 9, 3],
      [2, 7, 2],
    ],
    [
      [1, 8, 2],
      [2, 13, 3],
    ],
  ];
  function possible(start, value) {
    "a wrong answer is never below where n starts, since n only grows";
    let p = less_than_equal(start, value);
    return p;
  }
  function bound_past(ended) {
    let past = add(ended, 1);
    return past;
  }
  function above(root, context, program_lines, said) {
    "the same if three times remembered, then while doing the same, and a while that never runs";
    let condition = js_code_binary_spaced_nb(name, less, 9);
    let box_one = app_code_container_light_blue(root);
    app_code_remember_from_lesson(box_one, context, app_code_lesson_if_thrice, [
      "the same ",
      "if",
      " can be written three times:",
    ]);
    let code = js_code_let_statement(name, 1);
    let change2 = js_code_assign_operator_statement(name, plus, 3);
    let if_lines = js_code_if_lines(condition, change2);
    let statement = js_code_console_log_statement(name);
    let thrice_lines = list_concat_multiple([
      [code],
      if_lines,
      if_lines,
      if_lines,
      [statement],
    ]);
    app_code_code_lines_writes_out(box_one, thrice_lines, "10");
    let box_two = app_code_container_light_blue(root);
    html_div_cycle_code(box_two, [
      "A ",
      "while",
      " does the same, and asks again each time:",
    ]);
    let while_lines = program_lines(1, 9, 3);
    app_code_code_lines_writes_out(box_two, while_lines, "10");
    said(box_two, 1, 9, 4, true);
    said(box_two, 4, 9, 7, true);
    said(box_two, 7, 9, 10, true);
    said(box_two, 10, 9, 10, false);
    let box_three = app_code_container_light_blue(root);
    html_div_cycle_code(box_three, [
      "But suppose ",
      name,
      " starts at ",
      "12",
      ":",
    ]);
    let never_lines = program_lines(12, 9, 3);
    app_code_code_lines_writes_out(box_three, never_lines, "12");
    let never = js_code_binary_spaced_nb(12, less, 9);
    html_div_cycle_code(box_three, [
      "The very first time the ",
      "while",
      " asks, ",
      never,
      " is ",
      "false",
      ", so the ",
      "{ ... }",
      " never runs at all, and the code continues after it",
    ]);
  }
  let name_id = app_code_lesson_statement_title_name_id(
    "While",
    "while (n < 9) { ... }",
  );
  let lesson = app_code_lesson_while_generic({
    name_id,
    comparison: less,
    change: plus,
    groups,
    step: add,
    step_back: subtract,
    possible,
    bound_past,
    above,
  });
  return lesson;
}
