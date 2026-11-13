import { arguments_assert } from "./arguments_assert.mjs";
import { list_map } from "./list_map.mjs";
import { json_to } from "./json_to.mjs";
import { js_code_array } from "./js_code_array.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { js_code_called } from "./js_code_called.mjs";
import { js_code_console_log_statement } from "./js_code_console_log_statement.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { app_learn_js_name_letters } from "./app_learn_js_name_letters.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { list_size } from "./list_size.mjs";
import { less_than } from "./less_than.mjs";
import { fruits_of_the_spirit } from "./fruits_of_the_spirit.mjs";
import { list_get } from "./list_get.mjs";
import { list_shuffle } from "./list_shuffle.mjs";
import { app_learn_js_batch_question_answer_fns } from "./app_learn_js_batch_question_answer_fns.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { list_first } from "./list_first.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { text_between } from "./text_between.mjs";
import { json_from } from "./json_from.mjs";
import { subtract } from "./subtract.mjs";
import { list_without } from "./list_without.mjs";
import { list_unique } from "./list_unique.mjs";
import { list_take_less_1 } from "./list_take_less_1.mjs";
import { list_concat } from "./list_concat.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_array_pop } from "./app_learn_js_lesson_array_pop.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_div_cycle_output } from "./app_learn_js_div_cycle_output.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged } from "./app_learn_js_lesson_code_logged.mjs";
import { html_text_set_code_dark_lines } from "./html_text_set_code_dark_lines.mjs";
export function app_learn_js_lesson_array_pop_value() {
  arguments_assert(arguments, 0);
  ('what a.pop() gives back: let a = ["joy", "peace"]; console.log(a.pop()); writes out peace');
  ("2026-11-13, the human's idea, right after Taking an item off: a.pop() gives back the item it removes, so writing it out shows which item left - the last - instead of only that the length went down. A call giving back a value is already taught by the Math lessons; the one new fact is what pop gives back.");
  ("Chosen over writing out a[a.length - 1] after the pop, which shows the item BEFORE the one removed - a roundabout way to say which item left.");
  ("A set is six questions, arrays of two and three items three times each, shuffled; one item is left out, since then first and last are the same word and the question cannot tell them apart. Each question names its array with its own letter; the examples keep a.");
  ("Reading forwards, the wrong answers are the first item, the item before the last, and how many items are left. Reading backwards, the wrong programs are the same array with its last item left out, and with its last two items swapped.");
  ("Not stepped yet, like Taking an item off: stepping knows push as the only array function.");
  ("The writing is a first draft by Claude 2026-11-13.");
  let sizes = [2, 2, 2, 3, 3, 3];
  let example_items = ["joy", "peace"];
  function program_of(name, items) {
    let codes = list_map(items, json_to);
    let array = js_code_array(codes);
    let head = js_code_let_statement(name, array);
    let call = js_code_called(name + ".pop", "");
    let log_line = js_code_console_log_statement(call);
    let lines = [head, log_line];
    let code = list_join_newline(lines);
    return code;
  }
  function batch_get() {
    "six programs, arrays of two and three items three times each, shuffled, each with its own letter";
    let letters = app_learn_js_name_letters([]);
    let count2 = list_size(sizes);
    let names = list_shuffle_take(letters, count2);
    let codes = [];
    for (let k = 0; less_than(k, list_size(sizes)); k++) {
      let list = fruits_of_the_spirit();
      let count3 = list_get(sizes, k);
      let items = list_shuffle_take(list, count3);
      let item = list_get(names, k);
      let code = program_of(item, items);
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
    let name = text_between(head, "let ", " =");
    return name;
  }
  function items_of(code) {
    "the array's items, read off the first line";
    let list3 = text_split_newline(code);
    let head = list_first(list3);
    let v = head.lastIndexOf(";");
    let after = head.slice(head.indexOf("=") + 1, v);
    let items = json_from(after);
    return items;
  }
  function decoys(question, answer) {
    "the first item, the item before the last, and how many are left; each once, never the answer";
    let items = items_of(question);
    let count = list_size(items);
    let first = list_first(items);
    let index = subtract(count, 2);
    let item2 = list_get(items, index);
    let object = subtract(count, 1);
    let json = json_to(object);
    let candidates = [first, item2, json];
    let found = list_without(candidates, answer);
    let once = list_unique(found);
    return once;
  }
  function backwards_decoys(question, answer) {
    "the same array with its last item left out, and with its last two items swapped";
    let name = name_of(answer);
    let items = items_of(answer);
    let count = list_size(items);
    let fewer = list_take_less_1(items);
    let front = list_take_less_1(fewer);
    let index2 = subtract(count, 1);
    let item3 = list_get(items, index2);
    let index3 = subtract(count, 2);
    let item4 = list_get(items, index3);
    let swapped = list_concat(front, [item3, item4]);
    let v2 = program_of(name, fewer);
    let v3 = program_of(name, swapped);
    let programs = [v2, v3];
    return programs;
  }
  function above(root, context) {
    "pop remembered, then writing out what pop gives back";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_array_pop,
      ["", "a.pop()", " removes the last item"],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_two, [
      "",
      "a.pop()",
      " also gives back the item it removes, so it can be written out:",
    ]);
    let code = program_of("a", example_items);
    let lines2 = text_split_newline(code);
    let value = eval_console_log_lines(code);
    app_learn_js_code_lines_writes_out(box_two, lines2, value);
    app_learn_js_div_cycle_code(box_two, [
      "The last item of ",
      "a",
      " is ",
      '"peace"',
      ". ",
      "a.pop()",
      " removes it and gives it back",
    ]);
    app_learn_js_div_cycle_output(box_two, ["So ", "peace", " is written out"]);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "What pop gives back",
    "console.log(a.pop());",
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
