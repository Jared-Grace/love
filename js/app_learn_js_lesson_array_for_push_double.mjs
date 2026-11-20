import { arguments_assert } from "./arguments_assert.mjs";
import { list_map } from "./list_map.mjs";
import { json_to } from "./json_to.mjs";
import { js_code_array } from "./js_code_array.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { js_code_called } from "./js_code_called.mjs";
import { js_code_for_start_condition_update_lines } from "./js_code_for_start_condition_update_lines.mjs";
import { js_code_console_log_statement } from "./js_code_console_log_statement.mjs";
import { list_concat_multiple } from "./list_concat_multiple.mjs";
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
import { multiply } from "./multiply.mjs";
import { add } from "./add.mjs";
import { list_take_less_1 } from "./list_take_less_1.mjs";
import { list_without } from "./list_without.mjs";
import { list_unique } from "./list_unique.mjs";
import { not_equal } from "./not_equal.mjs";
import { list_filter } from "./list_filter.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_array_for_double } from "./app_learn_js_lesson_array_for_double.mjs";
import { app_learn_js_lesson_array_copy } from "./app_learn_js_lesson_array_copy.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_div_cycle_output } from "./app_learn_js_div_cycle_output.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged } from "./app_learn_js_lesson_code_logged.mjs";
import { html_text_set_code_dark_lines } from "./html_text_set_code_dark_lines.mjs";
export function app_learn_js_lesson_array_for_push_double() {
  arguments_assert(arguments, 0);
  ("building a new array from an old one: let a = [3, 1, 4]; let b = []; for (let i = 0; i < a.length; i++) { b.push(a[i] * 2); } and a for loop writing out each item of b writes out 6, 2 and 8");
  ("Chosen by the human 2026-11-20 (build a new array from an old one, item 4 of the array list agreed that day). Copying an array already pushes a[i] into an empty b, Keeping the words with e already pushes only some, and Doubling every item already sets a[i] = a[i] * 2 in place; the one new fact here is pushing something worked out from a[i], so b holds new values and a is left as it was. The writing is a first draft by Claude 2026-11-20.");
  ("The wrong programs are pushing a[i] (a copy, not doubled), pushing i * 2 (the index, not the item), and pushing a[i] + 2 (adding, not doubling); each is kept only when it writes out something else. Not picked: writing out a afterwards to show it is unchanged, which would be a second new fact.");
  let sizes = [3, 3, 3, 4, 4, 4];
  let pool = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let example_items = [3, 1, 4];
  function program_with(items, pushed) {
    "the program, pushing pushed into b for each item of a, then writing out each item of b";
    let codes = list_map(items, json_to);
    let right = js_code_array(codes);
    let head = js_code_let_statement("a", right);
    let empty = js_code_let_statement("b", "[]");
    let push_line = js_code_called("b.push", pushed) + ";";
    let build_lines = js_code_for_start_condition_update_lines(
      "let i = 0;",
      "i < a.length",
      [push_line, "i++;"],
    );
    let log_line = js_code_console_log_statement("b[i]");
    let log_lines = js_code_for_start_condition_update_lines(
      "let i = 0;",
      "i < b.length",
      [log_line, "i++;"],
    );
    let lines = list_concat_multiple([[head, empty], build_lines, log_lines]);
    let code = list_join_newline(lines);
    return code;
  }
  function program_of(items) {
    let code = program_with(items, "a[i] * 2");
    return code;
  }
  function batch_get() {
    "six programs, arrays of three and four numbers three times each, shuffled";
    let codes = [];
    for (let k = 0; less_than(k, list_size(sizes)); k++) {
      let size = list_get(sizes, k);
      let items = list_shuffle_take(pool, size);
      let v2 = program_of(items);
      codes.push(v2);
    }
    list_shuffle(codes);
    return codes;
  }
  let batch = app_learn_js_batch_question_answer_fns(
    batch_get,
    eval_console_log_lines,
  );
  function items_of(code) {
    "a's numbers, read off the first line";
    let list = text_split_newline(code);
    let first = list_first(list);
    let v = first.lastIndexOf(";");
    let after = first.slice(first.indexOf("=") + 1, v);
    let items = json_from(after);
    return items;
  }
  function doubled(n) {
    let r = multiply(n, 2);
    return r;
  }
  function plus_two(n2) {
    let r2 = add(n2, 2);
    return r2;
  }
  function decoys(question, answer) {
    "a's numbers not doubled, each plus 2, and b missing its last number; each once, never the answer";
    let items = items_of(question);
    let same = list_join_newline(items);
    let list2 = list_map(items, plus_two);
    let added = list_join_newline(list2);
    let list3 = list_map(items, doubled);
    let list4 = list_take_less_1(list3);
    let early = list_join_newline(list4);
    let candidates = [same, added, early];
    let found = list_without(candidates, answer);
    let once = list_unique(found);
    return once;
  }
  function backwards_decoys(question, answer) {
    "pushing a[i], pushing i * 2, and pushing a[i] + 2; kept only when they write out something else";
    let items = items_of(answer);
    let v3 = program_with(items, "a[i]");
    let v4 = program_with(items, "i * 2");
    let v5 = program_with(items, "a[i] + 2");
    let programs = [v3, v4, v5];
    let out_answer = eval_console_log_lines(answer);
    function differs(code) {
      let out = eval_console_log_lines(code);
      let ne = not_equal(out, out_answer);
      return ne;
    }
    let kept = list_filter(programs, differs);
    return kept;
  }
  function above(root, context) {
    "Doubling every item remembered, Copying an array remembered, then pushing the doubled item";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_array_for_double,
      ["", "a[i] = a[i] * 2;", " doubles each item in its place"],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_two,
      context,
      app_learn_js_lesson_array_copy,
      [
        "",
        "b.push(a[i]);",
        " in a loop puts every item of ",
        "a",
        " into ",
        "b",
      ],
    );
    let box_three = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_three, [
      "Push ",
      "a[i] * 2",
      " in place of ",
      "a[i]",
      ", and ",
      "b",
      " gets every item of ",
      "a",
      " doubled, while ",
      "a",
      " stays as it was:",
    ]);
    let code = program_of(example_items);
    let lines = text_split_newline(code);
    let value = eval_console_log_lines(code);
    app_learn_js_code_lines_writes_out(box_three, lines, value);
    app_learn_js_div_cycle_output(box_three, [
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
    "Doubled into a new array",
    "b.push(a[i] * 2);",
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
