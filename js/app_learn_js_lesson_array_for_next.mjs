import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_map } from "./list_map.mjs";
import { json_to } from "./json_to.mjs";
import { js_code_array } from "./js_code_array.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { js_code_console_log_statement } from "./js_code_console_log_statement.mjs";
import { js_code_for_start_condition_update_lines } from "./js_code_for_start_condition_update_lines.mjs";
import { list_concat } from "./list_concat.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { less_than } from "./less_than.mjs";
import { list_size } from "./list_size.mjs";
import { list_get } from "./list_get.mjs";
import { fruits_of_the_spirit_short } from "./fruits_of_the_spirit_short.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { list_shuffle } from "./list_shuffle.mjs";
import { app_learn_js_batch_question_answer_fns } from "./app_learn_js_batch_question_answer_fns.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { list_first } from "./list_first.mjs";
import { json_from } from "./json_from.mjs";
import { list_without } from "./list_without.mjs";
import { list_unique } from "./list_unique.mjs";
import { not_equal } from "./not_equal.mjs";
import { list_filter } from "./list_filter.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_array_for_second_last } from "./app_learn_js_lesson_array_for_second_last.mjs";
import { app_learn_js_lesson_array_index_next } from "./app_learn_js_lesson_array_index_next.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_div_cycle_output } from "./app_learn_js_div_cycle_output.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged } from "./app_learn_js_lesson_code_logged.mjs";
import { html_text_set_code_dark_lines } from "./html_text_set_code_dark_lines.mjs";
export function app_learn_js_lesson_array_for_next() {
  arguments_assert(arguments, 0);
  ('the next item in a loop: let a = ["love", "joy", "peace"]; for (let i = 0; i < a.length - 1; i++) { console.log(a[i + 1]); } writes out joy and peace');
  ("2026-11-15, at the human's asking, whose words were: for { log(a[i+1]) }. Between Stopping before the last item and shifting: a[i + 1] read inside the loop that stops one early, so the shift that follows adds only the setting. The explanation above shows why the loop stops early: going on to the last index reads a[a.length], past the end, which is undefined. That is not a quiz answer, because ",
    fn_name("eval_console_log_lines"),
    " writes undefined out as an empty line, which would read as a blank answer.");
  ("A set is six questions, arrays of three and four items three times each, drawn from the fruits of the Spirit, shuffled. Every question names its array a, as the loops over an array do.");
  ("Reading forwards, the wrong answers are every item but the last (as if it were a[i]), every item, and every item from the third on (as if the loop started at 1). Reading backwards, the wrong programs write out a[i], and start at 1.");
  ("The writing is a first draft by Claude 2026-11-15.");
  let sizes = [3, 3, 3, 4, 4, 4];
  let example_items = ["love", "joy", "peace"];
  function program_with(items, start, condition, read) {
    let codes = list_map(items, json_to);
    let array = js_code_array(codes);
    let head = js_code_let_statement("a", array);
    let log_line = js_code_console_log_statement(read);
    let for_lines = js_code_for_start_condition_update_lines(
      "let i = " + start + ";",
      condition,
      [log_line, "i++;"],
    );
    let lines = list_concat([head], for_lines);
    let code = list_join_newline(lines);
    return code;
  }
  function program_of(items) {
    let code = program_with(items, "0", "i < a.length - 1", "a[i + 1]");
    return code;
  }
  function batch_get() {
    "six programs, arrays of three and four items three times each, shuffled, each writing out every item but the first";
    let codes = [];
    for (let k = 0; less_than(k, list_size(sizes)); k++) {
      let count = list_get(sizes, k);
      let list = fruits_of_the_spirit_short();
      let items = list_shuffle_take(list, count);
      let code = program_of(items);
      codes.push(code);
    }
    list_shuffle(codes);
    return codes;
  }
  let batch = app_learn_js_batch_question_answer_fns(
    batch_get,
    eval_console_log_lines,
  );
  function items_of(code) {
    "the array's items, read off the first line";
    let list2 = text_split_newline(code);
    let head = list_first(list2);
    let v = head.lastIndexOf(";");
    let after = head.slice(head.indexOf("=") + 1, v);
    let items2 = json_from(after);
    return items2;
  }
  function decoys(question, answer) {
    "every item but the last, every item, and every item but the first followed by undefined; each once, never the answer";
    let items3 = items_of(question);
    let list3 = items3.slice(0, -1);
    let but_last = list_join_newline(list3);
    let every = list_join_newline(items3);
    let list4 = items3.slice(2);
    let from_third = list_join_newline(list4);
    let candidates = [but_last, every, from_third];
    let found = list_without(candidates, answer);
    let once = list_unique(found);
    return once;
  }
  function backwards_decoys(question, answer) {
    "writing out a[i], and starting at 1";
    let items4 = items_of(answer);
    let v2 = program_with(items4, "0", "i < a.length - 1", "a[i]");
    let v4 = program_with(items4, "1", "i < a.length - 1", "a[i + 1]");
    let programs = [v2, v4];
    let out_answer = eval_console_log_lines(answer);
    function differs(code2) {
      let out = eval_console_log_lines(code2);
      let ne = not_equal(out, out_answer);
      return ne;
    }
    let kept = list_filter(programs, differs);
    return kept;
  }
  function above(root, context) {
    "stopping before the last item and the next item remembered, then the next item in a loop";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_array_for_second_last,
      ["", "i < a.length - 1", " stops the loop before the last item"],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_two,
      context,
      app_learn_js_lesson_array_index_next,
      ["", "a[i + 1]", " is the item after ", "a[i]"],
    );
    let box_three = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_three, [
      "Inside that loop, ",
      "a[i + 1]",
      " is always an item ",
      "a",
      " has:",
    ]);
    let code2 = program_of(example_items);
    let lines2 = text_split_newline(code2);
    let value = eval_console_log_lines(code2);
    app_learn_js_code_lines_writes_out(box_three, lines2, value);
    app_learn_js_div_cycle_code(box_three, [
      "When ",
      "i",
      " is ",
      "0",
      ", ",
      "a[i + 1]",
      " is ",
      "a[1]",
      ", which is ",
      '"joy"',
      ". When ",
      "i",
      " is ",
      "1",
      ", it is ",
      "a[2]",
      ", which is ",
      '"peace"',
    ]);
    app_learn_js_div_cycle_code(box_three, [
      "If the loop went on to ",
      "i",
      " is ",
      "2",
      ", ",
      "a[3]",
      " is past the end, and is ",
      "undefined",
    ]);
    app_learn_js_div_cycle_output(box_three, [
      "So ",
      "joy",
      ", then ",
      "peace",
      " are written out",
    ]);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "The next item in a loop",
    "console.log(a[i + 1]);",
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
