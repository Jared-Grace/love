import { arguments_assert } from "./arguments_assert.mjs";
import { list_map } from "./list_map.mjs";
import { json_to } from "./json_to.mjs";
import { js_code_array } from "./js_code_array.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { js_code_console_log_statement } from "./js_code_console_log_statement.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { list_concat } from "./list_concat.mjs";
import { list_size } from "./list_size.mjs";
import { app_learn_js_batch_question_answer_fns } from "./app_learn_js_batch_question_answer_fns.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { equal } from "./equal.mjs";
import { number_from_text } from "./number_from_text.mjs";
import { add } from "./add.mjs";
import { not_equal } from "./not_equal.mjs";
import { list_filter } from "./list_filter.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_array_for_at } from "./app_learn_js_lesson_array_for_at.mjs";
import { app_learn_js_lesson_array_index_of_found } from "./app_learn_js_lesson_array_index_of_found.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged } from "./app_learn_js_lesson_code_logged.mjs";
import { html_text_set_code_dark_lines } from "./html_text_set_code_dark_lines.mjs";
export function app_learn_js_lesson_array_index_of() {
  arguments_assert(arguments, 0);
  ('where an item is, in one line: let a = ["love", "joy", "peace"]; console.log(a.indexOf("joy")); writes out 1, and -1 when joy is not there');
  ("2026-11-14, at the human's asking: the loop that starts at at -1 and sets it to i when joy is seen, done by one call, right after that loop and after .includes, so the student has written the long way and met an array's action that gives true or false before one that gives a number");
  ("Every set holds two arrays with joy once and two without, so -1 and an index are both answers. 2026-11-14, at the human's asking: joy twice is its own lesson, Index of the first joy, so this one stays joy once. Later the same day, at the human's asking: Where is joy? comes first with joy always there, so this lesson's one new idea is the -1. The writing is a first draft by Claude 2026-11-14");
  let name = "a";
  let item = "joy";
  let pool = ["love", "peace", "patience", "kindness", "goodness"];
  function program(items) {
    let codes = list_map(items, json_to);
    let array = js_code_array(codes);
    let head = js_code_let_statement(name, array);
    let json = json_to(item);
    let call = name + ".indexOf(" + json + ")";
    let line = js_code_console_log_statement(call);
    let code = list_join_newline([head, line]);
    return code;
  }
  function items_with() {
    let two = list_shuffle_take(pool, 2);
    let three = list_concat(two, [item]);
    let shuffled = list_shuffle_take(three, 3);
    return shuffled;
  }
  function items_without() {
    let three2 = list_shuffle_take(pool, 3);
    return three2;
  }
  function arrays_four() {
    "two arrays with joy and two without, in a shuffled order";
    let v = items_with();
    let v2 = items_with();
    let v3 = items_without();
    let v4 = items_without();
    let arrays = [v, v2, v3, v4];
    let count = list_size(arrays);
    let shuffled2 = list_shuffle_take(arrays, count);
    return shuffled2;
  }
  function batch_get() {
    let arrays3 = arrays_four();
    let programs = list_map(arrays3, program);
    return programs;
  }
  let batch = app_learn_js_batch_question_answer_fns(
    batch_get,
    eval_console_log_lines,
  );
  function decoys(question, answer) {
    "without joy: 0, as if -1 were never a start, and true and false from .includes; with joy: its place counted from 1, -1, and true";
    if (equal(answer, "-1")) {
      let r = ["0", "false", item];
      return r;
    }
    let index = number_from_text(answer);
    let counted = add(index, 1);
    let one_based = json_to(counted);
    let r2 = [one_based, "-1", "true"];
    return r2;
  }
  function backwards_decoys(question, answer) {
    "programs that write out something else";
    let out_answer = eval_console_log_lines(answer);
    let arrays4 = arrays_four();
    let programs2 = list_map(arrays4, program);
    function differs(code2) {
      let out = eval_console_log_lines(code2);
      let ne = not_equal(out, out_answer);
      return ne;
    }
    let kept = list_filter(programs2, differs);
    return kept;
  }
  function example(root, items2) {
    "an example program and what it writes out";
    let code3 = program(items2);
    let lines = text_split_newline(code3);
    let out2 = eval_console_log_lines(code3);
    app_learn_js_code_lines_writes_out(root, lines, out2);
  }
  function above(root, context) {
    "the loop that finds where joy is remembered, .includes remembered, then .indexOf with joy and without it";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_array_for_at,
      [
        "",
        "at",
        " starts ",
        "-1",
        ", and the loop sets it to the index where ",
        '"joy"',
        " is",
      ],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_two,
      context,
      app_learn_js_lesson_array_index_of_found,
      ["", 'a.indexOf("joy")', " gives the index where ", '"joy"', " is"],
    );
    app_learn_js_div_cycle_code(box_two, [
      "If ",
      "a",
      " has no ",
      '"joy"',
      ", ",
      'a.indexOf("joy")',
      " gives ",
      "-1",
      ", as the loop's ",
      "at",
      " stays ",
      "-1",
      ".",
    ]);
    let box_three = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_three, [
      "",
      '"joy"',
      " is at index ",
      "1",
      ":",
    ]);
    example(box_three, ["love", "joy", "peace"]);
    app_learn_js_div_cycle_code(box_three, ["", "a", " has no ", '"joy"', ":"]);
    example(box_three, ["love", "peace", "patience"]);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Index of joy",
    'a.indexOf("joy")',
  );
  let lesson = app_learn_js_lesson_code_logged({
    above,
    name_id,
    batch_get: batch,
    example_count: 2,
    on_question: html_text_set_code_dark_lines,
    unscramble: false,
    lines: true,
    steps: true,
    decoys,
    backwards_decoys,
    quiz_backwards_answer_count_override: null,
    forwards_answer_count_override: null,
  });
  return lesson;
}
