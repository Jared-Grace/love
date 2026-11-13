import { arguments_assert } from "./arguments_assert.mjs";
import { list_map } from "./list_map.mjs";
import { json_to } from "./json_to.mjs";
import { js_code_array } from "./js_code_array.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { js_code_called } from "./js_code_called.mjs";
import { js_code_statement } from "./js_code_statement.mjs";
import { js_code_length } from "./js_code_length.mjs";
import { js_operator_minus_symbol } from "./js_operator_minus_symbol.mjs";
import { js_code_binary_spaced_nb } from "./js_code_binary_spaced_nb.mjs";
import { js_code_index } from "./js_code_index.mjs";
import { js_code_console_log_statement } from "./js_code_console_log_statement.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { fruits_of_the_spirit } from "./fruits_of_the_spirit.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { add } from "./add.mjs";
import { list_take_less_1 } from "./list_take_less_1.mjs";
import { list_last } from "./list_last.mjs";
import { less_than } from "./less_than.mjs";
import { property_get } from "./property_get.mjs";
import { app_learn_js_batch_question_answer_fns } from "./app_learn_js_batch_question_answer_fns.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { list_first } from "./list_first.mjs";
import { json_from } from "./json_from.mjs";
import { text_includes } from "./text_includes.mjs";
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
import { app_learn_js_lesson_array_push } from "./app_learn_js_lesson_array_push.mjs";
import { app_learn_js_lesson_array_last } from "./app_learn_js_lesson_array_last.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged } from "./app_learn_js_lesson_code_logged.mjs";
import { html_text_set_code_dark_lines } from "./html_text_set_code_dark_lines.mjs";
export function app_learn_js_lesson_array_push_last() {
  arguments_assert(arguments, 0);
  ('where a push puts its item: let a = ["love", "joy"]; a.push("peace"); console.log(a[a.length - 1]); writes out peace');
  ("2026-11-13, at the human's asking, the step after Adding to an array: the one new fact is that a.push(x) puts x at the END, so straight after a push the last item, a[a.length - 1], is the item pushed. Both halves are already taught - a.push in Adding to an array and a[a.length - 1] in The last item of an array - so only where the item lands is new.");
  ("Reading forwards, the wrong answers are the last item before the push (reading the push as doing nothing, or as adding at the front), the first item, and the last index as a number (writing out the index rather than the item). Reading backwards, the wrong programs are the same program with no push, and the same program pushing another word.");
  ("The writing is a first draft by Claude 2026-11-13.");
  let name = "a";
  let sizes = [2, 3, 4];
  let example_items = ["love", "joy"];
  let example_added = "peace";
  function head_line(items) {
    let codes = list_map(items, json_to);
    let array = js_code_array(codes);
    let line = js_code_let_statement(name, array);
    return line;
  }
  function push_line_of(added) {
    let inside_code = json_to(added);
    let call = js_code_called(name + ".push", inside_code);
    let line2 = js_code_statement(call);
    return line2;
  }
  function last_read() {
    "a[a.length - 1], written with its spaces";
    let length = js_code_length(name);
    let minus = js_operator_minus_symbol();
    let index = js_code_binary_spaced_nb(length, minus, "1");
    let read = js_code_index(name, index);
    return read;
  }
  function program_of(items, added) {
    let code4 = last_read();
    let log_line = js_code_console_log_statement(code4);
    let v2 = head_line(items);
    let v3 = push_line_of(added);
    let code = list_join_newline([v2, v3, log_line]);
    return code;
  }
  function program_without_push(items) {
    let code6 = last_read();
    let log_line2 = js_code_console_log_statement(code6);
    let v4 = head_line(items);
    let code2 = list_join_newline([v4, log_line2]);
    return code2;
  }
  function draw() {
    "an array of two to four different fruits, and one more fruit not in it";
    let words = fruits_of_the_spirit();
    let size = list_random_item(sizes);
    let count = add(size, 1);
    let taken = list_shuffle_take(words, count);
    let r = {
      items: list_take_less_1(taken),
      added: list_last(taken),
    };
    return r;
  }
  function batch_get() {
    "four programs, each a fresh array and a fresh word pushed";
    let codes3 = [];
    for (let i = 0; less_than(i, 4); i++) {
      let r3 = draw();
      let value = property_get(r3, "items");
      let value2 = property_get(r3, "added");
      let v = program_of(value, value2);
      codes3.push(v);
    }
    return codes3;
  }
  let batch = app_learn_js_batch_question_answer_fns(
    batch_get,
    eval_console_log_lines,
  );
  function parts_of(code3) {
    "the program's array, and its pushed word when it pushes, found by reading its lines as code";
    let lines = text_split_newline(code3);
    let head = list_first(lines);
    let v5 = head.indexOf("[");
    let array_text = head.slice(v5, head.lastIndexOf("]") + 1);
    let items = json_from(array_text);
    let added = null;
    let second = lines[1];
    if (text_includes(second, ".push(")) {
      let v6 = second.lastIndexOf(")");
      let added_text = second.slice(second.indexOf("(") + 1, v6);
      added = json_from(added_text);
    }
    let r2 = {
      items,
      added,
    };
    return r2;
  }
  function decoys(question, answer) {
    "the last item before the push, the first item, and the last index as a number";
    let object = parts_of(question);
    let items2 = property_get(object, "items");
    let old_last = list_last(items2);
    let first = list_first(items2);
    let object2 = list_size(items2);
    let index_written = json_to(object2);
    let candidates = [old_last, first, index_written];
    let found = list_without(candidates, answer);
    let once = list_unique(found);
    return once;
  }
  function backwards_decoys(question, answer) {
    "the same program with no push, and the same program pushing another word";
    let r5 = parts_of(answer);
    let added2 = property_get(r5, "added");
    let items3 = property_get(r5, "items");
    function unused(word) {
      let list = list_concat(items3, [added2]);
      let used = list_includes(list, word);
      let n = not(used);
      return n;
    }
    let list2 = fruits_of_the_spirit();
    let free = list_filter(list2, unused);
    let other = list_random_item(free);
    let v7 = program_without_push(items3);
    let v8 = program_of(items3, other);
    let programs = [v7, v8];
    return programs;
  }
  function backwards_wrong_say(question, answer, choice) {
    "said when the learner picks a wrong program: with no push the last item is still the array's own last item";
    if (text_includes(choice, ".push(")) {
      return null;
    }
    let r6 = [
      "With no ",
      "a.push(...)",
      ", nothing is added, so ",
      "a[a.length - 1]",
      " is still the last item the array started with",
    ];
    return r6;
  }
  function example(root) {
    "the example program and what it writes out";
    let code5 = program_of(example_items, example_added);
    let lines4 = text_split_newline(code5);
    let out = eval_console_log_lines(code5);
    app_learn_js_code_lines_writes_out(root, lines4, out);
  }
  function walk(root) {
    "the last item before the push, the push adding at the end, then the last item after it";
    let object3 = list_last(example_items);
    let old_last2 = json_to(object3);
    let added_code = json_to(example_added);
    app_learn_js_div_cycle_code(root, [
      "Before the push, the last item of ",
      "a",
      " is ",
      old_last2,
    ]);
    let v9 = push_line_of(example_added);
    app_learn_js_div_cycle_code(root, [
      "",
      v9,
      " adds ",
      added_code,
      " at the end",
    ]);
    let v10 = last_read();
    app_learn_js_div_cycle_code(root, ["So now ", v10, " is ", added_code]);
    app_learn_js_div_cycle_output(root, [
      "So ",
      example_added,
      " is written out",
    ]);
  }
  function above(root, context) {
    "a.push and a[a.length - 1] remembered, then where the push puts its item";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_array_push,
      ["", "a.push()", " adds an item to ", "a"],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_two,
      context,
      app_learn_js_lesson_array_last,
      ["", "a[a.length - 1]", " is the last item of ", "a"],
    );
    let box_three = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_three, [
      "",
      "a.push()",
      " adds the item at the end of the array. So straight after a push, ",
      "a[a.length - 1]",
      " is the item that was pushed:",
    ]);
    example(box_three);
    walk(box_three);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Where a push adds",
    "a[a.length - 1]",
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
    backwards_wrong_say,
    quiz_backwards_answer_count_override: null,
    forwards_answer_count_override: null,
  });
  return lesson;
}
