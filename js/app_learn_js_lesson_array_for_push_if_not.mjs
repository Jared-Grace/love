import { subtract } from "./subtract.mjs";
import { less_than } from "./less_than.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_get } from "./list_get.mjs";
import { js_code_array } from "./js_code_array.mjs";
import { list_concat } from "./list_concat.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { list_without } from "./list_without.mjs";
import { list_size } from "./list_size.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_array_for_push_if_e } from "./app_learn_js_lesson_array_for_push_if_e.mjs";
import { app_learn_js_lesson_while_not_equal } from "./app_learn_js_lesson_while_not_equal.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged_wrong_programs } from "./app_learn_js_lesson_code_logged_wrong_programs.mjs";
export function app_learn_js_lesson_array_for_push_if_not() {
  arguments_assert(arguments, 0);
  ("every item but one value kept: let a = [3, 7, 3, 5]; let b = []; for (let i = 0; i < a.length; i++) { if (a[i] !== 3) { b.push(a[i]); } } console.log(b); writes out [7, 5]");
  ("2026-11-21, approved by the human: after Keeping the words with e, the same push inside an if, now asking !== so one value is left out. The human asked whether the value appearing more than once needs a lesson of its own; it does not, because the loop is the same, so the questions mix arrays holding it once, twice and three times instead.");
  ("A set is six questions, two each with the value left out appearing once, twice and three times, among two or three other numbers from 1 to 9, shuffled.");
  ("Reading forwards, the wrong answers are what the wrong programs write out: === in place of !== (only that value is kept), the push after the if in place of inside it (a copy of a), and i !== in place of a[i] !== (the index is asked, not the item). Reading backwards, the wrong programs are those three, where each writes out something other than the answer.");
  ("The writing is a first draft by Claude 2026-11-21.");
  let example_input = [3, [3, 7, 3, 5]];
  function program_with(input, asked, inside, after) {
    "let a = items; let b = []; for (let i = 0; i < a.length; i++) { if (asked) { inside } after } console.log(b);";
    let items = list_get(input, 1);
    let head = [
      "let a = " + js_code_array(items) + ";",
      "let b = [];",
      "for (let i = 0; i < a.length; i++) {",
      "  if (" + asked + ") {",
    ];
    let b = list_concat(after, ["}", "console.log(b);"]);
    let tail = list_concat(["  }"], b);
    let a = list_concat(head, inside);
    let lines = list_concat(a, tail);
    let code = list_join_newline(lines);
    return code;
  }
  let push = "b.push(a[i]);";
  function program_of(input2) {
    let goal = list_get(input2, 0);
    let code2 = program_with(input2, "a[i] !== " + goal, ["    " + push], []);
    return code2;
  }
  function wrong_programs_of(input3) {
    let goal2 = list_get(input3, 0);
    let v = program_with(input3, "a[i] === " + goal2, ["    " + push], []);
    let v2 = program_with(input3, "a[i] !== " + goal2, [], ["  " + push]);
    let v3 = program_with(input3, "i !== " + goal2, ["    " + push], []);
    let programs = [v, v2, v3];
    return programs;
  }
  function wrong_outputs_of(input4) {
    let r = [];
    return r;
  }
  function inputs_get() {
    "two inputs each with the value left out appearing once, twice and three times";
    let pool = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let inputs = [];
    for (let copies of [1, 1, 2, 2, 3, 3]) {
      let list = list_shuffle_take(pool, 1);
      let goal3 = list_get(list, 0);
      let list2 = list_without(pool, goal3);
      let count = subtract(5, copies);
      let others = list_shuffle_take(list2, count);
      let all = others;
      for (let k = 0; less_than(k, copies); k++) {
        all = list_concat(all, [goal3]);
      }
      let count2 = list_size(all);
      let items2 = list_shuffle_take(all, count2);
      inputs.push([goal3, items2]);
    }
    let shuffled = list_shuffle_take(inputs, 6);
    return shuffled;
  }
  function above(root, context) {
    "push inside an if and !== remembered, then every item but one value kept";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_array_for_push_if_e,
      [
        "With ",
        "b.push(a[i]);",
        " inside an ",
        "if",
        ", ",
        "b",
        " got only the items the ",
        "if",
        " let through",
      ],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_two,
      context,
      app_learn_js_lesson_while_not_equal,
      ["", "!==", " is ", "true", " when the two sides are not the same"],
    );
    let box_three = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_three, [
      "Here the ",
      "if",
      " asks ",
      "a[i] !== 3",
      ", so every item is pushed except the ",
      "3",
      "s. Both ",
      "3",
      "s are left out:",
    ]);
    let code3 = program_of(example_input);
    let lines2 = text_split_newline(code3);
    let value = eval_console_log_lines(code3);
    app_learn_js_code_lines_writes_out(box_three, lines2, value);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Leave one value out",
    "if (a[i] !== 3)",
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
