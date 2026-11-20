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
import { list_size } from "./list_size.mjs";
import { less_than } from "./less_than.mjs";
import { fruits_of_the_spirit_short } from "./fruits_of_the_spirit_short.mjs";
import { list_get } from "./list_get.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { list_shuffle } from "./list_shuffle.mjs";
import { app_learn_js_batch_question_answer_fns } from "./app_learn_js_batch_question_answer_fns.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { list_first } from "./list_first.mjs";
import { json_from } from "./json_from.mjs";
import { list_copy_reverse } from "./list_copy_reverse.mjs";
import { list_take_less_1 } from "./list_take_less_1.mjs";
import { range } from "./range.mjs";
import { list_without } from "./list_without.mjs";
import { list_unique } from "./list_unique.mjs";
import { not_equal } from "./not_equal.mjs";
import { list_filter } from "./list_filter.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_array_reverse } from "./app_learn_js_lesson_array_reverse.mjs";
import { app_learn_js_lesson_array_for_backwards } from "./app_learn_js_lesson_array_for_backwards.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged } from "./app_learn_js_lesson_code_logged.mjs";
import { html_text_set_code_dark_lines } from "./html_text_set_code_dark_lines.mjs";
export function app_learn_js_lesson_array_for_reverse() {
  arguments_assert(arguments, 0);
  ('reversing an array into a new one with a backwards for loop: let a = ["joy", "peace", "love"]; let b = []; for (let i = a.length - 1; i >= 0; i--) { b.push(a[i]); } and a for loop writing out each item of b writes out love, peace and joy');
  ("2026-11-20, chosen by the human after Reversing an array (pop into an empty array) and Backwards (a for loop running down). The new fact is that the two join: a backwards for reads a's items last to first, and pushing each one onto an empty b leaves b reversed, while a keeps all its items, because a[i] only reads an item and never takes it out. Not picked: writing out a afterwards as well, to show it is unchanged, which doubles the output to read for a fact the words already say.");
  ("Reading forwards, the wrong answers are the items in a's own order (the loop running up), b missing a's first item (asking i > 0), and the indexes last to first (pushing i, not a[i]). Reading backwards, the wrong programs are those three loops. Rejected: starting at i = a.length, the mistake most often made, because its first push is a[a.length], whose answer, undefined, is not taught yet; Backwards rejected it for the same reason.");
  ("A set is six questions, arrays of three and four items three times each, shuffled; the items are all different, so every order shows. The writing is a first draft by Claude 2026-11-20.");
  let sizes = [3, 3, 3, 4, 4, 4];
  let example_items = ["joy", "peace", "love"];
  function program_with(items, start, condition, update, pushed_value) {
    "the program: a, an empty b, a for loop pushing pushed_value onto b, then a for loop writing out each item of b";
    let codes = list_map(items, json_to);
    let array = js_code_array(codes);
    let head = js_code_let_statement("a", array);
    let empty = js_code_let_statement("b", "[]");
    let push_line = js_code_called("b.push", pushed_value) + ";";
    let build_lines = js_code_for_start_condition_update_lines(
      start,
      condition,
      [push_line, update],
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
    let code2 = program_with(
      items,
      "let i = a.length - 1;",
      "i >= 0",
      "i--;",
      "a[i]",
    );
    return code2;
  }
  function batch_get() {
    "six programs, arrays of three and four items three times each, shuffled, each reversing a into b";
    let count = list_size(sizes);
    let codes2 = [];
    for (let k = 0; less_than(k, count); k++) {
      let list = fruits_of_the_spirit_short();
      let size = list_get(sizes, k);
      let items2 = list_shuffle_take(list, size);
      let code3 = program_of(items2);
      codes2.push(code3);
    }
    list_shuffle(codes2);
    return codes2;
  }
  let batch = app_learn_js_batch_question_answer_fns(
    batch_get,
    eval_console_log_lines,
  );
  function items_of(code4) {
    "a's items, read off the first line";
    let list2 = text_split_newline(code4);
    let line = list_first(list2);
    let v = line.lastIndexOf(";");
    let after = line.slice(line.indexOf("=") + 1, v);
    let items3 = json_from(after);
    return items3;
  }
  function decoys(question, answer) {
    "the items in a's own order, b missing a's first item, and the indexes last to first; each once, never the answer";
    let items4 = items_of(question);
    let forwards_text = list_join_newline(items4);
    let backwards = list_copy_reverse(items4);
    let early = list_take_less_1(backwards);
    let early_text = list_join_newline(early);
    let count2 = list_size(items4);
    let indexes = range(count2);
    let indexes_back = list_copy_reverse(indexes);
    let indexes_text = list_join_newline(indexes_back);
    let candidates = [forwards_text, early_text, indexes_text];
    let found = list_without(candidates, answer);
    let once = list_unique(found);
    return once;
  }
  function backwards_decoys(question, answer) {
    "the loop running up, the loop asking i > 0, and pushing i; kept only when they write out something else";
    let items5 = items_of(answer);
    let up = program_with(items5, "let i = 0;", "i < a.length", "i++;", "a[i]");
    let short = program_with(
      items5,
      "let i = a.length - 1;",
      "i > 0",
      "i--;",
      "a[i]",
    );
    let indexes2 = program_with(
      items5,
      "let i = a.length - 1;",
      "i >= 0",
      "i--;",
      "i",
    );
    let programs = [up, short, indexes2];
    let out_answer = eval_console_log_lines(answer);
    function differs(code5) {
      let out = eval_console_log_lines(code5);
      let ne = not_equal(out, out_answer);
      return ne;
    }
    let kept = list_filter(programs, differs);
    return kept;
  }
  function above(root, context) {
    "pop-into-b reversing and the backwards for remembered, then the two joined: the backwards for pushing each item onto an empty b";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_array_reverse,
      ["", "b.push(a.pop());", " reverses a into b, but leaves a empty"],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_two,
      context,
      app_learn_js_lesson_array_for_backwards,
      [
        "",
        "i = a.length - 1; i >= 0; i--",
        " reads the items from the last to the first",
      ],
    );
    let box_three = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_three, [
      "Push each ",
      "a[i]",
      " read backwards onto an empty ",
      "b",
      ", and ",
      "b",
      " holds the items the other way round:",
    ]);
    let code6 = program_of(example_items);
    let lines2 = text_split_newline(code6);
    let value = eval_console_log_lines(code6);
    app_learn_js_code_lines_writes_out(box_three, lines2, value);
    app_learn_js_div_cycle_code(box_three, [
      "",
      "a[i]",
      " only reads an item, it does not take it out, so ",
      "a",
      " still holds ",
      '["joy", "peace", "love"]',
      "",
    ]);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Reversing with a backwards loop",
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
