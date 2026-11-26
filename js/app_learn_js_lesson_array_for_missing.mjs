import { arguments_assert } from "./arguments_assert.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { range_1 } from "./range_1.mjs";
import { not } from "./not.mjs";
import { not_equal } from "./not_equal.mjs";
import { multiply } from "./multiply.mjs";
import { floor } from "./floor.mjs";
import { subtract } from "./subtract.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { list_shuffle } from "./list_shuffle.mjs";
import { list_map } from "./list_map.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_for_up_to } from "./app_learn_js_lesson_for_up_to.mjs";
import { app_learn_js_lesson_array_for_in_a_not_b } from "./app_learn_js_lesson_array_for_in_a_not_b.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged_wrong_programs } from "./app_learn_js_lesson_code_logged_wrong_programs.mjs";
export function app_learn_js_lesson_array_for_missing() {
  arguments_assert(arguments, 0);
  ("the numbers missing from 1 up to top: for (let n = 1; n <= top; n++) { if (!a.includes(n)) { missing.push(n); } } then console.log(missing)");
  ("2026-11-26, at the human's asking: looping over the numbers a should hold and pushing each one a does not include, put after In a, not in b. Not picked, as the human chose: adding up 1 to top and taking away a's total, which only works when exactly one number is missing. In a, not in b already pushes what one array does not include; the new fact is looping over the numbers 1 up to top rather than over an array, with For up to and including's <=.");
  ("Each input has a top of 5, 6 or 7 and leaves out one to three of the numbers 1 up to top, the rest shuffled.");
  ("The wrong programs are: includes without ! (the numbers that are there), n < top in place of n <= top (the top number never asked), and n starting at 0 (0 counted as missing). All are for loops counting up to a number, so all stop. The other wrong answer offered is the missing numbers with the top one left off.");
  ("The writing is a first draft by Claude 2026-11-26.");
  function program_with(input, start, condition, asked) {
    "the array, an empty missing, a for loop from start while condition, pushing n when asked, and missing written out";
    let lines = [
      "let a = [" + input.items.join(", ") + "];",
      "let missing = [];",
      "for (let n = " + start + "; " + condition + "; n++) {",
      "  if (" + asked + ") {",
      "    missing.push(n);",
      "  }",
      "}",
      "console.log(missing);",
    ];
    let code = list_join_newline(lines);
    return code;
  }
  function up_to(input2) {
    let condition2 = "n <= " + input2.top;
    return condition2;
  }
  let not_in = "!a.includes(n)";
  function program_of(input3) {
    let v4 = up_to(input3);
    let code2 = program_with(input3, 1, v4, not_in);
    return code2;
  }
  function wrong_programs_of(input4) {
    let v5 = up_to(input4);
    let v = program_with(input4, 1, v5, "a.includes(n)");
    let v2 = program_with(input4, 1, "n < " + input4.top, not_in);
    let v6 = up_to(input4);
    let v3 = program_with(input4, 0, v6, not_in);
    let programs = [v, v2, v3];
    return programs;
  }
  function wrong_outputs_of(input5) {
    let all = range_1(input5.top);
    function lambda(n) {
      let b = input5.items.includes(n);
      let n2 = not(b);
      return n2;
    }
    let missing = all.filter(lambda);
    function lambda2(n) {
      let neq = not_equal(n, input5.top);
      return neq;
    }
    let short = missing.filter(lambda2);
    let outputs = ["[" + short.join(", ") + "]"];
    return outputs;
  }
  function input_drawn(top) {
    "1 up to top with one to three numbers left out, shuffled";
    let left = Math.random();
    let p = multiply(left, 3);
    let gone = 1 + floor(p);
    let list = range_1(top);
    let count = subtract(top, gone);
    let items = list_shuffle_take(list, count);
    list_shuffle(items);
    let input6 = {
      items,
      top,
    };
    return input6;
  }
  function inputs_get() {
    "six inputs, tops of 5, 6 and 7 twice each";
    let tops = [5, 5, 6, 6, 7, 7];
    let inputs = list_map(tops, input_drawn);
    return inputs;
  }
  function above(root, context) {
    "counting up to and including, and in a not in b, remembered, then the numbers 1 up to 6 asked about";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_for_up_to,
      ["", "n <= 3", " counts up to and including ", "3", ""],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_two,
      context,
      app_learn_js_lesson_array_for_in_a_not_b,
      [
        "",
        "!b.includes(a[i])",
        " is ",
        "true",
        " when ",
        "a[i]",
        " is not in ",
        "b",
        "",
      ],
    );
    let box_three = app_learn_js_container_light_blue(root);
    let lines_said = [
      ["Here ", "a", " should hold every number from ", "1", " to ", "6", ""],
      ["So loop over ", "1", " to ", "6", ", not over ", "a", ""],
      ["Push each ", "n", " that ", "a", " does not include:"],
    ];
    for (let said of lines_said) {
      app_learn_js_div_cycle_code(box_three, said);
    }
    let example = {
      items: [3, 1, 6, 5],
      top: 6,
    };
    let code3 = program_of(example);
    let lines2 = text_split_newline(code3);
    let value = eval_console_log_lines(code3);
    app_learn_js_code_lines_writes_out(box_three, lines2, value);
    app_learn_js_div_cycle_code(box_three, [
      "",
      "2",
      " and ",
      "4",
      " are not in ",
      "a",
      ", so ",
      "missing",
      " is ",
      "[2, 4]",
    ]);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Which numbers are missing?",
    "if (!a.includes(n))",
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
