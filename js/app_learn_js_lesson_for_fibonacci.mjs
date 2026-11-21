import { arguments_assert } from "./arguments_assert.mjs";
import { json_to } from "./json_to.mjs";
import { list_get } from "./list_get.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { js_code_for_start_condition_update_lines } from "./js_code_for_start_condition_update_lines.mjs";
import { js_code_console_log_statement } from "./js_code_console_log_statement.mjs";
import { list_concat } from "./list_concat.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { less_than_equal } from "./less_than_equal.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_array_push } from "./app_learn_js_lesson_array_push.mjs";
import { app_learn_js_lesson_array_last_index } from "./app_learn_js_lesson_array_last_index.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged_wrong_programs } from "./app_learn_js_lesson_code_logged_wrong_programs.mjs";
export function app_learn_js_lesson_for_fibonacci() {
  arguments_assert(arguments, 0);
  ("each new number the last two added, kept in an array: let a = [0, 1]; for (let i = 1; i <= 3; i++) { let last = a[a.length - 1]; let last_second = a[a.length - 2]; a.push(last + last_second); } console.log(a); writes out [0, 1, 1, 2, 3]");
  ("2026-11-21, approved by the human: the fourth of seven number lessons before objects, the Fibonacci numbers. Rewritten the same day to the human's own version: the whole list is kept in an array and each new number pushed onto it, because that is how a person writes the sequence out by hand. The first draft rolled three names (a, b, next) forward, which needs less memory but is harder to follow; the human's rule is simple to understand first, even when it costs more memory or time. The one new fact is that a.length - 2 is the index of the second to last item.");
  ("A set is six questions, each starting the array at 0 and 1, 1 and 1, or 1 and 2, and running 3, 4 or 5 times, none the same, shuffled; so no number written out is above 21.");
  ("Reading forwards, the wrong answers are what the wrong programs write out: i < in place of i <= (one number too few), i starting at 0 (one number too many), and last + last (the last number doubled). Reading backwards, the wrong programs are those three, where each writes out something other than the answer.");
  ("The writing is the human's, put into the lesson by Claude 2026-11-21.");
  let example_input = [0, 1, 3];
  function program_with(input, start, condition, added) {
    "let a = [first, second]; for (start; condition; i++) { let last; let last_second; a.push(added); } console.log(a);";
    let object = list_get(input, 0);
    let first = json_to(object);
    let object2 = list_get(input, 1);
    let second = json_to(object2);
    let head = js_code_let_statement("a", "[" + first + ", " + second + "]");
    let statements = [
      "let last = a[a.length - 1];",
      "let last_second = a[a.length - 2];",
      "a.push(" + added + ");",
      "i++;",
    ];
    let loop = js_code_for_start_condition_update_lines(
      start,
      condition,
      statements,
    );
    let log_line = js_code_console_log_statement("a");
    let b = list_concat(loop, [log_line]);
    let lines = list_concat([head], b);
    let code = list_join_newline(lines);
    return code;
  }
  function program_of(input2) {
    let runs = list_get(input2, 2);
    let code2 = program_with(
      input2,
      "let i = 1;",
      "i <= " + runs,
      "last + last_second",
    );
    return code2;
  }
  function wrong_programs_of(input3) {
    let runs3 = list_get(input3, 2);
    let v = program_with(
      input3,
      "let i = 1;",
      "i < " + runs3,
      "last + last_second",
    );
    let v2 = program_with(
      input3,
      "let i = 0;",
      "i <= " + runs3,
      "last + last_second",
    );
    let v3 = program_with(input3, "let i = 1;", "i <= " + runs3, "last + last");
    let programs = [v, v2, v3];
    return programs;
  }
  function wrong_outputs_of(input4) {
    let r = [];
    return r;
  }
  function inputs_get() {
    "six of the nine pairs of a start and a count of runs, shuffled";
    let starts = [
      [0, 1],
      [1, 1],
      [1, 2],
    ];
    let all = [];
    for (let s of starts) {
      for (let runs4 = 3; less_than_equal(runs4, 5); runs4++) {
        let concated = list_concat(s, [runs4]);
        all.push(concated);
      }
    }
    let inputs = list_shuffle_take(all, 6);
    return inputs;
  }
  function above(root, context) {
    "push and the last index remembered, then the list built by hand, then the program that builds it";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_array_push,
      ["", "a.push(x);", " adds ", "x", " to the end of ", "a"],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_two,
      context,
      app_learn_js_lesson_array_last_index,
      ["", "a.length - 1", " is the index of the last item"],
    );
    let box_three = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_three, [
      "Suppose we have a list. The first two numbers in the list are ",
      "0",
      " and ",
      "1",
      ". The next item in the list is the sum of the last two items.",
    ]);
    app_learn_js_div_cycle_code(box_three, [
      "So ",
      "0 + 1 === 1",
      ", so ",
      "1",
      " is the third item. Then our list has these numbers: ",
      "0, 1, 1",
    ]);
    app_learn_js_div_cycle_code(box_three, [
      "The last two numbers are ",
      "1",
      " and ",
      "1",
      ", so we add ",
      "1 + 1 === 2",
      ", so we add ",
      "2",
      " to the list and here is our new list: ",
      "0, 1, 1, 2",
    ]);
    app_learn_js_div_cycle_code(box_three, [
      "The last two numbers are ",
      "1",
      " and ",
      "2",
      ", so we add ",
      "1 + 2 === 3",
      ", so we add ",
      "3",
      " to the list and here is our new list: ",
      "0, 1, 1, 2, 3",
    ]);
    app_learn_js_div_cycle_code(box_three, [
      "The last two numbers are ",
      "2",
      " and ",
      "3",
      ", so we add ",
      "2 + 3 === 5",
      ", so we add ",
      "5",
      " to the list and here is our new list: ",
      "0, 1, 1, 2, 3, 5",
    ]);
    app_learn_js_div_cycle_code(box_three, [
      "This list keeps going. ",
      "a.length - 2",
      " is the index of the second to last item. Here is code that adds three numbers to the list:",
    ]);
    let code3 = program_of(example_input);
    let lines2 = text_split_newline(code3);
    let value = eval_console_log_lines(code3);
    app_learn_js_code_lines_writes_out(box_three, lines2, value);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Fibonacci numbers",
    "a.push(last + last_second);",
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
