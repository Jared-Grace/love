import { arguments_assert } from "./arguments_assert.mjs";
import { list_map } from "./list_map.mjs";
import { json_to } from "./json_to.mjs";
import { js_code_array } from "./js_code_array.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { js_code_console_log_statement } from "./js_code_console_log_statement.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { app_learn_js_name_letters } from "./app_learn_js_name_letters.mjs";
import { list_size } from "./list_size.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { less_than } from "./less_than.mjs";
import { fruits_of_the_spirit_short } from "./fruits_of_the_spirit_short.mjs";
import { list_take_less_1 } from "./list_take_less_1.mjs";
import { list_last } from "./list_last.mjs";
import { list_get } from "./list_get.mjs";
import { list_shuffle } from "./list_shuffle.mjs";
import { app_learn_js_batch_question_answer_fns } from "./app_learn_js_batch_question_answer_fns.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { list_first } from "./list_first.mjs";
import { text_between } from "./text_between.mjs";
import { json_from } from "./json_from.mjs";
import { number_from_text } from "./number_from_text.mjs";
import { add } from "./add.mjs";
import { list_without } from "./list_without.mjs";
import { list_unique } from "./list_unique.mjs";
import { not_equal } from "./not_equal.mjs";
import { list_filter } from "./list_filter.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_array_set } from "./app_learn_js_lesson_array_set.mjs";
import { app_learn_js_lesson_array_index_name } from "./app_learn_js_lesson_array_index_name.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_div_cycle_output } from "./app_learn_js_div_cycle_output.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged } from "./app_learn_js_lesson_code_logged.mjs";
import { html_text_set_code_dark_lines } from "./html_text_set_code_dark_lines.mjs";
export function app_learn_js_lesson_array_set_name() {
  arguments_assert(arguments, 0);
  ('setting an item at a named index: let a = ["love", "joy", "peace"]; let i = 1; a[i] = "kindness"; console.log(a[1]); writes out kindness');
  ("2026-11-15, at the human's asking: after An index can be a name, set an item with a name as its index, with no loop yet, so the one new fact is that a[i] = ... sets the item at the index i holds. It is the step before a loop that sets every item. The index written out is the number i holds, written as a number, so the learner has to read i to see it is the same place.");
  ("A set is six questions, arrays of three items, each index set twice, shuffled. Each question names its array with its own letter and its index i; the examples keep a.");
  ("Reading forwards, the wrong answers are the item that was there before, the item one index along, and the index itself. Reading backwards, the wrong programs give i the next index along, and set at i while a different index is written out.");
  ("The writing is a first draft by Claude 2026-11-15.");
  let indexes = [0, 0, 1, 1, 2, 2];
  let example_items = ["love", "joy", "peace"];
  function program_of(name, items, index, added, logged) {
    let codes = list_map(items, json_to);
    let array = js_code_array(codes);
    let head = js_code_let_statement(name, array);
    let right = json_to(index);
    let index_line = js_code_let_statement("i", right);
    let json = json_to(added);
    let set_line = name + "[i] = " + json + ";";
    let log_line = js_code_console_log_statement(name + "[" + logged + "]");
    let lines = [head, index_line, set_line, log_line];
    let code = list_join_newline(lines);
    return code;
  }
  function batch_get() {
    "six programs, arrays of three items, each index set twice with an item not yet in the array, shuffled, each with its own letter";
    let letters = app_learn_js_name_letters([]);
    let count = list_size(indexes);
    let names = list_shuffle_take(letters, count);
    let codes = [];
    for (let k = 0; less_than(k, list_size(indexes)); k++) {
      let list = fruits_of_the_spirit_short();
      let taken = list_shuffle_take(list, 4);
      let items = list_take_less_1(taken);
      let added = list_last(taken);
      let index = list_get(indexes, k);
      let name = list_get(names, k);
      let code = program_of(name, items, index, added, index);
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
  function index_of_set(code) {
    "the index i holds, read off the second line: let i = <index>;";
    let list4 = text_split_newline(code);
    let line = list_get(list4, 1);
    let inside = text_between(line, "= ", ";");
    let index2 = number_from_text(inside);
    return index2;
  }
  function added_of(code) {
    "the item set, read off the third line";
    let list5 = text_split_newline(code);
    let line2 = list_get(list5, 2);
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
    "the item that was there before, the item one index along, and the index; each once, never the answer";
    let items3 = items_of(question);
    let index4 = index_of_set(question);
    let before = list_get(items3, index4);
    let index6 = along(index4);
    let next2 = list_get(items3, index6);
    let json2 = json_to(index4);
    let candidates = [before, next2, json2];
    let found = list_without(candidates, answer);
    let once = list_unique(found);
    return once;
  }
  function backwards_decoys(question, answer) {
    "i holding the next index along, and set at i while a different index is written out";
    let name3 = name_of(answer);
    let items4 = items_of(answer);
    let index5 = index_of_set(answer);
    let added3 = added_of(answer);
    let next3 = along(index5);
    let v2 = program_of(name3, items4, next3, added3, index5);
    let v3 = program_of(name3, items4, index5, added3, next3);
    let programs = [v2, v3];
    let out_answer = eval_console_log_lines(answer);
    function differs(code3) {
      let out = eval_console_log_lines(code3);
      let ne = not_equal(out, out_answer);
      return ne;
    }
    let kept = list_filter(programs, differs);
    return kept;
  }
  function above(root, context) {
    "setting an item and an index that is a name remembered, then setting at a name";
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
    app_learn_js_remember_from_lesson(
      box_two,
      context,
      app_learn_js_lesson_array_index_name,
      ["an index can be a name, like ", "a[i]"],
    );
    let box_three = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_three, [
      "A name can be the index when setting an item, too:",
    ]);
    let code2 = program_of("a", example_items, 1, "kindness", 1);
    let lines2 = text_split_newline(code2);
    let value = eval_console_log_lines(code2);
    app_learn_js_code_lines_writes_out(box_three, lines2, value);
    app_learn_js_div_cycle_code(box_three, [
      "",
      "i",
      " is ",
      "1",
      ", so ",
      'a[i] = "kindness"',
      " is the same as ",
      'a[1] = "kindness"',
      ". So ",
      "a[1]",
      " is ",
      '"kindness"',
    ]);
    app_learn_js_div_cycle_output(box_three, [
      "So ",
      "kindness",
      " is written out",
    ]);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Setting at a name",
    'a[i] = "kindness"',
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
