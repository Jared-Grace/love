import { arguments_assert } from "./arguments_assert.mjs";
import { list_map } from "./list_map.mjs";
import { json_to } from "./json_to.mjs";
import { js_code_array } from "./js_code_array.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { js_code_called } from "./js_code_called.mjs";
import { js_code_while_lines_multiple } from "./js_code_while_lines_multiple.mjs";
import { js_code_console_log_statement } from "./js_code_console_log_statement.mjs";
import { js_code_for_start_condition_update_lines } from "./js_code_for_start_condition_update_lines.mjs";
import { list_concat } from "./list_concat.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { list_size } from "./list_size.mjs";
import { less_than } from "./less_than.mjs";
import { fruits_of_the_spirit } from "./fruits_of_the_spirit.mjs";
import { list_get } from "./list_get.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { list_shuffle } from "./list_shuffle.mjs";
import { app_learn_js_batch_question_answer_fns } from "./app_learn_js_batch_question_answer_fns.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { text_between } from "./text_between.mjs";
import { list_first } from "./list_first.mjs";
import { json_from } from "./json_from.mjs";
import { list_last } from "./list_last.mjs";
import { list_copy_reverse } from "./list_copy_reverse.mjs";
import { list_take_less_1 } from "./list_take_less_1.mjs";
import { list_without } from "./list_without.mjs";
import { list_unique } from "./list_unique.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_array_pop_while } from "./app_learn_js_lesson_array_pop_while.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_div_cycle_output } from "./app_learn_js_div_cycle_output.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged } from "./app_learn_js_lesson_code_logged.mjs";
import { html_text_set_code_dark_lines } from "./html_text_set_code_dark_lines.mjs";
export function app_learn_js_lesson_array_reverse() {
  arguments_assert(arguments, 0);
  ('reversing an array by popping it into an empty one: let a = ["joy", "peace", "love"]; let b = []; while (a.length > 0) { b.push(a.pop()); } and a for loop writing out each item of b writes out love, peace and joy');
  ("2026-11-14, the human's idea, after Pop until empty: pop each item out of an array and push it onto an empty one. The last item out of a is the first into b, so b holds the items the other way round. A for loop writes out every item of b, at the human's asking, since writing out one item shows only one place of the order; so it stands after the lessons that teach a for loop over an array. Not picked: three lines writing out b[0], b[1] and b[2], which could stand earlier but are longer and fit one size only.");
  ("A set is six questions, arrays of two and three items three times each, shuffled. 2026-11-14, at the human's asking: every question names its arrays a and b, a always the one emptied and b always the one filled, so a letter never swaps jobs between questions.");
  ("Reading forwards, the wrong answers are the items in a's own order, the last item of a alone, and b missing a's first item (the while stopping one early). Reading backwards, the wrong programs are the same loops over a's items in the other order, and the while stopping at length > 1.");
  ("The writing is a first draft by Claude 2026-11-14.");
  let sizes = [2, 2, 2, 3, 3, 3];
  let example_items = ["joy", "peace", "love"];
  function program_with(name, other, items, stop) {
    let codes = list_map(items, json_to);
    let array = js_code_array(codes);
    let head = js_code_let_statement(name, array);
    let empty = js_code_let_statement(other, "[]");
    let popped = js_code_called(name + ".pop", "");
    let pushed = js_code_called(other + ".push", popped) + ";";
    let condition = name + ".length > " + stop;
    let loop = js_code_while_lines_multiple(condition, [pushed]);
    let item = other + "[i]";
    let log_line = js_code_console_log_statement(item);
    let for_lines = js_code_for_start_condition_update_lines(
      "let i = 0;",
      "i < " + other + ".length",
      [log_line, "i++;"],
    );
    let a = list_concat([head, empty], loop);
    let lines = list_concat(a, for_lines);
    let code = list_join_newline(lines);
    return code;
  }
  function program_of(name, other, items) {
    let code = program_with(name, other, items, "0");
    return code;
  }
  function batch_get() {
    "six programs, arrays of two and three items three times each, shuffled, each moving a into b";
    let count = list_size(sizes);
    let codes = [];
    for (let k = 0; less_than(k, count); k++) {
      let list = fruits_of_the_spirit();
      let count3 = list_get(sizes, k);
      let items = list_shuffle_take(list, count3);
      let code = program_of("a", "b", items);
      codes.push(code);
    }
    list_shuffle(codes);
    return codes;
  }
  let batch = app_learn_js_batch_question_answer_fns(
    batch_get,
    eval_console_log_lines,
  );
  function line_name(code, index) {
    "the name the line at index declares: let <name> = ...";
    let list2 = text_split_newline(code);
    let line = list_get(list2, index);
    let name = text_between(line, "let ", " =");
    return name;
  }
  function items_of(code) {
    "the first array's items, read off the first line";
    let list3 = text_split_newline(code);
    let head = list_first(list3);
    let v = head.lastIndexOf(";");
    let after = head.slice(head.indexOf("=") + 1, v);
    let items = json_from(after);
    return items;
  }
  function decoys(question, answer) {
    "the items in a's own order, a's last item alone, and b missing a's first item; each once, never the answer";
    let items = items_of(question);
    let forwards = list_join_newline(items);
    let last = list_last(items);
    let backwards = list_copy_reverse(items);
    let early = list_take_less_1(backwards);
    let early_text = list_join_newline(early);
    let candidates = [forwards, last, early_text];
    let found = list_without(candidates, answer);
    let once = list_unique(found);
    return once;
  }
  function backwards_decoys(question, answer) {
    "the same loops over a's items in the other order, and the while stopping at length > 1";
    let name = line_name(answer, 0);
    let other = line_name(answer, 1);
    let items = items_of(answer);
    let flipped = list_copy_reverse(items);
    let v2 = program_of(name, other, flipped);
    let v3 = program_with(name, other, items, "1");
    let programs = [v2, v3];
    return programs;
  }
  function above(root, context) {
    "popping until empty remembered, then pushing each popped item onto an empty array";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_array_pop_while,
      [
        "a ",
        "while",
        " loop can keep popping until an array is empty, and the items come out last to first",
      ],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_two, [
      "Each item popped off ",
      "a",
      " can be pushed onto an empty array ",
      "b",
      ":",
    ]);
    let code = program_of("a", "b", example_items);
    let lines2 = text_split_newline(code);
    let value = eval_console_log_lines(code);
    app_learn_js_code_lines_writes_out(box_two, lines2, value);
    app_learn_js_div_cycle_code(box_two, [
      "The last item of ",
      "a",
      " comes out first, so it goes into ",
      "b",
      " first, and ",
      "b",
      " holds the items the other way round",
    ]);
    app_learn_js_div_cycle_output(box_two, [
      "So ",
      "love",
      ", then ",
      "peace",
      ", then ",
      "joy",
      " are written out",
    ]);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Reversing an array",
    "b.push(a.pop());",
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
