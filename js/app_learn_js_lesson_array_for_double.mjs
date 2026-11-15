import { equal } from "./equal.mjs";
import { multiply } from "./multiply.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_map } from "./list_map.mjs";
import { json_to } from "./json_to.mjs";
import { js_code_array } from "./js_code_array.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { js_code_for_start_condition_update_lines } from "./js_code_for_start_condition_update_lines.mjs";
import { js_code_console_log_statement } from "./js_code_console_log_statement.mjs";
import { list_concat } from "./list_concat.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { less_than } from "./less_than.mjs";
import { list_size } from "./list_size.mjs";
import { list_get } from "./list_get.mjs";
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
import { app_learn_js_lesson_array_set_name } from "./app_learn_js_lesson_array_set_name.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_div_cycle_output } from "./app_learn_js_div_cycle_output.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged } from "./app_learn_js_lesson_code_logged.mjs";
import { html_text_set_code_dark_lines } from "./html_text_set_code_dark_lines.mjs";
export function app_learn_js_lesson_array_for_double() {
  arguments_assert(arguments, 0);
  ("changing every item: let a = [3, 1, 4]; for (let i = 0; i < a.length; i++) { a[i] = a[i] * 2; } and a for loop writing out each item of a writes out 6, 2 and 8");
  ("2026-11-15, at the human's asking: after Setting at a name and Setting, then every item, a loop sets every item, each to itself times 2. The one new fact is that a[i] on the right reads the old item and a[i] on the left puts the new one in its place. A second for loop writes out every item, as in Copying an array, since writing out one item shows only one place.");
  ("A set is six questions, arrays of two and three items three times each, the items drawn from 1 to 9 with none twice, shuffled. Every question names its array a, as the loops over an array do.");
  ("Reading forwards, the wrong answers are the items as they were, only the first item doubled, and the indexes doubled (as if a[i] were i). Reading backwards, the wrong programs are the loop starting at 1, and setting each item to i * 2.");
  ("The writing is a first draft by Claude 2026-11-15.");
  let sizes = [2, 2, 2, 3, 3, 3];
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let example_items = [3, 1, 4];
  function program_with(items, start, right) {
    let codes = list_map(items, json_to);
    let array = js_code_array(codes);
    let head = js_code_let_statement("a", array);
    let set_line = "a[i] = " + right + " * 2;";
    let change_lines = js_code_for_start_condition_update_lines(
      "let i = " + start + ";",
      "i < a.length",
      [set_line, "i++;"],
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
    let code = program_with(items, "0", "a[i]");
    return code;
  }
  function batch_get() {
    "six programs, arrays of two and three items three times each, shuffled, each doubling every item of a";
    let codes = [];
    for (let k = 0; less_than(k, list_size(sizes)); k++) {
      let count = list_get(sizes, k);
      let items = list_shuffle_take(numbers, count);
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
    let list = text_split_newline(code);
    let head = list_first(list);
    let v = head.lastIndexOf(";");
    let after = head.slice(head.indexOf("=") + 1, v);
    let items2 = json_from(after);
    return items2;
  }
  function decoys(question, answer) {
    "the items as they were, only the first item doubled, and the indexes doubled; each once, never the answer";
    let items3 = items_of(question);
    let unchanged = list_join_newline(items3);
    let first_only = [];
    let indexes_doubled = [];
    for (let k = 0; less_than(k, list_size(items3)); k++) {
      let item = list_get(items3, k);
      if (equal(k, 0)) {
        let p = multiply(item, 2);
        first_only.push(p);
      } else {
        first_only.push(item);
      }
      let p2 = multiply(k, 2);
      indexes_doubled.push(p2);
    }
    let joined = list_join_newline(first_only);
    let joined2 = list_join_newline(indexes_doubled);
    let candidates = [unchanged, joined, joined2];
    let found = list_without(candidates, answer);
    let once = list_unique(found);
    return once;
  }
  function backwards_decoys(question, answer) {
    "the loop starting at 1, and setting each item to i * 2";
    let items4 = items_of(answer);
    let v2 = program_with(items4, "1", "a[i]");
    let v3 = program_with(items4, "0", "i");
    let programs = [v2, v3];
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
    "setting at a name remembered, then a loop setting every item";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_array_set_name,
      [
        "",
        'a[i] = "kindness"',
        " puts ",
        '"kindness"',
        " at the index ",
        "i",
        " holds",
      ],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_two, [
      "A loop can set every item. Here each item becomes itself times ",
      "2",
      ":",
    ]);
    let code2 = program_of(example_items);
    let lines2 = text_split_newline(code2);
    let value = eval_console_log_lines(code2);
    app_learn_js_code_lines_writes_out(box_two, lines2, value);
    app_learn_js_div_cycle_code(box_two, [
      "On the right, ",
      "a[i]",
      " is the item there now. On the left, ",
      "a[i]",
      " is where the new item goes",
    ]);
    app_learn_js_div_cycle_code(box_two, [
      "When ",
      "i",
      " is ",
      "0",
      ", ",
      "a[0]",
      " is ",
      "3",
      ", so ",
      "a[0]",
      " becomes ",
      "3 * 2",
      ", which is ",
      "6",
    ]);
    app_learn_js_div_cycle_output(box_two, [
      "So ",
      "6",
      ", then ",
      "2",
      ", then ",
      "8",
      " are written out",
    ]);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Changing every item",
    "a[i] = a[i] * 2;",
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
