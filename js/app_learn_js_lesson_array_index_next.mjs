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
import { subtract } from "./subtract.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_array_index_name } from "./app_learn_js_lesson_array_index_name.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_div_cycle_output } from "./app_learn_js_div_cycle_output.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged } from "./app_learn_js_lesson_code_logged.mjs";
import { html_text_set_code_dark_lines } from "./html_text_set_code_dark_lines.mjs";
export function app_learn_js_lesson_array_index_next() {
  arguments_assert(arguments, 0);
  ('the next item: let a = ["love", "joy", "peace"]; let i = 1; console.log(a[i + 1]); writes out peace');
  ("2026-11-15, at the human's asking, as the first easier step before shifting, swapping in a loop and one pass of a bubble sort: each of those reads the item after a[i], so a[i + 1] is met alone first, with no loop. The one new fact is that the index can be worked out, i + 1 solved before the item is read.");
  ("A set is six questions, arrays of three items, i at 0 three times and at 1 three times, so i + 1 is always an index the array has. Each question names its array with its own letter; the examples keep a.");
  ("Reading forwards, the wrong answers are the item at i itself, the item two along where there is one, and the index i + 1. Reading backwards, the wrong programs write out a[i], and give i the other index.");
  ("The writing is a first draft by Claude 2026-11-15.");
  let indexes = [0, 0, 0, 1, 1, 1];
  let example_items = ["love", "joy", "peace"];
  function program_of(name, items, index, read) {
    let codes = list_map(items, json_to);
    let array = js_code_array(codes);
    let head = js_code_let_statement(name, array);
    let right = json_to(index);
    let index_line = js_code_let_statement("i", right);
    let log_line = js_code_console_log_statement(name + "[" + read + "]");
    let lines = [head, index_line, log_line];
    let code = list_join_newline(lines);
    return code;
  }
  function batch_get() {
    "six programs, arrays of three items, i at 0 or 1, shuffled, each with its own letter";
    let letters = app_learn_js_name_letters([]);
    let count = list_size(indexes);
    let names = list_shuffle_take(letters, count);
    let codes = [];
    for (let k = 0; less_than(k, list_size(indexes)); k++) {
      let list = fruits_of_the_spirit_short();
      let items = list_shuffle_take(list, 3);
      let index = list_get(indexes, k);
      let name = list_get(names, k);
      let code = program_of(name, items, index, "i + 1");
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
  function index_of(code) {
    "the index i holds, read off the second line: let i = <index>;";
    let list4 = text_split_newline(code);
    let line = list_get(list4, 1);
    let inside = text_between(line, "= ", ";");
    let index2 = number_from_text(inside);
    return index2;
  }
  function decoys(question, answer) {
    "the item at i, the item two along where there is one, and the index i + 1; each once, never the answer";
    let items3 = items_of(question);
    let index3 = index_of(question);
    let at = list_get(items3, index3);
    let candidates = [at];
    let two_along = add(index3, 2);
    let b = list_size(items3);
    if (less_than(two_along, b)) {
      let after_next = list_get(items3, two_along);
      candidates.push(after_next);
    }
    let next = add(index3, 1);
    let json = json_to(next);
    candidates.push(json);
    let found = list_without(candidates, answer);
    let once = list_unique(found);
    return once;
  }
  function backwards_decoys(question, answer) {
    "writing out a[i] in place of a[i + 1], and i holding the other index";
    let name3 = name_of(answer);
    let items4 = items_of(answer);
    let index4 = index_of(answer);
    let other = subtract(1, index4);
    let v2 = program_of(name3, items4, index4, "i");
    let v3 = program_of(name3, items4, other, "i + 1");
    let programs = [v2, v3];
    return programs;
  }
  function above(root, context) {
    "an index that is a name remembered, then the item after it";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_array_index_name,
      ["an index can be a name, like ", "a[i]"],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_two, [
      "",
      "a[i + 1]",
      " is the item after ",
      "a[i]",
      ":",
    ]);
    let code2 = program_of("a", example_items, 1, "i + 1");
    let lines2 = text_split_newline(code2);
    let value = eval_console_log_lines(code2);
    app_learn_js_code_lines_writes_out(box_two, lines2, value);
    app_learn_js_div_cycle_code(box_two, [
      "",
      "i",
      " is ",
      "1",
      ", so ",
      "i + 1",
      " is ",
      "2",
      ", and ",
      "a[i + 1]",
      " is ",
      "a[2]",
      ", which is ",
      '"peace"',
    ]);
    app_learn_js_div_cycle_output(box_two, ["So ", "peace", " is written out"]);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "The next item",
    "a[i + 1]",
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
