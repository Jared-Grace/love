import { arguments_assert } from "./arguments_assert.mjs";
import { js_code_array } from "./js_code_array.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { list_take } from "./list_take.mjs";
import { list_skip } from "./list_skip.mjs";
import { list_map } from "./list_map.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_array_empty_for_push } from "./app_learn_js_lesson_array_empty_for_push.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged_wrong_programs } from "./app_learn_js_lesson_code_logged_wrong_programs.mjs";
export function app_learn_js_lesson_array_for_push_all() {
  arguments_assert(arguments, 0);
  ("one array put after another: let a = [1, 2]; let b = [3, 4, 5]; for (let i = 0; i < b.length; i++) { a.push(b[i]); } console.log(a); writes out [1, 2, 3, 4, 5]");
  ("2026-11-22, at the human's asking: the long way first, a push in a for loop (taught from 383 on), now looping over one array and pushing onto another. Next come a and b pushed into a new array c, then concat doing that in one call.");
  ("A set is six questions, a and b each two or three different numbers from 1 to 9, shuffled.");
  ("The wrong programs are: console.log(b) in place of console.log(a) (b is not changed), a.push(a[i]) in place of a.push(b[i]) (a's own items pushed again), and the loop starting at 1 (the first item of b is missed). i < a.length is never offered, because a grows as the loop runs, so that loop would never stop.");
  ("The writing is a first draft by Claude 2026-11-22.");
  let example_input = [
    [1, 2],
    [3, 4, 5],
  ];
  function program_with(input, start, pushed, logged) {
    "let a = ...; let b = ...; for (let i = start; i < b.length; i++) { a.push(pushed); } console.log(logged);";
    let lines = [
      "let a = " + js_code_array(input[0]) + ";",
      "let b = " + js_code_array(input[1]) + ";",
      "for (let i = " + start + "; i < b.length; i++) {",
      "  a.push(" + pushed + ");",
      "}",
      "console.log(" + logged + ");",
    ];
    let code = list_join_newline(lines);
    return code;
  }
  function program_of(input2) {
    let code2 = program_with(input2, "0", "b[i]", "a");
    return code2;
  }
  function wrong_programs_of(input3) {
    let v = program_with(input3, "0", "b[i]", "b");
    let v2 = program_with(input3, "0", "a[i]", "a");
    let v3 = program_with(input3, "1", "b[i]", "a");
    let programs = [v, v2, v3];
    return programs;
  }
  function wrong_outputs_of(input4) {
    let r = [];
    return r;
  }
  function input_sized(sizes) {
    "a and b, different numbers from 1 to 9, as many as each size says";
    let count = sizes[0] + sizes[1];
    let numbers = list_shuffle_take([1, 2, 3, 4, 5, 6, 7, 8, 9], count);
    let taken = list_take(numbers, sizes[0]);
    let skipped = list_skip(numbers, sizes[0]);
    let input5 = [taken, skipped];
    return input5;
  }
  function inputs_get() {
    "six inputs, a and b each two or three numbers";
    let shapes = [
      [2, 2],
      [2, 3],
      [3, 2],
      [3, 3],
      [2, 3],
      [3, 2],
    ];
    let inputs = list_map(shapes, input_sized);
    let shuffled = list_shuffle_take(inputs, 6);
    return shuffled;
  }
  function above(root, context) {
    "push in a loop remembered, then every item of b pushed onto a";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_array_empty_for_push,
      [
        "a ",
        "push",
        " inside a ",
        "for",
        " loop adds an item every time the loop runs",
      ],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_two, [
      "Suppose we have two arrays, ",
      "a",
      " and ",
      "b",
    ]);
    app_learn_js_div_cycle_code(box_two, [
      "And suppose we want every item of ",
      "b",
      " on the end of ",
      "a",
    ]);
    app_learn_js_div_cycle_code(box_two, [
      "The loop goes over ",
      "b",
      ", and ",
      "a.push(b[i])",
      " puts each item of ",
      "b",
      " on the end of ",
      "a",
      ":",
    ]);
    let code3 = program_of(example_input);
    let lines2 = text_split_newline(code3);
    let value = eval_console_log_lines(code3);
    app_learn_js_code_lines_writes_out(box_two, lines2, value);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "One array after another",
    "a.push(b[i]);",
  );
  let lesson = app_learn_js_lesson_code_logged_wrong_programs({
    name_id,
    above,
    inputs_get,
    program_of,
    wrong_programs_of,
    wrong_outputs_of,
  });
  return lesson;
}
