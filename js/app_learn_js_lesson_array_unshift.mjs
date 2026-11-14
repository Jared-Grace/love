import { arguments_assert } from "./arguments_assert.mjs";
import { list_map } from "./list_map.mjs";
import { json_to } from "./json_to.mjs";
import { js_code_array } from "./js_code_array.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { js_code_called } from "./js_code_called.mjs";
import { js_code_console_log_statement } from "./js_code_console_log_statement.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { app_learn_js_name_letters } from "./app_learn_js_name_letters.mjs";
import { list_size } from "./list_size.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { less_than } from "./less_than.mjs";
import { fruits_of_the_spirit } from "./fruits_of_the_spirit.mjs";
import { list_get } from "./list_get.mjs";
import { add } from "./add.mjs";
import { list_take_less_1 } from "./list_take_less_1.mjs";
import { list_last } from "./list_last.mjs";
import { list_shuffle } from "./list_shuffle.mjs";
import { app_learn_js_batch_question_answer_fns } from "./app_learn_js_batch_question_answer_fns.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { list_first } from "./list_first.mjs";
import { text_between } from "./text_between.mjs";
import { json_from } from "./json_from.mjs";
import { list_without } from "./list_without.mjs";
import { list_unique } from "./list_unique.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_array_push } from "./app_learn_js_lesson_array_push.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_div_cycle_output } from "./app_learn_js_div_cycle_output.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged } from "./app_learn_js_lesson_code_logged.mjs";
import { html_text_set_code_dark_lines } from "./html_text_set_code_dark_lines.mjs";
export function app_learn_js_lesson_array_unshift() {
  arguments_assert(arguments, 0);
  ('adding to the front: let a = ["joy", "peace"]; a.unshift("love"); console.log(a[0]); writes out love');
  ("2026-11-14, at the human's asking: unshift, the twin of push at the other end, right after the pop lessons. Writing out a[0] is what shows the new item went to the front; writing out the length would read the same as push and teach nothing new.");
  ("A set is six questions, arrays of one, two and three items twice each, shuffled. Each question names its array with its own letter; the examples keep a.");
  ("Reading forwards, the wrong answers are the item that was first before, the last item, and the length. Reading backwards, the wrong programs push the item instead, and unshift an item already in the array.");
  ("Not stepped yet: stepping knows push and pop as the only array functions that change an array.");
  ("The writing is a first draft by Claude 2026-11-14.");
  let sizes = [1, 1, 2, 2, 3, 3];
  let example_items = ["joy", "peace"];
  let example_added = "love";
  function program_of(name, items, added, method) {
    let codes = list_map(items, json_to);
    let array = js_code_array(codes);
    let head = js_code_let_statement(name, array);
    let json = json_to(added);
    let call = js_code_called(name + "." + method, json);
    let call_line = call + ";";
    let log_line = js_code_console_log_statement(name + "[0]");
    let lines = [head, call_line, log_line];
    let code = list_join_newline(lines);
    return code;
  }
  function batch_get() {
    "six programs, arrays of one, two and three items twice each, shuffled, each with its own letter and an item not yet in it added to the front";
    let letters = app_learn_js_name_letters([]);
    let count2 = list_size(sizes);
    let names = list_shuffle_take(letters, count2);
    let codes = [];
    for (let k = 0; less_than(k, list_size(sizes)); k++) {
      let list = fruits_of_the_spirit();
      let count3 = list_get(sizes, k);
      let more = add(count3, 1);
      let taken = list_shuffle_take(list, more);
      let items = list_take_less_1(taken);
      let added = list_last(taken);
      let name = list_get(names, k);
      let code = program_of(name, items, added, "unshift");
      codes.push(code);
    }
    list_shuffle(codes);
    return codes;
  }
  let batch = app_learn_js_batch_question_answer_fns(
    batch_get,
    eval_console_log_lines,
  );
  function name_of(code) {
    "the array's name, read off the first line: let <name> = [...]";
    let list2 = text_split_newline(code);
    let head = list_first(list2);
    let name2 = text_between(head, "let ", " =");
    return name2;
  }
  function items_of(code) {
    "the array's items, read off the first line";
    let list3 = text_split_newline(code);
    let head = list_first(list3);
    let v = head.lastIndexOf(";");
    let after = head.slice(head.indexOf("=") + 1, v);
    let items2 = json_from(after);
    return items2;
  }
  function added_of(code) {
    "the item added, read off the second line";
    let list4 = text_split_newline(code);
    let line = list_get(list4, 1);
    let inside = text_between(line, "(", ")");
    let added2 = json_from(inside);
    return added2;
  }
  function decoys(question, answer) {
    "the item that was first before, the last item, and the length after; each once, never the answer";
    let items3 = items_of(question);
    let first = list_first(items3);
    let last = list_last(items3);
    let count = list_size(items3);
    let length = add(count, 1);
    let json2 = json_to(length);
    let candidates = [first, last, json2];
    let found = list_without(candidates, answer);
    let once = list_unique(found);
    return once;
  }
  function backwards_decoys(question, answer) {
    "the same item pushed instead, and an item already in the array added to the front";
    let name3 = name_of(answer);
    let items4 = items_of(answer);
    let added3 = added_of(answer);
    let first2 = list_first(items4);
    let v2 = program_of(name3, items4, added3, "push");
    let v3 = program_of(name3, items4, first2, "unshift");
    let programs = [v2, v3];
    return programs;
  }
  function above(root, context) {
    "push remembered, then unshift adding to the front";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_array_push,
      ["", "a.push()", " adds an item to the end"],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_two, [
      "",
      "a.unshift()",
      " adds an item to the front:",
    ]);
    let code2 = program_of("a", example_items, example_added, "unshift");
    let lines2 = text_split_newline(code2);
    let value = eval_console_log_lines(code2);
    app_learn_js_code_lines_writes_out(box_two, lines2, value);
    app_learn_js_div_cycle_code(box_two, [
      "",
      'a.unshift("love")',
      " puts ",
      '"love"',
      " at the front, so ",
      "a[0]",
      " is ",
      '"love"',
    ]);
    app_learn_js_div_cycle_output(box_two, ["So ", "love", " is written out"]);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Adding to the front",
    "a.unshift()",
  );
  let lesson = app_learn_js_lesson_code_logged({
    above,
    name_id,
    batch_get: batch,
    example_count: 2,
    on_question: html_text_set_code_dark_lines,
    unscramble: false,
    lines: true,
    steps: false,
    decoys,
    backwards_decoys,
    quiz_backwards_answer_count_override: null,
    forwards_answer_count_override: null,
  });
  return lesson;
}
