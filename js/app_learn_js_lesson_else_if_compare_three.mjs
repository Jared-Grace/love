import { subtract } from "./subtract.mjs";
import { less_than } from "./less_than.mjs";
import { equal } from "./equal.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { range_1 } from "./range_1.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { list_sort_number } from "./list_sort_number.mjs";
import { list_map } from "./list_map.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_expression_number_trichotomy } from "./app_learn_js_lesson_expression_number_trichotomy.mjs";
import { app_learn_js_lesson_else_if_else } from "./app_learn_js_lesson_else_if_else.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged_wrong_programs } from "./app_learn_js_lesson_code_logged_wrong_programs.mjs";
export function app_learn_js_lesson_else_if_compare_three() {
  arguments_assert(arguments, 0);
  ('two numbers compared three ways, with no loop: let a = 4; let b = 7; if (a === b) { console.log(a + " === " + b); } else if (a < b) { console.log(a + " < " + b); } else { console.log(a + " > " + b); } writes out 4 < 7');
  ("2026-11-25, at the human's asking, put straight before Same, smaller or larger, so that lesson adds only the loop: the three branches on their own first. The one new fact is that the last else needs no test, because two numbers are always the same, smaller or bigger, so not the same and not smaller leaves only bigger.");
  ("The inputs are a and b from 1 to 9: two the same, two with a smaller and two with a bigger, so every branch is seen.");
  ("The wrong programs are: the === branch left out (a number the same as b is written out as bigger), the else if left out (a smaller a is written out as bigger), and the signs written out by the else if and the else swapped.");
  ("The writing is a first draft by Claude 2026-11-25.");
  let example_input = [4, 7];
  function program_with(input, branches) {
    "let a, let b, then branches - a list of [test, sign] - as if, else if, ..., else, the last one with no test; each writes out a, its sign and b";
    let lines = ["let a = " + input[0] + ";", "let b = " + input[1] + ";"];
    let last = subtract(branches.length, 1);
    for (let k = 0; less_than(k, branches.length); k++) {
      let test = branches[k][0];
      let sign = branches[k][1];
      let opening = equal(k, 0)
        ? "if (" + test + ") {"
        : equal(k, last)
          ? "} else {"
          : "} else if (" + test + ") {";
      lines.push(opening);
      lines.push('  console.log(a + " ' + sign + ' " + b);');
    }
    lines.push("}");
    let code = list_join_newline(lines);
    return code;
  }
  function program_of(input2) {
    let code2 = program_with(input2, [
      ["a === b", "==="],
      ["a < b", "<"],
      ["", ">"],
    ]);
    return code2;
  }
  function wrong_programs_of(input3) {
    let v = program_with(input3, [
      ["a < b", "<"],
      ["", ">"],
    ]);
    let v2 = program_with(input3, [
      ["a === b", "==="],
      ["", ">"],
    ]);
    let v3 = program_with(input3, [
      ["a === b", "==="],
      ["a < b", ">"],
      ["", "<"],
    ]);
    let programs = [v, v2, v3];
    return programs;
  }
  function wrong_outputs_of(input4) {
    let r = [];
    return r;
  }
  function input_drawn(kind) {
    "a and b from 1 to 9: the same, a smaller, or a bigger";
    let list = range_1(9);
    if (equal(kind, "===")) {
      let n = list_random_item(list);
      let same = [n, n];
      return same;
    }
    let numbers = list_shuffle_take(list, 2);
    let sorted = list_sort_number(numbers);
    let input5 = equal(kind, "<") ? sorted : [sorted[1], sorted[0]];
    return input5;
  }
  function inputs_get() {
    let kinds = ["===", "<", ">", "===", "<", ">"];
    let inputs = list_map(kinds, input_drawn);
    let shuffled = list_shuffle_take(inputs, 6);
    return shuffled;
  }
  function above(root, context) {
    "Number three and else remembered, then the three ways as three branches";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_expression_number_trichotomy,
      [
        "two numbers are always the same (",
        "===",
        "), smaller (",
        "<",
        "), or bigger (",
        ">",
        ")",
      ],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_two,
      context,
      app_learn_js_lesson_else_if_else,
      ["The last ", "else { ... }", " runs when no test before it is ", "true"],
    );
    let box_three = app_learn_js_container_light_blue(root);
    ("one thought to a line");
    let lines_said = [
      ["So an ", "if", " can have one branch for each of the three"],
      [
        "The ",
        "if",
        " asks ",
        "a === b",
        " and the ",
        "else if",
        " asks ",
        "a < b",
        "",
      ],
      [
        "The ",
        "else",
        " needs no test: when ",
        "a",
        " is not the same as ",
        "b",
        " and not smaller, it must be bigger",
      ],
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
      "a === b",
      " is ",
      "false",
      " and ",
      "a < b",
      " is ",
      "true",
      ", so the ",
      "else",
      " is skipped",
    ]);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Same, smaller or bigger",
    "else if (a < b)",
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
