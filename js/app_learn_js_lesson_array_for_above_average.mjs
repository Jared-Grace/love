import { arguments_assert } from "./arguments_assert.mjs";
import { js_code_array } from "./js_code_array.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { list_map } from "./list_map.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_array_for_average } from "./app_learn_js_lesson_array_for_average.mjs";
import { app_learn_js_lesson_array_for_count } from "./app_learn_js_lesson_array_for_count.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged_wrong_programs } from "./app_learn_js_lesson_code_logged_wrong_programs.mjs";
export function app_learn_js_lesson_array_for_above_average() {
  arguments_assert(arguments, 0);
  ("how many items are above the average: let total = 0; for (...) { total += a[i]; } let average = total / a.length; let count = 0; for (...) { if (a[i] > average) { count++; } } console.log(count);");
  ("2026-11-22, at the human's asking: the average (435) and counting with an if (424) put together, one loop after the other - the first loop's answer is what the second loop compares against. Not a loop inside a loop: the human asked to avoid those.");
  ("A set is six questions, each four or five different numbers from 1 to 9, shuffled.");
  ("The wrong programs are: < in place of > (counts the items below), a[i] > total in place of a[i] > average (nothing is bigger than the total, so 0), and console.log(average) in place of console.log(count). Each is offered only where it writes out something else.");
  ("The writing is a first draft by Claude 2026-11-22.");
  let example_input = [2, 9, 4, 7, 3];
  function program_with(items, compared, logged) {
    "the total loop, the average, then the counting loop comparing each item against compared, then console.log(logged);";
    let lines = [
      "let a = " + js_code_array(items) + ";",
      "let total = 0;",
      "for (let i = 0; i < a.length; i++) {",
      "  total += a[i];",
      "}",
      "let average = total / a.length;",
      "let count = 0;",
      "for (let i = 0; i < a.length; i++) {",
      "  if (" + compared + ") {",
      "    count++;",
      "  }",
      "}",
      "console.log(" + logged + ");",
    ];
    let code = list_join_newline(lines);
    return code;
  }
  function program_of(items2) {
    let code2 = program_with(items2, "a[i] > average", "count");
    return code2;
  }
  function wrong_programs_of(items3) {
    let v = program_with(items3, "a[i] < average", "count");
    let v2 = program_with(items3, "a[i] > total", "count");
    let v3 = program_with(items3, "a[i] > average", "average");
    let programs = [v, v2, v3];
    return programs;
  }
  function wrong_outputs_of(items4) {
    let r = [];
    return r;
  }
  function input_sized(size) {
    let items5 = list_shuffle_take([1, 2, 3, 4, 5, 6, 7, 8, 9], size);
    return items5;
  }
  function inputs_get() {
    "four or five different numbers, three times each, shuffled";
    let inputs = list_map([4, 4, 4, 5, 5, 5], input_sized);
    let shuffled = list_shuffle_take(inputs, 6);
    return shuffled;
  }
  function above(root, context) {
    "the average and counting remembered, then one loop after the other";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_array_for_average,
      [
        "the average is ",
        "total / a.length",
        ", after a loop adds up ",
        "total",
      ],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_two,
      context,
      app_learn_js_lesson_array_for_count,
      [
        "",
        "count++;",
        " inside an ",
        "if",
        " counts the items the ",
        "if",
        " lets through",
      ],
    );
    let box_three = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_three, [
      "Suppose we want to know how many items are bigger than the average",
    ]);
    app_learn_js_div_cycle_code(box_three, [
      "We cannot compare an item with the average until we know the average",
    ]);
    app_learn_js_div_cycle_code(box_three, [
      "So the first loop adds up ",
      "total",
      ", and then we work out ",
      "average",
    ]);
    app_learn_js_div_cycle_code(box_three, [
      "After that, a second loop counts the items where ",
      "a[i] > average",
      ":",
    ]);
    let code3 = program_of(example_input);
    let lines2 = text_split_newline(code3);
    let value = eval_console_log_lines(code3);
    app_learn_js_code_lines_writes_out(box_three, lines2, value);
    app_learn_js_div_cycle_code(box_three, [
      "The average is ",
      "5",
      ", and only ",
      "9",
      " and ",
      "7",
      " are bigger than ",
      "5",
    ]);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Above the average",
    "if (a[i] > average)",
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
