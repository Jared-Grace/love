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
import { fruits_of_the_spirit_short } from "./fruits_of_the_spirit_short.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { list_last } from "./list_last.mjs";
import { list_shuffle } from "./list_shuffle.mjs";
import { app_learn_js_batch_question_answer_fns } from "./app_learn_js_batch_question_answer_fns.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { list_first } from "./list_first.mjs";
import { json_from } from "./json_from.mjs";
import { text_between } from "./text_between.mjs";
import { list_without } from "./list_without.mjs";
import { list_unique } from "./list_unique.mjs";
import { not_equal } from "./not_equal.mjs";
import { list_filter } from "./list_filter.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_array_set_for } from "./app_learn_js_lesson_array_set_for.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_div_cycle_output } from "./app_learn_js_div_cycle_output.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged } from "./app_learn_js_lesson_code_logged.mjs";
import { html_text_set_code_dark_lines } from "./html_text_set_code_dark_lines.mjs";
export function app_learn_js_lesson_array_for_set_all() {
  arguments_assert(arguments, 0);
  ('setting every item: let a = ["love", "joy", "peace"]; for (let i = 0; i < a.length; i++) { a[i] = "kindness"; } and a for loop writing out each item of a writes out kindness three times');
  ("2026-11-15, at the human's asking, whose words were: for { a[i] = k }. After Setting an item, then every item written out, which sets one item and loops to write them out, the one new fact is setting inside the loop: the same line runs once for each index, so every item becomes the one value. It stands before the loops that set a[i] to something worked out, a[i] * 2 and a[i + 1].");
  ("A set is six questions, arrays of three and four items three times each, drawn from the fruits of the Spirit, each set to a fruit it does not already hold, shuffled. Every question names its array a, as the loops over an array do.");
  ("Reading forwards, the wrong answers are the items as they were, the new value written once, and only the first item changed. Reading backwards, the wrong programs start at 1, and stop one early.");
  ("The writing is a first draft by Claude 2026-11-15.");
  let sizes = [3, 3, 3, 4, 4, 4];
  let example_items = ["love", "joy", "peace"];
  let example_value = "kindness";
  function program_with(items, value, start, condition) {
    let codes = list_map(items, json_to);
    let array = js_code_array(codes);
    let head = js_code_let_statement("a", array);
    let change_lines = js_code_for_start_condition_update_lines(
      "let i = " + start + ";",
      condition,
      ["a[i] = " + json_to(value) + ";", "i++;"],
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
  function program_of(items, value) {
    let code = program_with(items, value, "0", "i < a.length");
    return code;
  }
  function batch_get() {
    "six programs, arrays of three and four items three times each, shuffled, each setting every item to a fruit it does not hold";
    let codes = [];
    for (let k = 0; less_than(k, list_size(sizes)); k++) {
      let count = list_get(sizes, k);
      let list = fruits_of_the_spirit_short();
      let drawn = list_shuffle_take(list, count + 1);
      let items = drawn.slice(0, count);
      let value = list_last(drawn);
      let code = program_of(items, value);
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
  function value_of(code) {
    "the value every item is set to, read off the line inside the first loop: a[i] = <value>;";
    let list5 = text_split_newline(code);
    let line = list_get(list5, 2);
    let inside = text_between(line, "= ", ";");
    let value2 = json_from(inside);
    return value2;
  }
  function decoys(question, answer) {
    "the items as they were, the value written once, and only the first item changed; each once, never the answer";
    let items3 = items_of(question);
    let value3 = value_of(question);
    let unchanged = list_join_newline(items3);
    let rest = items3.slice(1);
    let list3 = list_concat([value3], rest);
    let first_only = list_join_newline(list3);
    let candidates = [unchanged, value3, first_only];
    let found = list_without(candidates, answer);
    let once = list_unique(found);
    return once;
  }
  function backwards_decoys(question, answer) {
    "starting at 1, and stopping one early";
    let items4 = items_of(answer);
    let value4 = value_of(answer);
    let v2 = program_with(items4, value4, "1", "i < a.length");
    let v3 = program_with(items4, value4, "0", "i < a.length - 1");
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
    "setting one item then writing every item out remembered, then setting every item";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_array_set_for,
      [
        "",
        'a[1] = "kindness"',
        " sets one item, and a loop writes every item out",
      ],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_two, [
      "Inside a loop, ",
      'a[i] = "kindness"',
      " sets every item:",
    ]);
    let code2 = program_of(example_items, example_value);
    let lines2 = text_split_newline(code2);
    let value = eval_console_log_lines(code2);
    app_learn_js_code_lines_writes_out(box_two, lines2, value);
    app_learn_js_div_cycle_code(box_two, [
      "",
      "i",
      " is ",
      "0",
      ", then ",
      "1",
      ", then ",
      "2",
      ", so ",
      "a[0]",
      ", ",
      "a[1]",
      " and ",
      "a[2]",
      " each become ",
      '"kindness"',
    ]);
    app_learn_js_div_cycle_output(box_two, [
      "So ",
      "kindness",
      " is written out three times",
    ]);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Setting every item",
    'a[i] = "kindness";',
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
