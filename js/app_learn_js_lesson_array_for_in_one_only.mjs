import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { app_learn_js_code_array_two_loops_push_c } from "./app_learn_js_code_array_two_loops_push_c.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_array_for_in_a_not_b } from "./app_learn_js_lesson_array_for_in_a_not_b.mjs";
import { app_learn_js_lesson_array_for_in_either } from "./app_learn_js_lesson_array_for_in_either.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged_wrong_programs } from "./app_learn_js_lesson_code_logged_wrong_programs.mjs";
import { app_learn_js_array_pairs_overlap } from "./app_learn_js_array_pairs_overlap.mjs";
export function app_learn_js_lesson_array_for_in_one_only() {
  arguments_assert(arguments, 0);
  ("each item that is in one of the two arrays but not the other: let a = [3, 5, 8, 2]; let b = [5, 9, 2, 6]; let c = []; for (...a) { if (!b.includes(a[i])) { c.push(a[i]); } } for (...b) { if (!a.includes(b[i])) { c.push(b[i]); } } console.log(c); writes out [3, 8, 9, 6]");
  ("2026-11-25, at the human's asking, after In either. The one new fact is In a, not in b done both ways round, one loop after the other: the loop over b asks a, the way the loop over a asks b.");
  ("The inputs are those of In both - see ",
    fn_name("app_learn_js_array_pairs_overlap"),
    ". Each array has an item the other does not and they share at least one, so every wrong program writes out something else.");
  ("The wrong programs are: !b.includes(b[i]) in the loop over b (every b[i] is in b, so only a's own items), !c.includes in both loops (In either: the shared items are pushed too) and the questions without ! (only the shared items, each twice).");
  ("The writing is a first draft by Claude 2026-11-25.");
  let example_input = [
    [3, 5, 8, 2],
    [5, 9, 2, 6],
  ];
  function program_of(input) {
    let code = app_learn_js_code_array_two_loops_push_c(
      input,
      "!b.includes(",
      "!a.includes(",
    );
    return code;
  }
  function wrong_programs_of(input2) {
    let v = app_learn_js_code_array_two_loops_push_c(
      input2,
      "!b.includes(",
      "!b.includes(",
    );
    let v2 = app_learn_js_code_array_two_loops_push_c(
      input2,
      "!c.includes(",
      "!c.includes(",
    );
    let v3 = app_learn_js_code_array_two_loops_push_c(
      input2,
      "b.includes(",
      "a.includes(",
    );
    let programs = [v, v2, v3];
    return programs;
  }
  function wrong_outputs_of(input3) {
    let r = [];
    return r;
  }
  function above(root, context) {
    "In a, not in b and the two loops of In either remembered, then In a, not in b both ways round";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_array_for_in_a_not_b,
      [
        "",
        "if (!b.includes(a[i]))",
        " pushes the items in ",
        "a",
        " that are not in ",
        "b",
      ],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_two,
      context,
      app_learn_js_lesson_array_for_in_either,
      [
        "a loop over ",
        "a",
        " and then a loop over ",
        "b",
        " can push from both into ",
        "c",
      ],
    );
    let box_three = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_three, [
      "Suppose we want the items that are in only one of ",
      "a",
      " and ",
      "b",
    ]);
    app_learn_js_div_cycle_code(box_three, [
      "The loop over ",
      "a",
      " pushes what ",
      "b",
      " does not have",
    ]);
    app_learn_js_div_cycle_code(box_three, [
      "Then the loop over ",
      "b",
      " pushes what ",
      "a",
      " does not have, with ",
      "!a.includes(b[i])",
      ":",
    ]);
    let code2 = program_of(example_input);
    let lines = text_split_newline(code2);
    let value = eval_console_log_lines(code2);
    app_learn_js_code_lines_writes_out(box_three, lines, value);
    app_learn_js_div_cycle_code(box_three, [
      "",
      "5",
      " and ",
      "2",
      " are in both, so they are left out",
    ]);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "In one only",
    "if (!a.includes(b[i]))",
  );
  let lesson = app_learn_js_lesson_code_logged_wrong_programs({
    name_id,
    above,
    inputs_get: app_learn_js_array_pairs_overlap,
    program_of,
    wrong_programs_of,
    wrong_outputs_of,
  });
  return lesson;
}
