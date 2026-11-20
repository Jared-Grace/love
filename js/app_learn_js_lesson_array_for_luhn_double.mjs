import { equal } from "./equal.mjs";
import { subtract } from "./subtract.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_map } from "./list_map.mjs";
import { json_to } from "./json_to.mjs";
import { js_code_array } from "./js_code_array.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { js_code_for_start_condition_update_lines } from "./js_code_for_start_condition_update_lines.mjs";
import { js_code_console_log_statement } from "./js_code_console_log_statement.mjs";
import { list_concat } from "./list_concat.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { list_size } from "./list_size.mjs";
import { list_get } from "./list_get.mjs";
import { less_than } from "./less_than.mjs";
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
import { app_learn_js_lesson_array_for_backwards_step_two } from "./app_learn_js_lesson_array_for_backwards_step_two.mjs";
import { app_learn_js_lesson_array_for_double } from "./app_learn_js_lesson_array_for_double.mjs";
import { app_learn_js_lesson_array_log } from "./app_learn_js_lesson_array_log.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged } from "./app_learn_js_lesson_code_logged.mjs";
import { html_text_set_code_dark_lines } from "./html_text_set_code_dark_lines.mjs";
export function app_learn_js_lesson_array_for_luhn_double() {
  arguments_assert(arguments, 0);
  ("doubling every second item from the right: let a = [7, 2, 6, 5]; for (let i = a.length - 2; i >= 0; i -= 2) { a[i] = a[i] * 2; } console.log(a); writes out [14, 2, 12, 5]");
  ("2026-11-20, at the human's asking (1y): the first of a few lessons that build the Luhn check, the sum that tells a mistyped card number from a real one, taught by Exercism (luhn) and CS50 (Credit); only the rule is taken, in our own words. The one new fact is a loop going down by 2 that changes the items it lands on, so every second item counted from the right is doubled. The loop down by 2 (Backwards, every other item), changing an item to itself times 2 (Changing every item), and writing out a whole array (Writing out an array) were each taught on their own. Later lessons, not built yet: a double above 9 has 9 taken away, then the total is checked with % 10.");
  ("A set is six questions, arrays of four, five and six items twice each, the digits drawn from 1 to 9 with none twice, shuffled; odd sizes beside even ones, since from the right the first item is doubled only when the count is even. At least one doubled digit is 5 or more, so a double of two digits shows. Digits are never 0, so every wrong answer differs from the right one.");
  ("Reading forwards, the wrong answers are the items as they were, every item doubled, and the other half doubled. Reading backwards, the wrong programs are the loop starting at a.length - 1 (the other half), the loop going down by 1 (every item), and a[i] * 2 without a[i] = (nothing changes). Not picked: counting from the left with i = 1 and i += 2, which is shorter but matches the real rule only when the count of items is even.");
  ("The writing is a first draft by Claude 2026-11-20.");
  let sizes = [4, 4, 5, 5, 6, 6];
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let example_items = [7, 2, 6, 5];
  function program_with(items, start_back, step, body) {
    let codes = list_map(items, json_to);
    let array = js_code_array(codes);
    let head = js_code_let_statement("a", array);
    let update = equal(step, 1) ? "i--;" : "i -= " + step + ";";
    let change_lines = js_code_for_start_condition_update_lines(
      "let i = a.length - " + start_back + ";",
      "i >= 0",
      [body, update],
    );
    let log_line = js_code_console_log_statement("a");
    let a = list_concat([head], change_lines);
    let lines = list_concat(a, [log_line]);
    let code = list_join_newline(lines);
    return code;
  }
  function program_of(items) {
    let code = program_with(items, 2, 2, "a[i] = a[i] * 2;");
    return code;
  }
  function doubled_has_big(items) {
    "true when some item the right loop doubles is 5 or more";
    for (
      let i = subtract(list_size(items), 2);
      greater_than_equal(i, 0);
      i -= 2
    ) {
      let a2 = list_get(items, i);
      if (greater_than_equal(a2, 5)) {
        return true;
      }
    }
    return false;
  }
  function batch_get() {
    "six programs, arrays of four, five and six digits twice each, shuffled, each with a doubled digit of 5 or more";
    let codes = [];
    for (let k = 0; less_than(k, list_size(sizes)); k++) {
      let count = list_get(sizes, k);
      let items = list_shuffle_take(numbers, count);
      while (not(doubled_has_big(items))) {
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
    let list = text_split_newline(code);
    let head = list_first(list);
    let v = head.lastIndexOf(";");
    let after = head.slice(head.indexOf("=") + 1, v);
    let items2 = json_from(after);
    return items2;
  }
  function decoys(question, answer) {
    "the items as they were, every item doubled, and the other half doubled; each once, never the answer";
    let items3 = items_of(question);
    let code3 = program_with(items3, 2, 2, "a[i] = a[i];");
    let unchanged = eval_console_log_lines(code3);
    let code4 = program_with(items3, 1, 1, "a[i] = a[i] * 2;");
    let all = eval_console_log_lines(code4);
    let code5 = program_with(items3, 1, 2, "a[i] = a[i] * 2;");
    let other = eval_console_log_lines(code5);
    let candidates = [unchanged, all, other];
    let found = list_without(candidates, answer);
    let once = list_unique(found);
    return once;
  }
  function backwards_decoys(question, answer) {
    "the loop starting at a.length - 1, the loop going down by 1, and a[i] * 2 without a[i] =";
    let items4 = items_of(answer);
    let v1 = program_with(items4, 1, 2, "a[i] = a[i] * 2;");
    let v2 = program_with(items4, 2, 1, "a[i] = a[i] * 2;");
    let v3 = program_with(items4, 2, 2, "a[i] * 2;");
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
    "the loop down by 2, changing an item and writing out an array remembered, then the loop changing every second item from the right";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_array_for_backwards_step_two,
      [
        "",
        "i -= 2",
        " takes away ",
        "2",
        " each time, so a loop going down reads every other item",
      ],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_two,
      context,
      app_learn_js_lesson_array_for_double,
      [
        "",
        "a[i] = a[i] * 2;",
        " makes the item at ",
        "i",
        " itself times ",
        "2",
      ],
    );
    let box_three = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_three,
      context,
      app_learn_js_lesson_array_log,
      ["", "console.log(a);", " writes out the whole array"],
    );
    let box_four = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_four, [
      "Starting at ",
      "a.length - 2",
      ", one before the last item, and going down by ",
      "2",
      ", the loop doubles every second item counted from the right:",
    ]);
    let code2 = program_of(example_items);
    let lines2 = text_split_newline(code2);
    let value = eval_console_log_lines(code2);
    app_learn_js_code_lines_writes_out(box_four, lines2, value);
    app_learn_js_div_cycle_code(box_four, [
      "",
      "i",
      " is ",
      "2",
      ", then ",
      "0",
      ", so ",
      "6",
      " becomes ",
      "12",
      " and ",
      "7",
      " becomes ",
      "14",
      ", while ",
      "2",
      " and ",
      "5",
      " stay as they were",
    ]);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Double every second digit from the right",
    "i = a.length - 2; i >= 0; i -= 2",
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
