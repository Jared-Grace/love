import { arguments_assert } from "./arguments_assert.mjs";
import { list_map } from "./list_map.mjs";
import { json_to } from "./json_to.mjs";
import { js_code_array } from "./js_code_array.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { js_code_console_log_statement } from "./js_code_console_log_statement.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { list_insert } from "./list_insert.mjs";
import { list_concat } from "./list_concat.mjs";
import { list_size } from "./list_size.mjs";
import { app_learn_js_batch_question_answer_fns } from "./app_learn_js_batch_question_answer_fns.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { number_from_text } from "./number_from_text.mjs";
import { add } from "./add.mjs";
import { not_equal } from "./not_equal.mjs";
import { list_filter } from "./list_filter.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_array_for_at } from "./app_learn_js_lesson_array_for_at.mjs";
import { app_learn_js_lesson_array_includes } from "./app_learn_js_lesson_array_includes.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged } from "./app_learn_js_lesson_code_logged.mjs";
import { html_text_set_code_dark_lines } from "./html_text_set_code_dark_lines.mjs";
export function app_learn_js_lesson_array_index_of_found() {
  arguments_assert(arguments, 0);
  ('where an item is, in one line, when it is there: let a = ["love", "joy", "peace"]; console.log(a.indexOf("joy")); writes out 1');
  ("2026-11-14, at the human's asking: one idea at a time - here joy is always in the array, so the only new thing is that .indexOf gives its index. The -1 for a missing joy is the next lesson, Index of joy");
  ("Every set puts joy at index 0, 1 and 2 once each, and once more at any of them, so every place is practised and the answers are never all one. The writing is a first draft by Claude 2026-11-14");
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
  function items_at(index) {
    "three items, joy at the index given";
    let two = list_shuffle_take(pool, 2);
    list_insert(two, index, item);
    return two;
  }
  function arrays_four() {
    "joy at 0, 1 and 2, and once more at any, in a shuffled order";
    let places = [0, 1, 2];
    let extra = list_shuffle_take(places, 1);
    let all_places = list_concat(places, extra);
    let count = list_size(all_places);
    let shuffled = list_shuffle_take(all_places, count);
    let arrays = list_map(shuffled, items_at);
    return arrays;
  }
  function batch_get() {
    let arrays2 = arrays_four();
    let programs = list_map(arrays2, program);
    return programs;
  }
  let batch = app_learn_js_batch_question_answer_fns(
    batch_get,
    eval_console_log_lines,
  );
  function decoys(question, answer) {
    "its place counted from 1, true from .includes, and the item itself";
    let index = number_from_text(answer);
    let counted = add(index, 1);
    let one_based = json_to(counted);
    let r = [one_based, "true", item];
    return r;
  }
  function backwards_decoys(question, answer) {
    "programs that write out another index";
    let out_answer = eval_console_log_lines(answer);
    let arrays3 = arrays_four();
    let programs2 = list_map(arrays3, program);
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
    "the loop that finds where joy is remembered, .includes remembered, then .indexOf with joy at two places";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_array_for_at,
      ["the loop sets ", "at", " to the index where ", '"joy"', " is"],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_two,
      context,
      app_learn_js_lesson_array_includes,
      ["", 'a.includes("joy")', " does a whole loop in one line"],
    );
    app_learn_js_div_cycle_code(box_two, [
      "",
      'a.indexOf("joy")',
      " gives the index where ",
      '"joy"',
      " is, in one line.",
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
    app_learn_js_div_cycle_code(box_three, [
      "",
      '"joy"',
      " is at index ",
      "0",
      ":",
    ]);
    example(box_three, ["joy", "peace", "patience"]);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Where is joy?",
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
