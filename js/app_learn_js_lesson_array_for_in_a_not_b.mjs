import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_learn_js_code_array_for_if_push_c } from "./app_learn_js_code_array_for_if_push_c.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_array_for_in_both } from "./app_learn_js_lesson_array_for_in_both.mjs";
import { app_learn_js_lesson_array_for_unique } from "./app_learn_js_lesson_array_for_unique.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged_wrong_programs } from "./app_learn_js_lesson_code_logged_wrong_programs.mjs";
import { app_learn_js_array_pairs_overlap } from "./app_learn_js_array_pairs_overlap.mjs";
export function app_learn_js_lesson_array_for_in_a_not_b() {
  arguments_assert(arguments, 0);
  ("the items in one array and not in another: let a = [3, 5, 8, 2]; let b = [5, 9, 2, 6]; let c = []; for (let i = 0; i < a.length; i++) { if (!b.includes(a[i])) { c.push(a[i]); } } console.log(c); writes out [3, 8]");
  ("2026-11-25, at the human's asking, right after In both: the same program with ! in front of the question, which Each item once already asked of an array.");
  ("The inputs are those of In both - see ",
    fn_name("app_learn_js_array_pairs_overlap"),
    ".");
  ("The wrong programs are: b.includes without the ! (the items in both), !a.includes (every a[i] is in a, so nothing is pushed) and !c.includes (each a[i] is new to c, so a copy of a).");
  ("The writing is a first draft by Claude 2026-11-25.");
  let example_input = [
    [3, 5, 8, 2],
    [5, 9, 2, 6],
  ];
  let asked_right = "!b.includes(a[i])";
  function program_of(input) {
    let code = app_learn_js_code_array_for_if_push_c(input, asked_right);
    return code;
  }
  function wrong_programs_of(input2) {
    let v = app_learn_js_code_array_for_if_push_c(input2, "b.includes(a[i])");
    let v2 = app_learn_js_code_array_for_if_push_c(input2, "!a.includes(a[i])");
    let v3 = app_learn_js_code_array_for_if_push_c(input2, "!c.includes(a[i])");
    let programs = [v, v2, v3];
    return programs;
  }
  function wrong_outputs_of(input3) {
    let r = [];
    return r;
  }
  function above(root, context) {
    "the items in both and the ! of Each item once remembered, then the items only in a";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_array_for_in_both,
      [
        "",
        "if (b.includes(a[i]))",
        " pushes the items that are in both ",
        "a",
        " and ",
        "b",
      ],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_two,
      context,
      app_learn_js_lesson_array_for_unique,
      [
        "",
        "!b.includes(a[i])",
        " is ",
        "true",
        " when ",
        "b",
        " does not have ",
        "a[i]",
      ],
    );
    let box_three = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_three, [
      "Now suppose we want the items in ",
      "a",
      " that are not in ",
      "b",
    ]);
    app_learn_js_div_cycle_code(box_three, [
      "We put ",
      "!",
      " in front of the question",
    ]);
    app_learn_js_div_cycle_code(box_three, [
      "",
      asked_right,
      " is ",
      "true",
      " when ",
      "b",
      " does not have ",
      "a[i]",
      ", so only then is it pushed into ",
      "c",
      ":",
    ]);
    let code2 = program_of(example_input);
    let lines = text_split_newline(code2);
    let value = eval_console_log_lines(code2);
    app_learn_js_code_lines_writes_out(box_three, lines, value);
    app_learn_js_div_cycle_code(box_three, [
      "",
      "3",
      " and ",
      "8",
      " are in ",
      "a",
      " but not in ",
      "b",
    ]);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "In a, not in b",
    "if (!b.includes(a[i]))",
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
