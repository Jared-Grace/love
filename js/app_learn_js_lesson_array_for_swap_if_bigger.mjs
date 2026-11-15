import { arguments_assert } from "./arguments_assert.mjs";
import { list_map } from "./list_map.mjs";
import { json_to } from "./json_to.mjs";
import { js_code_array } from "./js_code_array.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { js_code_if_lines_multiple } from "./js_code_if_lines_multiple.mjs";
import { list_concat } from "./list_concat.mjs";
import { js_code_for_start_condition_update_lines } from "./js_code_for_start_condition_update_lines.mjs";
import { js_code_console_log_statement } from "./js_code_console_log_statement.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { list_sort_number } from "./list_sort_number.mjs";
import { less_than } from "./less_than.mjs";
import { list_size } from "./list_size.mjs";
import { list_get } from "./list_get.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { equal } from "./equal.mjs";
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
import { app_learn_js_lesson_array_for_biggest } from "./app_learn_js_lesson_array_for_biggest.mjs";
import { app_learn_js_lesson_array_for_swap } from "./app_learn_js_lesson_array_for_swap.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_div_cycle_output } from "./app_learn_js_div_cycle_output.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged } from "./app_learn_js_lesson_code_logged.mjs";
import { html_text_set_code_dark_lines } from "./html_text_set_code_dark_lines.mjs";
export function app_learn_js_lesson_array_for_swap_if_bigger() {
  arguments_assert(arguments, 0);
  ("swapping a pair only when the first is bigger: let a = [2, 3, 1]; for (let i = 0; i < a.length - 1; i++) { if (a[i] > a[i + 1]) { let temp = a[i]; a[i] = a[i + 1]; a[i + 1] = temp; } } and a for loop writing out each item of a writes out 2, 1 and 3");
  ("2026-11-15, at the human's asking, whose words were: do the arrays have the lesson of swap if i is greater than i+1, and then: a[i] > a[i+1]. After Swapping every pair, which carries the first item to the end, the one new fact is the if around the swap: a pair is swapped only when its first item is bigger, so the biggest number is carried along to the end, and the smaller ones it passes move one place to the left. The others are not sorted yet; one pass only puts the biggest last.");
  ("2026-11-16, at the human's asking: moved from straight after Swapping every pair to straight after The biggest item, since until then no lesson had put an if inside a loop over an array, nor compared an item with >, and this lesson would have asked for both at once beside the swap. Its first Remember box points to The biggest item, now the nearer lesson, in place of An if inside a for.");
  ("A set is six questions, arrays of three and four different numbers from 1 to 9 three times each, shuffled. An array already in order is drawn again, so every question swaps at least once. Every question names its array a, as the loops over an array do.");
  ("Reading forwards, the wrong answers are the numbers as they were, every pair swapped (the previous lesson's answer), and the numbers all in order. Reading backwards, the wrong programs ask < instead of >, leave out temp, and stop two early; each is kept only if it writes out something other than the answer.");
  ("The writing is a first draft by Claude 2026-11-15.");
  let sizes = [3, 3, 3, 4, 4, 4];
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let example_items = [2, 3, 1];
  let swap_body = ["let temp = a[i];", "a[i] = a[i + 1];", "a[i + 1] = temp;"];
  let no_temp_body = ["a[i] = a[i + 1];", "a[i + 1] = a[i];"];
  function program_with(items, asked, condition, body) {
    let codes = list_map(items, json_to);
    let array = js_code_array(codes);
    let head = js_code_let_statement("a", array);
    let if_lines = js_code_if_lines_multiple(asked, body);
    let statements = list_concat(if_lines, ["i++;"]);
    let change_lines = js_code_for_start_condition_update_lines(
      "let i = 0;",
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
    let code = program_with(
      items,
      "a[i] > a[i + 1]",
      "i < a.length - 1",
      swap_body,
    );
    return code;
  }
  function sorted_of(items) {
    let copy = items.slice();
    list_sort_number(copy);
    return copy;
  }
  function batch_get() {
    "six programs, arrays of three and four different numbers three times each, none already in order, shuffled, each swapping a pair when its first number is bigger";
    let codes = [];
    for (let k = 0; less_than(k, list_size(sizes)); k++) {
      let count = list_get(sizes, k);
      let items = list_shuffle_take(numbers, count);
      while (equal(json_to(items), json_to(sorted_of(items)))) {
        items = list_shuffle_take(numbers, count);
      }
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
    "the numbers as they were, every pair swapped, and the numbers all in order; each once, never the answer";
    let items3 = items_of(question);
    let unchanged = list_join_newline(items3);
    let rest = items3.slice(1);
    let first = list_first(items3);
    let list3 = list_concat(rest, [first]);
    let swapped_all = list_join_newline(list3);
    let list = sorted_of(items3);
    let in_order = list_join_newline(list);
    let candidates = [unchanged, swapped_all, in_order];
    let found = list_without(candidates, answer);
    let once = list_unique(found);
    return once;
  }
  function backwards_decoys(question, answer) {
    "asking < instead of >, leaving out temp, and stopping two early";
    let items4 = items_of(answer);
    let v1 = program_with(
      items4,
      "a[i] < a[i + 1]",
      "i < a.length - 1",
      swap_body,
    );
    let v2 = program_with(
      items4,
      "a[i] > a[i + 1]",
      "i < a.length - 1",
      no_temp_body,
    );
    let v3 = program_with(
      items4,
      "a[i] > a[i + 1]",
      "i < a.length - 2",
      swap_body,
    );
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
    "the biggest item and swapping every pair remembered, then swapping only when the first is bigger";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_array_for_biggest,
      [
        "",
        "if (a[i] > big) { big = a[i]; }",
        " keeps the biggest number seen so far",
      ],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_two,
      context,
      app_learn_js_lesson_array_for_swap,
      [
        "Swapping ",
        "a[i]",
        " and ",
        "a[i + 1]",
        " every time round carries the first item to the end",
      ],
    );
    let box_three = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_three, [
      "With ",
      "if (a[i] > a[i + 1])",
      ", a pair is swapped only when its first number is bigger:",
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
      "2 > 3",
      " is ",
      "false",
      ", so ",
      "a",
      " stays ",
      "[2, 3, 1]",
    ]);
    app_learn_js_div_cycle_code(box_three, [
      "When ",
      "i",
      " is ",
      "1",
      ", ",
      "3 > 1",
      " is ",
      "true",
      ", so ",
      "a",
      " becomes ",
      "[2, 1, 3]",
    ]);
    app_learn_js_div_cycle_code(box_three, [
      "The biggest number, ",
      "3",
      ", ends up last. The others are not in order yet",
    ]);
    app_learn_js_div_cycle_output(box_three, [
      "So ",
      "2",
      ", then ",
      "1",
      ", then ",
      "3",
      " are written out",
    ]);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Swapping only when bigger",
    "if (a[i] > a[i + 1]) {",
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
