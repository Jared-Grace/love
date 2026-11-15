import { equal } from "./equal.mjs";
import { subtract } from "./subtract.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_map } from "./list_map.mjs";
import { json_to } from "./json_to.mjs";
import { js_code_array } from "./js_code_array.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { add } from "./add.mjs";
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
import { list_without } from "./list_without.mjs";
import { list_unique } from "./list_unique.mjs";
import { not_equal } from "./not_equal.mjs";
import { list_filter } from "./list_filter.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_statement_name_temp_keep } from "./app_learn_js_lesson_statement_name_temp_keep.mjs";
import { app_learn_js_lesson_array_index_next } from "./app_learn_js_lesson_array_index_next.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_div_cycle_output } from "./app_learn_js_div_cycle_output.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged } from "./app_learn_js_lesson_code_logged.mjs";
import { html_text_set_code_dark_lines } from "./html_text_set_code_dark_lines.mjs";
export function app_learn_js_lesson_array_temp_keep() {
  arguments_assert(arguments, 0);
  ('keeping an item: let a = ["love", "joy", "peace"]; let temp = a[0]; a[0] = a[1]; console.log(temp); writes out love');
  ("2026-11-15, at the human's asking, whose words were: a lesson with a temporary name calculation and log the temp. The step between The next item and Swapping two items: temp keeps the item before it is written over, as the swapping ladder's lesson on keeping a value does for plain names, so the swap that follows asks for one new line only.");
  ("A set is six questions, arrays of three items, the item kept at index 0 or 1 and written over by the one after it, each written out as temp three times or as the item written over three times. Each question names its array with its own letter; the examples keep a.");
  ("Reading forwards, the wrong answers are the item written over takes in place of what temp kept, and the other way round, and the third item. Reading backwards, the wrong programs keep the item one along, and leave out temp, writing out the item written over.");
  ("Not picked: temp holding a sum, let temp = a[0] + a[1], which teaches nothing the swap needs. The writing is a first draft by Claude 2026-11-15.");
  let indexes = [0, 0, 0, 1, 1, 1];
  let logs = ["temp", "item", "temp", "item", "temp", "temp"];
  let example_items = ["love", "joy", "peace"];
  function program_of(name, items, index, logged) {
    let codes = list_map(items, json_to);
    let array = js_code_array(codes);
    let head = js_code_let_statement(name, array);
    let at = name + "[" + index + "]";
    let next = add(index, 1);
    let after = name + "[" + next + "]";
    let keep_line = js_code_let_statement("temp", at);
    let set_line = at + " = " + after + ";";
    let read = equal(logged, "temp") ? "temp" : at;
    let log_line = js_code_console_log_statement(read);
    let lines = [head, keep_line, set_line, log_line];
    let code = list_join_newline(lines);
    return code;
  }
  function batch_get() {
    "six programs, arrays of three items, the item at 0 or 1 kept and written over, shuffled, each with its own letter";
    let letters = app_learn_js_name_letters([]);
    let count = list_size(indexes);
    let names = list_shuffle_take(letters, count);
    let codes = [];
    for (let k = 0; less_than(k, list_size(indexes)); k++) {
      let list = fruits_of_the_spirit_short();
      let items = list_shuffle_take(list, 3);
      let index = list_get(indexes, k);
      let logged = list_get(logs, k);
      let name = list_get(names, k);
      let code = program_of(name, items, index, logged);
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
    "the index kept, read off the second line: let temp = <name>[<index>];";
    let list4 = text_split_newline(code);
    let line = list_get(list4, 1);
    let inside = text_between(line, "[", "]");
    let index2 = number_from_text(inside);
    return index2;
  }
  function logged_of(code) {
    "temp when the last line writes out temp, and otherwise item";
    let list5 = text_split_newline(code);
    let line2 = list_get(list5, 3);
    let inside2 = text_between(line2, "(", ")");
    if (equal(inside2, "temp")) {
      let r2 = "temp";
      return r2;
    }
    let r = "item";
    return r;
  }
  function decoys(question, answer) {
    "the item kept, the item written over it, and the third item; each once, never the answer";
    let items3 = items_of(question);
    let index3 = index_of(question);
    let kept = list_get(items3, index3);
    let next2 = add(index3, 1);
    let over = list_get(items3, next2);
    let third = list_get(items3, 2);
    if (equal(index3, 1)) {
      third = list_get(items3, 0);
    }
    let candidates = [kept, over, third];
    let found = list_without(candidates, answer);
    let once = list_unique(found);
    return once;
  }
  function backwards_decoys(question, answer) {
    "keeping the item one along, and writing out the other of temp and the item written over";
    let name3 = name_of(answer);
    let items4 = items_of(answer);
    let index4 = index_of(answer);
    let logged2 = logged_of(answer);
    let other_index = subtract(1, index4);
    let other_log = equal(logged2, "temp") ? "item" : "temp";
    let v2 = program_of(name3, items4, other_index, logged2);
    let v3 = program_of(name3, items4, index4, other_log);
    let programs = [v2, v3];
    let out_answer = eval_console_log_lines(answer);
    function differs(code3) {
      let out = eval_console_log_lines(code3);
      let ne = not_equal(out, out_answer);
      return ne;
    }
    let kept2 = list_filter(programs, differs);
    return kept2;
  }
  function above(root, context) {
    "keeping a value in temp and the next item remembered, then keeping an item";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_statement_name_temp_keep,
      [
        "",
        "let temp = a;",
        " keeps what ",
        "a",
        " held, even after ",
        "a",
        " changes",
      ],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_two,
      context,
      app_learn_js_lesson_array_index_next,
      ["", "a[1]", " is the item after ", "a[0]"],
    );
    let box_three = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_three, [
      "",
      "temp",
      " can keep an item, too:",
    ]);
    let code2 = program_of("a", example_items, 0, "temp");
    let lines2 = text_split_newline(code2);
    let value = eval_console_log_lines(code2);
    app_learn_js_code_lines_writes_out(box_three, lines2, value);
    app_learn_js_div_cycle_code(box_three, [
      "",
      "temp",
      " is ",
      '"love"',
      ". Then ",
      "a[0] = a[1]",
      " puts ",
      '"joy"',
      " at index ",
      "0",
      ", but ",
      "temp",
      " still holds ",
      '"love"',
    ]);
    app_learn_js_div_cycle_output(box_three, [
      "So ",
      "love",
      " is written out",
    ]);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Keeping an item",
    "let temp = a[0];",
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
