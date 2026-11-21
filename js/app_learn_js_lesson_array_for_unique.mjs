import { arguments_assert } from "./arguments_assert.mjs";
import { js_code_array } from "./js_code_array.mjs";
import { list_concat } from "./list_concat.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { list_get } from "./list_get.mjs";
import { list_size } from "./list_size.mjs";
import { list_map } from "./list_map.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_array_includes } from "./app_learn_js_lesson_array_includes.mjs";
import { app_learn_js_lesson_expression_not } from "./app_learn_js_lesson_expression_not.mjs";
import { app_learn_js_lesson_array_for_push_if_not } from "./app_learn_js_lesson_array_for_push_if_not.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged_wrong_programs } from "./app_learn_js_lesson_code_logged_wrong_programs.mjs";
export function app_learn_js_lesson_array_for_unique() {
  arguments_assert(arguments, 0);
  ("each item kept once: let a = [3, 7, 3, 5, 7]; let b = []; for (let i = 0; i < a.length; i++) { if (!b.includes(a[i])) { b.push(a[i]); } } console.log(b); writes out [3, 7, 5]");
  ("2026-11-22, at the human's asking: right after Leave one value out. It puts together that lesson's push inside an if, includes (412) and ! - nothing new. The if now asks the new array b rather than a value, so what b already holds decides what it lets in.");
  ("A set is six questions, each five or six numbers from 1 to 9 made of three or four different numbers, so every array repeats at least one, shuffled.");
  ("Reading forwards, the wrong answers are what the wrong programs write out: the ! left out (nothing is ever in b, so it stays empty), a.includes in place of b.includes (every item is in a, so again nothing is pushed), and the push after the if in place of inside it (a copy of a). Reading backwards, the wrong programs are those three, where each writes out something other than the answer.");
  ("The writing is a first draft by Claude 2026-11-22.");
  let example_input = [3, 7, 3, 5, 7];
  function program_with(items, asked, inside, after) {
    "let a = items; let b = []; for (let i = 0; i < a.length; i++) { if (asked) { inside } after } console.log(b);";
    let head = [
      "let a = " + js_code_array(items) + ";",
      "let b = [];",
      "for (let i = 0; i < a.length; i++) {",
      "  if (" + asked + ") {",
    ];
    let end = list_concat(after, ["}", "console.log(b);"]);
    let tail = list_concat(["  }"], end);
    let top = list_concat(head, inside);
    let lines = list_concat(top, tail);
    let code = list_join_newline(lines);
    return code;
  }
  let push = "b.push(a[i]);";
  function program_of(items2) {
    let code2 = program_with(items2, "!b.includes(a[i])", ["    " + push], []);
    return code2;
  }
  function wrong_programs_of(items3) {
    let v = program_with(items3, "b.includes(a[i])", ["    " + push], []);
    let v2 = program_with(items3, "!a.includes(a[i])", ["    " + push], []);
    let v3 = program_with(items3, "!b.includes(a[i])", [], ["  " + push]);
    let programs = [v, v2, v3];
    return programs;
  }
  function wrong_outputs_of(items4) {
    let r = [];
    return r;
  }
  function input_sized(sizes) {
    "that many different numbers from 1 to 9, filled out to the length with repeats of them, shuffled";
    let pool = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let count = list_get(sizes, 0);
    let distinct = list_shuffle_take(pool, count);
    let count2 = list_get(sizes, 1);
    let extra = list_shuffle_take(distinct, count2);
    let all = list_concat(distinct, extra);
    let count3 = list_size(all);
    let items5 = list_shuffle_take(all, count3);
    return items5;
  }
  function inputs_get() {
    "six arrays of three or four different numbers, each with one or two repeats";
    let shapes = [
      [3, 2],
      [3, 2],
      [4, 1],
      [4, 1],
      [4, 2],
      [3, 3],
    ];
    let inputs = list_map(shapes, input_sized);
    let shuffled = list_shuffle_take(inputs, 6);
    return shuffled;
  }
  function above(root, context) {
    "includes, ! and leaving a value out remembered, then each item kept once";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_array_includes,
      ["", "b.includes(x)", " is ", "true", " when ", "x", " is in ", "b"],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_two,
      context,
      app_learn_js_lesson_expression_not,
      [
        "",
        "!",
        " turns ",
        "true",
        " into ",
        "false",
        ", and ",
        "false",
        " into ",
        "true",
      ],
    );
    let box_three = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_three,
      context,
      app_learn_js_lesson_array_for_push_if_not,
      [
        "",
        "b.push(a[i]);",
        " inside an ",
        "if",
        " pushed only the items the ",
        "if",
        " let through",
      ],
    );
    let box_four = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_four, [
      "Suppose an array has some items more than once",
    ]);
    app_learn_js_div_cycle_code(box_four, [
      "And suppose we want a new array with each item only once",
    ]);
    app_learn_js_div_cycle_code(box_four, ["How do we do this?"]);
    app_learn_js_div_cycle_code(box_four, [
      "Before we push an item into ",
      "b",
      ", we ask if ",
      "b",
      " has it already",
    ]);
    app_learn_js_div_cycle_code(box_four, [
      "",
      "!b.includes(a[i])",
      " is ",
      "true",
      " when ",
      "b",
      " does not have it yet, so only then is it pushed:",
    ]);
    let code3 = program_of(example_input);
    let lines2 = text_split_newline(code3);
    let value = eval_console_log_lines(code3);
    app_learn_js_code_lines_writes_out(box_four, lines2, value);
    app_learn_js_div_cycle_code(box_four, [
      "The second ",
      "3",
      " and the second ",
      "7",
      " are left out, because ",
      "b",
      " already has them",
    ]);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Each item once",
    "if (!b.includes(a[i]))",
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
