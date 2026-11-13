import { property_get } from "./property_get.mjs";
import { json_from } from "./json_from.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_map } from "./list_map.mjs";
import { json_to } from "./json_to.mjs";
import { js_code_array } from "./js_code_array.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { js_code_called } from "./js_code_called.mjs";
import { js_code_statement } from "./js_code_statement.mjs";
import { js_code_length } from "./js_code_length.mjs";
import { js_code_console_log_statement } from "./js_code_console_log_statement.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { fruits_of_the_spirit } from "./fruits_of_the_spirit.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { add } from "./add.mjs";
import { list_take_less_1 } from "./list_take_less_1.mjs";
import { list_last } from "./list_last.mjs";
import { less_than } from "./less_than.mjs";
import { app_learn_js_batch_question_answer_fns } from "./app_learn_js_batch_question_answer_fns.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { list_first } from "./list_first.mjs";
import { list_size } from "./list_size.mjs";
import { list_without } from "./list_without.mjs";
import { list_unique } from "./list_unique.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_concat } from "./list_concat.mjs";
import { not } from "./not.mjs";
import { list_filter } from "./list_filter.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { app_learn_js_div_cycle_output } from "./app_learn_js_div_cycle_output.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_array_length } from "./app_learn_js_lesson_array_length.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged } from "./app_learn_js_lesson_code_logged.mjs";
import { html_text_set_code_dark_lines } from "./html_text_set_code_dark_lines.mjs";
export function app_learn_js_lesson_array_push() {
  arguments_assert(arguments, 0);
  ('adding an item to the end of an array: let a = ["love", "joy"]; a.push("peace"); console.log(a.length); writes out 3');
  ("2026-11-13, at the human's asking: the first lesson that changes an array, and the first step toward building lists, empty arrays and objects. The one new fact is that a.push(x) adds one item, so the length grows by 1. The length is what is written out because .length is already taught and no lesson yet writes out a whole array. Where the item goes, at the end, is the next lesson, which writes out a[a.length - 1].");
  ("Reading forwards, the wrong answers are the length before the push (reading the push as doing nothing), one more than the answer (counting the pushed word twice), and the pushed word itself. Reading backwards, the wrong programs are the same program with no push, and the push given an array one item longer.");
  ("No stepping yet: the tracer cannot follow a.push. Teaching it to is the next step for every lesson that builds a list.");
  ("The writing is a first draft by Claude 2026-11-13.");
  let name = "a";
  let sizes = [2, 3, 4];
  let example_items = ["love", "joy"];
  let example_added = "peace";
  function program_of(items, added) {
    let codes = list_map(items, json_to);
    let array = js_code_array(codes);
    let head = js_code_let_statement(name, array);
    let inside_code = json_to(added);
    let call = js_code_called(name + ".push", inside_code);
    let push_line = js_code_statement(call);
    let read = js_code_length(name);
    let log_line = js_code_console_log_statement(read);
    let code = list_join_newline([head, push_line, log_line]);
    return code;
  }
  function program_without_push(items) {
    let codes = list_map(items, json_to);
    let array = js_code_array(codes);
    let head = js_code_let_statement(name, array);
    let read = js_code_length(name);
    let log_line = js_code_console_log_statement(read);
    let code = list_join_newline([head, log_line]);
    return code;
  }
  function draw() {
    "an array of two to four different fruits, and one more fruit not in it";
    let words = fruits_of_the_spirit();
    let size = list_random_item(sizes);
    let count = add(size, 1);
    let taken = list_shuffle_take(words, count);
    let items = list_take_less_1(taken);
    let added = list_last(taken);
    let r = {
      items,
      added,
    };
    return r;
  }
  function batch_get() {
    "four programs, each a fresh array and a fresh word pushed";
    let codes2 = [];
    for (let i = 0; less_than(i, 4); i++) {
      let r3 = draw();
      let added = property_get(r3, "added");
      let items = property_get(r3, "items");
      let v = program_of(items, added);
      codes2.push(v);
    }
    return codes2;
  }
  let batch = app_learn_js_batch_question_answer_fns(
    batch_get,
    eval_console_log_lines,
  );
  function parts_of(code3) {
    "the program's array and pushed word, found by reading its first two lines as code";
    let lines = text_split_newline(code3);
    let head = list_first(lines);
    let v2 = head.indexOf("[");
    let array_text = head.slice(v2, head.lastIndexOf("]") + 1);
    let items = json_from(array_text);
    let push_line = lines[1];
    let v3 = push_line.lastIndexOf(")");
    let added_text = push_line.slice(push_line.indexOf("(") + 1, v3);
    let added = json_from(added_text);
    let r2 = {
      items,
      added,
    };
    return r2;
  }
  function decoys(question, answer) {
    "the length before the push, one more than the answer, and the pushed word";
    let r4 = parts_of(question);
    let added = property_get(r4, "added");
    let items = property_get(r4, "items");
    let before = list_size(items);
    let after = add(before, 1);
    let twice = add(after, 1);
    let json = json_to(before);
    let json2 = json_to(twice);
    let candidates = [json, json2, added];
    let found = list_without(candidates, answer);
    let once = list_unique(found);
    return once;
  }
  function backwards_decoys(question, answer) {
    "the same program with no push, and the push given an array one item longer";
    let r5 = parts_of(answer);
    let added = property_get(r5, "added");
    let items = property_get(r5, "items");
    function unused(word) {
      let list = list_concat(items, [added]);
      let used = list_includes(list, word);
      let n = not(used);
      return n;
    }
    let list2 = fruits_of_the_spirit();
    let free = list_filter(list2, unused);
    let extra = list_random_item(free);
    let longer = list_concat(items, [extra]);
    let v4 = program_without_push(items);
    let v5 = program_of(longer, added);
    let programs = [v4, v5];
    return programs;
  }
  function example(root) {
    "the example program and what it writes out";
    let code5 = program_of(example_items, example_added);
    let lines4 = text_split_newline(code5);
    let out = eval_console_log_lines(code5);
    app_learn_js_code_lines_writes_out(root, lines4, out);
  }
  function walk(root) {
    "the length before the push, then after it";
    let object = list_size(example_items);
    let before = json_to(object);
    let left = list_size(example_items);
    let object2 = add(left, 1);
    let after = json_to(object2);
    app_learn_js_div_cycle_code(root, [
      "Before the push, ",
      "a",
      " has ",
      before,
      " items",
    ]);
    let json3 = json_to(example_added);
    app_learn_js_div_cycle_code(root, [
      "",
      "a.push(" + json_to(example_added) + ");",
      " adds ",
      json3,
      ", so now ",
      "a",
      " has ",
      after,
      " items",
    ]);
    app_learn_js_div_cycle_output(root, ["So ", after, " is written out"]);
  }
  function above(root, context) {
    "a.length remembered, then a.push adding one item";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_array_length,
      ["", "a.length", " is how many items ", "a", " holds"],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_two, [
      "If we have an array named ",
      "a",
      ", and we want to add an item to it, then we can use ",
      "a.push()",
      " with the item inside the brackets:",
    ]);
    example(box_two);
    walk(box_two);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Adding to an array",
    "a.push()",
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
