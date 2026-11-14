import { arguments_assert } from "./arguments_assert.mjs";
import { list_map } from "./list_map.mjs";
import { json_to } from "./json_to.mjs";
import { js_code_array } from "./js_code_array.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { js_code_called } from "./js_code_called.mjs";
import { js_code_for_start_condition_update_lines } from "./js_code_for_start_condition_update_lines.mjs";
import { js_code_console_log_statement } from "./js_code_console_log_statement.mjs";
import { list_concat } from "./list_concat.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { app_learn_js_name_letters } from "./app_learn_js_name_letters.mjs";
import { list_size } from "./list_size.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { less_than } from "./less_than.mjs";
import { fruits_of_the_spirit } from "./fruits_of_the_spirit.mjs";
import { list_get } from "./list_get.mjs";
import { list_shuffle } from "./list_shuffle.mjs";
import { app_learn_js_batch_question_answer_fns } from "./app_learn_js_batch_question_answer_fns.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { text_between } from "./text_between.mjs";
import { list_first } from "./list_first.mjs";
import { json_from } from "./json_from.mjs";
import { list_copy_reverse } from "./list_copy_reverse.mjs";
import { list_take_less_1 } from "./list_take_less_1.mjs";
import { list_without } from "./list_without.mjs";
import { list_unique } from "./list_unique.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_array_empty_for_push } from "./app_learn_js_lesson_array_empty_for_push.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_div_cycle_output } from "./app_learn_js_div_cycle_output.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged } from "./app_learn_js_lesson_code_logged.mjs";
import { html_text_set_code_dark_lines } from "./html_text_set_code_dark_lines.mjs";
export function app_learn_js_lesson_array_copy() {
  arguments_assert(arguments, 0);
  ('copying an array: let a = ["joy", "peace", "love"]; let b = []; for (let i = 0; i < a.length; i++) { b.push(a[i]); } and a for loop writing out each item of b writes out joy, peace and love');
  ("2026-11-14, at the human's asking: copy every item of an array into a new one, after A loop that pushes and before Reversing an array, since copying keeps the order and so is the easier of the two. The one new fact is that the loop pushes a[i] rather than i. A for loop writes out every item of b, as in Reversing an array, since writing out one item shows only one place of the order.");
  ("A set is six questions, arrays of two and three items three times each, shuffled. Each question names its two arrays with letters of their own; the examples keep a and b.");
  ("Reading forwards, the wrong answers are the items the other way round, the first item alone, and b missing a's last item. Reading backwards, the wrong programs are the copy loop starting at 1, and stopping at a.length - 1.");
  ("The writing is a first draft by Claude 2026-11-14.");
  let sizes = [2, 2, 2, 3, 3, 3];
  let example_items = ["joy", "peace", "love"];
  function program_with(name, other, items, start, end) {
    let codes = list_map(items, json_to);
    let array = js_code_array(codes);
    let head = js_code_let_statement(name, array);
    let empty = js_code_let_statement(other, "[]");
    let pushed = js_code_called(other + ".push", name + "[i]") + ";";
    let copy_lines = js_code_for_start_condition_update_lines(
      "let i = " + start + ";",
      "i < " + name + ".length" + end,
      [pushed, "i++;"],
    );
    let log_line = js_code_console_log_statement(other + "[i]");
    let for_lines = js_code_for_start_condition_update_lines(
      "let i = 0;",
      "i < " + other + ".length",
      [log_line, "i++;"],
    );
    let a = list_concat([head, empty], copy_lines);
    let lines = list_concat(a, for_lines);
    let code = list_join_newline(lines);
    return code;
  }
  function program_of(name, other, items) {
    let code = program_with(name, other, items, "0", "");
    return code;
  }
  function batch_get() {
    "six programs, arrays of two and three items three times each, shuffled, each with two letters of its own";
    let letters = app_learn_js_name_letters(["i"]);
    let count = list_size(sizes);
    let names = list_shuffle_take(letters, count + count);
    let codes = [];
    for (let k = 0; less_than(k, count); k++) {
      let list = fruits_of_the_spirit();
      let count3 = list_get(sizes, k);
      let items = list_shuffle_take(list, count3);
      let name = list_get(names, k + k);
      let other = list_get(names, k + k + 1);
      let code = program_of(name, other, items);
      codes.push(code);
    }
    list_shuffle(codes);
    return codes;
  }
  let batch = app_learn_js_batch_question_answer_fns(
    batch_get,
    eval_console_log_lines,
  );
  function line_name(code, index) {
    "the name the line at index declares: let <name> = ...";
    let list2 = text_split_newline(code);
    let line = list_get(list2, index);
    let name2 = text_between(line, "let ", " =");
    return name2;
  }
  function items_of(code) {
    "the first array's items, read off the first line";
    let list3 = text_split_newline(code);
    let head = list_first(list3);
    let v = head.lastIndexOf(";");
    let after = head.slice(head.indexOf("=") + 1, v);
    let items2 = json_from(after);
    return items2;
  }
  function decoys(question, answer) {
    "the items the other way round, the first item alone, and b missing a's last item; each once, never the answer";
    let items3 = items_of(question);
    let flipped = list_copy_reverse(items3);
    let backwards = list_join_newline(flipped);
    let first = list_first(items3);
    let early = list_take_less_1(items3);
    let early_text = list_join_newline(early);
    let candidates = [backwards, first, early_text];
    let found = list_without(candidates, answer);
    let once = list_unique(found);
    return once;
  }
  function backwards_decoys(question, answer) {
    "the copy loop starting at 1, and stopping at a.length - 1";
    let name3 = line_name(answer, 0);
    let other2 = line_name(answer, 1);
    let items4 = items_of(answer);
    let v2 = program_with(name3, other2, items4, "1", "");
    let v3 = program_with(name3, other2, items4, "0", " - 1");
    let programs = [v2, v3];
    return programs;
  }
  function above(root, context) {
    "a loop pushing into an empty array remembered, then pushing each item of another array";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_array_empty_for_push,
      [
        "a ",
        "for",
        " loop can push into an empty array, one item each time round",
      ],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_two, [
      "Pushing ",
      "a[i]",
      " each time round copies every item of ",
      "a",
      " into an empty array ",
      "b",
      ":",
    ]);
    let code2 = program_of("a", "b", example_items);
    let lines2 = text_split_newline(code2);
    let value = eval_console_log_lines(code2);
    app_learn_js_code_lines_writes_out(box_two, lines2, value);
    app_learn_js_div_cycle_code(box_two, [
      "",
      "i",
      " goes ",
      "0",
      ", ",
      "1",
      ", ",
      "2",
      ", so ",
      "a[0]",
      " goes into ",
      "b",
      " first, then ",
      "a[1]",
      ", then ",
      "a[2]",
      ", and ",
      "b",
      " holds the items in the same order",
    ]);
    app_learn_js_div_cycle_output(box_two, [
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
    "Copying an array",
    "b.push(a[i]);",
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
