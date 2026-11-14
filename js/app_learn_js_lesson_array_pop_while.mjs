import { arguments_assert } from "./arguments_assert.mjs";
import { list_map } from "./list_map.mjs";
import { json_to } from "./json_to.mjs";
import { js_code_array } from "./js_code_array.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { js_code_called } from "./js_code_called.mjs";
import { js_code_console_log_statement } from "./js_code_console_log_statement.mjs";
import { js_code_while_lines_multiple } from "./js_code_while_lines_multiple.mjs";
import { list_concat } from "./list_concat.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { app_learn_js_name_letters } from "./app_learn_js_name_letters.mjs";
import { list_size } from "./list_size.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { less_than } from "./less_than.mjs";
import { fruits_of_the_spirit } from "./fruits_of_the_spirit.mjs";
import { list_get } from "./list_get.mjs";
import { list_shuffle } from "./list_shuffle.mjs";
import { app_learn_js_batch_question_answer_fns } from "./app_learn_js_batch_question_answer_fns.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { list_first } from "./list_first.mjs";
import { text_between } from "./text_between.mjs";
import { json_from } from "./json_from.mjs";
import { list_last } from "./list_last.mjs";
import { list_copy_reverse } from "./list_copy_reverse.mjs";
import { list_take_less_1 } from "./list_take_less_1.mjs";
import { list_without } from "./list_without.mjs";
import { list_unique } from "./list_unique.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_array_pop_value } from "./app_learn_js_lesson_array_pop_value.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_div_cycle_output } from "./app_learn_js_div_cycle_output.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged } from "./app_learn_js_lesson_code_logged.mjs";
import { html_text_set_code_dark_lines } from "./html_text_set_code_dark_lines.mjs";
export function app_learn_js_lesson_array_pop_while() {
  arguments_assert(arguments, 0);
  ('popping until an array is empty: let a = ["joy", "peace", "love"]; while (a.length > 0) { console.log(a.pop()); } writes out love, peace and joy, one under the other');
  ("2026-11-14, the human's idea, right after What pop gives back: a while loop that pops until the length is 0. Nothing in it is new - while, .length, > 0 and console.log(a.pop()) are each taught before it - so what it adds is putting them together, and two facts that only show once they are: the items come out last to first, and the loop stops because the array shrinks rather than because a counter grows.");
  ("A set is six questions, arrays of two and three items three times each, shuffled; one item is left out, since its one line reads the same whichever way the items come out. Each question names its array with its own letter; the examples keep a.");
  ("Reading forwards, the wrong answers are the items first to last, the last item alone (the loop run once), and every item but the first (stopping one too early). Reading backwards, the wrong programs are the same loop over the items in the other order, and the loop stopping at a.length > 1.");
  ("The writing is a first draft by Claude 2026-11-14.");
  let sizes = [2, 2, 2, 3, 3, 3];
  let example_items = ["joy", "peace", "love"];
  function program_with(name, items, stop) {
    let codes = list_map(items, json_to);
    let array = js_code_array(codes);
    let head = js_code_let_statement(name, array);
    let call = js_code_called(name + ".pop", "");
    let log_line = js_code_console_log_statement(call);
    let condition = name + ".length > " + stop;
    let loop = js_code_while_lines_multiple(condition, [log_line]);
    let lines = list_concat([head], loop);
    let code = list_join_newline(lines);
    return code;
  }
  function program_of(name, items) {
    let code = program_with(name, items, "0");
    return code;
  }
  function batch_get() {
    "six programs, arrays of two and three items three times each, shuffled, each with its own letter";
    let letters = app_learn_js_name_letters([]);
    let count = list_size(sizes);
    let names = list_shuffle_take(letters, count);
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
    "the items first to last, the last item alone, and every item but the first; each once, never the answer";
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
    "the same loop over the items in the other order, and the loop stopping at length > 1";
    let name = name_of(answer);
    let items = items_of(answer);
    let other = list_copy_reverse(items);
    let v2 = program_of(name, other);
    let v3 = program_with(name, items, "1");
    let programs = [v2, v3];
    return programs;
  }
  function above(root, context) {
    "what pop gives back remembered, then popping in a loop until the array is empty";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_array_pop_value,
      ["", "a.pop()", " removes the last item and gives it back"],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_two, [
      "A ",
      "while",
      " loop can keep popping until ",
      "a",
      " is empty:",
    ]);
    let code = program_of("a", example_items);
    let lines2 = text_split_newline(code);
    let value = eval_console_log_lines(code);
    app_learn_js_code_lines_writes_out(box_two, lines2, value);
    app_learn_js_div_cycle_code(box_two, [
      "Each ",
      "a.pop()",
      " takes the last item off, so the items come out last to first. Once ",
      "a.length",
      " is ",
      "0",
      ", the loop stops",
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
    "Pop until empty",
    "while (a.length > 0) { console.log(a.pop()); }",
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
