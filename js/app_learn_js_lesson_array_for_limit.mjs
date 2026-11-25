import { equal } from "./equal.mjs";
import { greater_than } from "./greater_than.mjs";
import { less_than } from "./less_than.mjs";
import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { range_1 } from "./range_1.mjs";
import { list_map } from "./list_map.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_array_for_double } from "./app_learn_js_lesson_array_for_double.mjs";
import { app_learn_js_lesson_array_for_total_over } from "./app_learn_js_lesson_array_for_total_over.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged_wrong_programs } from "./app_learn_js_lesson_code_logged_wrong_programs.mjs";
export function app_learn_js_lesson_array_for_limit() {
  arguments_assert(arguments, 0);
  ("only some items changed, each one above a limit set down to it: let a = [3, 12, 7, 15]; let limit = 9; for (let i = 0; i < a.length; i++) { if (a[i] > limit) { a[i] = limit; } } console.log(a); writes out [3, 9, 7, 9]");
  ("2026-11-25, at the human's asking: Changing every item changed each one and Add only some picked some with an if, but changing only some in place was met only inside the Luhn lessons, mixed with other things. The name limit, also asked for, says what the number is for.");
  ("The inputs are a limit from 5 to 9 and four different numbers from 1 to 15, at least one above the limit and at least one not, so every wrong program shows.");
  ("The wrong programs are: < in place of > (the small items set to the limit), the if left out (every item set to the limit), and limit = a[i] in place of a[i] = limit (the array left as it was).");
  ("The writing is a first draft by Claude 2026-11-25.");
  let example_input = [[3, 12, 7, 15], 9];
  function program_with(input, test, body) {
    "the array, the limit, then a for asking test and running body, the if left out when test is empty";
    let lines = [
      "let a = [" + input[0].join(", ") + "];",
      "let limit = " + input[1] + ";",
      "for (let i = 0; i < a.length; i++) {",
    ];
    if (equal(test, "")) {
      lines.push("  " + body);
    } else {
      lines.push("  if (" + test + ") {");
      lines.push("    " + body);
      lines.push("  }");
    }
    lines.push("}");
    lines.push("console.log(a);");
    let code = list_join_newline(lines);
    return code;
  }
  function program_of(input2) {
    let code2 = program_with(input2, "a[i] > limit", "a[i] = limit;");
    return code2;
  }
  function wrong_programs_of(input3) {
    let v = program_with(input3, "a[i] < limit", "a[i] = limit;");
    let v2 = program_with(input3, "", "a[i] = limit;");
    let v3 = program_with(input3, "a[i] > limit", "limit = a[i];");
    let programs = [v, v2, v3];
    return programs;
  }
  function wrong_outputs_of(input4) {
    let r = [];
    return r;
  }
  function input_drawn(k) {
    "a limit from 5 to 9, then four different numbers from 1 to 15, drawn again until at least one is above the limit and one is below it";
    let limit = list_random_item([5, 6, 7, 8, 9]);
    let list = range_1(15);
    let a = list_shuffle_take(list, 4);
    function above_limit(n) {
      let g = greater_than(n, limit);
      return g;
    }
    function below_limit(n) {
      let l = less_than(n, limit);
      return l;
    }
    while (not(a.some(above_limit)) || not(a.some(below_limit))) {
      let list2 = range_1(15);
      a = list_shuffle_take(list2, 4);
    }
    let input5 = [a, limit];
    return input5;
  }
  function inputs_get() {
    let inputs = list_map([1, 2, 3, 4, 5, 6], input_drawn);
    return inputs;
  }
  function above(root, context) {
    "Changing every item and Add only some remembered, then only some items changed";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_array_for_double,
      ["", "a[i] = a[i] * 2;", " in a ", "for", " changes every item"],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_two,
      context,
      app_learn_js_lesson_array_for_total_over,
      ["", "if (a[i] > 5)", " picks only some of the items"],
    );
    let box_three = app_learn_js_container_light_blue(root);
    ("one thought to a line");
    let lines_said = [
      ["", "limit", " is the most an item may be"],
      ["Only an item bigger than ", "limit", " is changed"],
      ["It is set down to ", "limit", ""],
      ["Every other item stays as it was"],
    ];
    for (let said of lines_said) {
      app_learn_js_div_cycle_code(box_three, said);
    }
    let code3 = program_of(example_input);
    let lines2 = text_split_newline(code3);
    let value = eval_console_log_lines(code3);
    app_learn_js_code_lines_writes_out(box_three, lines2, value);
    app_learn_js_div_cycle_code(box_three, [
      "",
      "12",
      " and ",
      "15",
      " are bigger than ",
      "9",
      ", so each becomes ",
      "9",
      "",
    ]);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Keep each item within a limit",
    "if (a[i] > limit)",
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
