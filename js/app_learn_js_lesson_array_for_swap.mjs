import { arguments_assert } from "./arguments_assert.mjs";
import { list_map } from "./list_map.mjs";
import { json_to } from "./json_to.mjs";
import { js_code_array } from "./js_code_array.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { list_concat } from "./list_concat.mjs";
import { js_code_for_start_condition_update_lines } from "./js_code_for_start_condition_update_lines.mjs";
import { js_code_console_log_statement } from "./js_code_console_log_statement.mjs";
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
import { list_last } from "./list_last.mjs";
import { list_without } from "./list_without.mjs";
import { list_unique } from "./list_unique.mjs";
import { not_equal } from "./not_equal.mjs";
import { list_filter } from "./list_filter.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_array_swap_name } from "./app_learn_js_lesson_array_swap_name.mjs";
import { app_learn_js_lesson_array_for_shift } from "./app_learn_js_lesson_array_for_shift.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_div_cycle_output } from "./app_learn_js_div_cycle_output.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged } from "./app_learn_js_lesson_code_logged.mjs";
import { html_text_set_code_dark_lines } from "./html_text_set_code_dark_lines.mjs";
export function app_learn_js_lesson_array_for_swap() {
  arguments_assert(arguments, 0);
  ('swapping every pair: let a = ["love", "joy", "peace"]; for (let i = 0; i < a.length - 1; i++) { let temp = a[i]; a[i] = a[i + 1]; a[i + 1] = temp; } and a for loop writing out each item of a writes out joy, peace and love');
  ("2026-11-15, at the human's asking, whose words were: also swapping every item for (swap (i and i+1)) and how this makes the first item the last item and shifts the others over to fill. After Shifting every item, which sets a[i] to a[i + 1] and so loses the first item, the one new fact is swapping instead of setting: the first item is carried along, one place each time round, and ends up last, while every other item moves one place to the left to fill.");
  ("A set is six questions, arrays of three and four items three times each, drawn from the fruits of the Spirit, shuffled. Every question names its array a, as the loops over an array do.");
  ("Reading forwards, the wrong answers are the items as they were, the items shifted with the last written twice (the previous lesson's answer), and only the first and last swapped. Reading backwards, the wrong programs leave out temp, start at 1, and stop two early; each is kept only if it writes out something other than the answer.");
  ("The writing is a first draft by Claude 2026-11-15.");
  let sizes = [3, 3, 3, 4, 4, 4];
  let example_items = ["love", "joy", "peace"];
  let swap_body = ["let temp = a[i];", "a[i] = a[i + 1];", "a[i + 1] = temp;"];
  let no_temp_body = ["a[i] = a[i + 1];", "a[i + 1] = a[i];"];
  function program_with(items, start, condition, body) {
    let codes = list_map(items, json_to);
    let array = js_code_array(codes);
    let head = js_code_let_statement("a", array);
    let statements = list_concat(body, ["i++;"]);
    let change_lines = js_code_for_start_condition_update_lines(
      "let i = " + start + ";",
      condition,
      statements,
    );
    let log_line = js_code_console_log_statement("a[i]");
    let for_lines = js_code_for_start_condition_update_lines(
      "let i = 0;",
      "i < a.length",
      [log_line, "i++;"],
    );
    let a = list_concat([head], change_lines);
    let lines = list_concat(a, for_lines);
    let code = list_join_newline(lines);
    return code;
  }
  function program_of(items) {
    let code = program_with(items, "0", "i < a.length - 1", swap_body);
    return code;
  }
  function batch_get() {
    "six programs, arrays of three and four items three times each, shuffled, each swapping every pair of neighbours";
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
    "the items as they were, the items shifted with the last twice, and only the first and last swapped; each once, never the answer";
    let items3 = items_of(question);
    let unchanged = list_join_newline(items3);
    let rest = items3.slice(1);
    let first = list_first(items3);
    let last = list_last(items3);
    let list3 = list_concat(rest, [last]);
    let shifted = list_join_newline(list3);
    let middle = items3.slice(1, -1);
    let b = list_concat(middle, [first]);
    let list4 = list_concat([last], b);
    let ends = list_join_newline(list4);
    let candidates = [unchanged, shifted, ends];
    let found = list_without(candidates, answer);
    let once = list_unique(found);
    return once;
  }
  function backwards_decoys(question, answer) {
    "leaving out temp, starting at 1, and stopping two early";
    let items4 = items_of(answer);
    let v1 = program_with(items4, "0", "i < a.length - 1", no_temp_body);
    let v2 = program_with(items4, "1", "i < a.length - 1", swap_body);
    let v3 = program_with(items4, "0", "i < a.length - 2", swap_body);
    let programs = [v1, v2, v3];
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
    "swapping at a name and shifting every item remembered, then swapping every pair";
    "2026-11-16, at the human's asking: the first box points to Swapping at a name, which swaps a[i] and a[i + 1] with no loop, in place of Swapping two items, which swaps a[0] and a[1]; it is the nearer lesson, and its swap is the very lines this loop runs, so the loop is the one new thing";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_array_swap_name,
      [
        "",
        "let temp = a[i]; a[i] = a[i + 1]; a[i + 1] = temp;",
        " swaps ",
        "a[i]",
        " and ",
        "a[i + 1]",
      ],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_two,
      context,
      app_learn_js_lesson_array_for_shift,
      [
        "",
        "a[i] = a[i + 1]",
        " moves every item one place to the left, and the first item is gone",
      ],
    );
    let box_three = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_three, [
      "Swapping ",
      "a[i]",
      " and ",
      "a[i + 1]",
      " carries the first item along to the end:",
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
      "a",
      " becomes ",
      '["joy", "love", "peace"]',
    ]);
    app_learn_js_div_cycle_code(box_three, [
      "When ",
      "i",
      " is ",
      "1",
      ", ",
      "a",
      " becomes ",
      '["joy", "peace", "love"]',
    ]);
    app_learn_js_div_cycle_code(box_three, [
      "",
      '"love"',
      " ends up last, and the others each move one place to the left to fill",
    ]);
    app_learn_js_div_cycle_output(box_three, [
      "So ",
      "joy",
      ", then ",
      "peace",
      ", then ",
      "love",
      " are written out",
    ]);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Swapping every pair",
    "a[i + 1] = temp;",
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
