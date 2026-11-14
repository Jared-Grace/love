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
import { fruits_of_the_spirit } from "./fruits_of_the_spirit.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { list_take_less_1 } from "./list_take_less_1.mjs";
import { list_last } from "./list_last.mjs";
import { list_get } from "./list_get.mjs";
import { list_shuffle } from "./list_shuffle.mjs";
import { app_learn_js_batch_question_answer_fns } from "./app_learn_js_batch_question_answer_fns.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { list_first } from "./list_first.mjs";
import { json_from } from "./json_from.mjs";
import { text_between } from "./text_between.mjs";
import { number_from_text } from "./number_from_text.mjs";
import { add } from "./add.mjs";
import { list_without } from "./list_without.mjs";
import { list_unique } from "./list_unique.mjs";
import { not_equal } from "./not_equal.mjs";
import { list_filter } from "./list_filter.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_array_set } from "./app_learn_js_lesson_array_set.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_div_cycle_output } from "./app_learn_js_div_cycle_output.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged } from "./app_learn_js_lesson_code_logged.mjs";
import { html_text_set_code_dark_lines } from "./html_text_set_code_dark_lines.mjs";
export function app_learn_js_lesson_array_set_for() {
  arguments_assert(arguments, 0);
  ('setting an item, then every item written out: let a = ["love", "joy", "peace"]; a[1] = "kindness"; for (let i = 0; i < a.length; i++) { console.log(a[i]); } writes out love, kindness and peace');
  ("2026-11-14, at the human's asking: after Setting an item, set one item and then loop over all three and write each out, so the student sees that only the item set changes and the others stay where they were. It stands after Every item, of any array, since it needs the loop over a.length.");
  ("A set is six questions, arrays of three items, each index set twice, shuffled. Every question names its array a, as the loops over an array do.");
  ("Reading forwards, the wrong answers are the array as it was before, the new item pushed in at the index with the others moved along (four items), and the new item alone. Reading backwards, the wrong programs set the item one index along, and loop starting at 1.");
  ("The writing is a first draft by Claude 2026-11-14.");
  let indexes = [0, 0, 1, 1, 2, 2];
  let example_items = ["love", "joy", "peace"];
  function program_with(items, index, added, start) {
    let codes = list_map(items, json_to);
    let array = js_code_array(codes);
    let head = js_code_let_statement("a", array);
    let json = json_to(added);
    let set_line = "a[" + index + "] = " + json + ";";
    let log_line = js_code_console_log_statement("a[i]");
    let for_lines = js_code_for_start_condition_update_lines(
      "let i = " + start + ";",
      "i < a.length",
      [log_line, "i++;"],
    );
    let lines = list_concat([head, set_line], for_lines);
    let code = list_join_newline(lines);
    return code;
  }
  function program_of(items, index, added) {
    let code = program_with(items, index, added, 0);
    return code;
  }
  function batch_get() {
    "six programs, arrays of three items, each index set twice with an item not yet in the array, shuffled";
    let codes = [];
    for (let k = 0; less_than(k, list_size(indexes)); k++) {
      let list = fruits_of_the_spirit();
      let taken = list_shuffle_take(list, 4);
      let items = list_take_less_1(taken);
      let added = list_last(taken);
      let index = list_get(indexes, k);
      let code = program_of(items, index, added);
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
  function index_of_set(code) {
    "the index set, read off the second line";
    let list3 = text_split_newline(code);
    let line = list_get(list3, 1);
    let inside = text_between(line, "[", "]");
    let index2 = number_from_text(inside);
    return index2;
  }
  function added_of(code) {
    "the item set, read off the second line";
    let list4 = text_split_newline(code);
    let line2 = list_get(list4, 1);
    let inside2 = text_between(line2, "= ", ";");
    let added2 = json_from(inside2);
    return added2;
  }
  function along(index3) {
    "the next index along, going round to 0 after the last";
    let next = add(index3, 1);
    if (less_than(next, 3)) {
      return next;
    }
    let r = 0;
    return r;
  }
  function decoys(question, answer) {
    "the array as it was, the new item pushed in at the index with the rest moved along, and the new item alone; each once, never the answer";
    let items3 = items_of(question);
    let index4 = index_of_set(question);
    let added3 = added_of(question);
    let unchanged = list_join_newline(items3);
    let front = items3.slice(0, index4);
    let back = items3.slice(index4);
    let a = list_concat(front, [added3]);
    let inserted = list_concat(a, back);
    let inserted_text = list_join_newline(inserted);
    let candidates = [unchanged, inserted_text, added3];
    let found = list_without(candidates, answer);
    let once = list_unique(found);
    return once;
  }
  function backwards_decoys(question, answer) {
    "the item set one index along, and the loop starting at 1";
    let items4 = items_of(answer);
    let index5 = index_of_set(answer);
    let added4 = added_of(answer);
    let next2 = along(index5);
    let v2 = program_of(items4, next2, added4);
    let v3 = program_with(items4, index5, added4, 1);
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
    "setting an item remembered, then every item written out after it";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_array_set,
      [
        "",
        'a[1] = "kindness"',
        " puts ",
        '"kindness"',
        " at index ",
        "1",
        ", in place of the item there before",
      ],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_two, [
      "Only the item at index ",
      "1",
      " changes. The other items stay where they were:",
    ]);
    let code3 = program_of(example_items, 1, "kindness");
    let lines2 = text_split_newline(code3);
    let value = eval_console_log_lines(code3);
    app_learn_js_code_lines_writes_out(box_two, lines2, value);
    app_learn_js_div_cycle_output(box_two, [
      "So ",
      "love",
      ", then ",
      "kindness",
      ", then ",
      "peace",
      " are written out",
    ]);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Setting, then every item",
    'a[1] = "kindness"',
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
