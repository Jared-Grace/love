import { subtract } from "./subtract.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { js_code_array } from "./js_code_array.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { list_concat } from "./list_concat.mjs";
import { list_size } from "./list_size.mjs";
import { list_map } from "./list_map.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_if_even } from "./app_learn_js_lesson_if_even.mjs";
import { app_learn_js_lesson_if_else } from "./app_learn_js_lesson_if_else.mjs";
import { app_learn_js_lesson_array_for_push_if_not } from "./app_learn_js_lesson_array_for_push_if_not.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged_wrong_programs } from "./app_learn_js_lesson_code_logged_wrong_programs.mjs";
export function app_learn_js_lesson_array_for_even_odd() {
  arguments_assert(arguments, 0);
  ("one array split into two: let a = [4, 7, 2, 9]; let evens = []; let odds = []; for (let i = 0; i < a.length; i++) { if (a[i] % 2 === 0) { evens.push(a[i]); } else { odds.push(a[i]); } } console.log(evens); console.log(odds); writes out [4, 2] then [7, 9]");
  ("2026-11-22, at the human's asking: push inside an if (455) with an else (274), so every item goes to one of two arrays - the first lesson that fills two arrays in one loop. The even check is n % 2 === 0 (254).");
  ("A set is six questions, each five numbers from 1 to 9 with two or three even, shuffled, so both arrays always get something.");
  ("The wrong programs are: === 1 in place of === 0 (the two arrays swapped), evens.push in the else too (evens is a copy of a, odds stays empty), and i % 2 in place of a[i] % 2 (the index is asked, not the item).");
  ("The writing is a first draft by Claude 2026-11-22.");
  let example_input = [4, 7, 2, 9];
  function program_with(items, asked, else_push) {
    "let a = items; let evens = []; let odds = []; for ... { if (asked) { evens.push(a[i]); } else { else_push } } console.log(evens); console.log(odds);";
    let lines = [
      "let a = " + js_code_array(items) + ";",
      "let evens = [];",
      "let odds = [];",
      "for (let i = 0; i < a.length; i++) {",
      "  if (" + asked + ") {",
      "    evens.push(a[i]);",
      "  } else {",
      "    " + else_push,
      "  }",
      "}",
      "console.log(evens);",
      "console.log(odds);",
    ];
    let code = list_join_newline(lines);
    return code;
  }
  function program_of(items2) {
    let code2 = program_with(items2, "a[i] % 2 === 0", "odds.push(a[i]);");
    return code2;
  }
  function wrong_programs_of(items3) {
    let v = program_with(items3, "a[i] % 2 === 1", "odds.push(a[i]);");
    let v2 = program_with(items3, "a[i] % 2 === 0", "evens.push(a[i]);");
    let v3 = program_with(items3, "i % 2 === 0", "odds.push(a[i]);");
    let programs = [v, v2, v3];
    return programs;
  }
  function wrong_outputs_of(items4) {
    let r = [];
    return r;
  }
  function input_with(even_count) {
    "five numbers from 1 to 9, that many of them even, shuffled";
    let evens = list_shuffle_take([2, 4, 6, 8], even_count);
    let odd_count = subtract(5, even_count);
    let odds = list_shuffle_take([1, 3, 5, 7, 9], odd_count);
    let all = list_concat(evens, odds);
    let count = list_size(all);
    let items5 = list_shuffle_take(all, count);
    return items5;
  }
  function inputs_get() {
    "six inputs, two or three even numbers in each";
    let inputs = list_map([2, 2, 2, 3, 3, 3], input_with);
    let shuffled = list_shuffle_take(inputs, 6);
    return shuffled;
  }
  function above(root, context) {
    "the even check, else and push inside an if remembered, then one array split into two";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_if_even,
      ["", "n % 2 === 0", " is ", "true", " when ", "n", " is even"],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_two,
      context,
      app_learn_js_lesson_if_else,
      ["the ", "else", " runs when the ", "if", " does not"],
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
      "Suppose we want to put the even numbers in one array and the odd numbers in another",
    ]);
    app_learn_js_div_cycle_code(box_four, [
      "The ",
      "if",
      " pushes an even number into ",
      "evens",
    ]);
    app_learn_js_div_cycle_code(box_four, [
      "Every other number is odd, so the ",
      "else",
      " pushes it into ",
      "odds",
      ":",
    ]);
    let code3 = program_of(example_input);
    let lines2 = text_split_newline(code3);
    let value = eval_console_log_lines(code3);
    app_learn_js_code_lines_writes_out(box_four, lines2, value);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Evens and odds",
    "odds.push(a[i]);",
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
