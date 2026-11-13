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
import { subtract } from "./subtract.mjs";
import { add } from "./add.mjs";
import { list_without } from "./list_without.mjs";
import { list_unique } from "./list_unique.mjs";
import { list_includes } from "./list_includes.mjs";
import { not } from "./not.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { list_concat } from "./list_concat.mjs";
import { list_take_less_1 } from "./list_take_less_1.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_array_push } from "./app_learn_js_lesson_array_push.mjs";
import { app_learn_js_lesson_array_empty } from "./app_learn_js_lesson_array_empty.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_div_cycle_output } from "./app_learn_js_div_cycle_output.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged } from "./app_learn_js_lesson_code_logged.mjs";
import { html_text_set_code_dark_lines } from "./html_text_set_code_dark_lines.mjs";
export function app_learn_js_lesson_array_pop() {
  arguments_assert(arguments, 0);
  ('taking the last item off an array: let a = ["joy", "peace"]; a.pop(); console.log(a.length); writes out 1');
  ("2026-11-13, at the human's asking, after the push lessons: pop is the second array function, push undone. The one new fact is that a.pop() removes the last item, so the length goes down by 1. The human's wording, 2026-11-13: a.pop() does the opposite of a.push(): a.pop() removes the last item - saying which item here, rather than leaving it to a later lesson as push did, since the opposite of adding to the end reads most plainly as removing from the end.");
  ("A set is six questions, arrays of one, two and three items twice each, shuffled. An array of one pops down to [], so the empty array comes back as a result, not only as a start. Each question names its array with its own letter; the examples keep a.");
  ("Reading forwards, the wrong answers are the length before the pop, as if nothing changed; one more than that, as if pop added like push; and the last word, the one taken off. Reading backwards, the wrong programs start with one item fewer and one more.");
  ("Not stepped yet: stepping knows push as the only array function, and pop brings the two-level Call a function choice, which is its own piece of work.");
  ("The writing is a first draft by Claude 2026-11-13.");
  let sizes = [1, 1, 2, 2, 3, 3];
  let example_items = ["joy", "peace"];
  function program_of(name, items) {
    let codes = list_map(items, json_to);
    let array = js_code_array(codes);
    let head = js_code_let_statement(name, array);
    let call = js_code_called(name + ".pop", "");
    let pop_line = js_code_statement(call);
    let read = js_code_length(name);
    let log_line = js_code_console_log_statement(read);
    let lines = [head, pop_line, log_line];
    let code = list_join_newline(lines);
    return code;
  }
  function batch_get() {
    "six programs, arrays of one to three items twice each, shuffled, each with its own letter";
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
    "the length before the pop, one more than that, and the word taken off; each once, never the answer";
    let items = items_of(question);
    let count = list_size(items);
    let index = subtract(count, 1);
    let last = list_get(items, index);
    let json = json_to(count);
    let object = add(count, 1);
    let json2 = json_to(object);
    let candidates = [json, json2, last];
    let found = list_without(candidates, answer);
    let once = list_unique(found);
    return once;
  }
  function backwards_decoys(question, answer) {
    "the same array with its last item left out, and with one more item";
    let name = name_of(answer);
    let items = items_of(answer);
    function unused(word) {
      let b = list_includes(items, word);
      let free = not(b);
      return free;
    }
    let list4 = fruits_of_the_spirit();
    let list5 = list_filter(list4, unused);
    let extra = list_random_item(list5);
    let concated = list_concat(items, [extra]);
    let v2 = program_of(name, concated);
    let programs = [v2];
    let b2 = list_size(items);
    if (less_than(1, b2)) {
      let taken = list_take_less_1(items);
      let v3 = program_of(name, taken);
      programs.push(v3);
    }
    return programs;
  }
  function above(root, context) {
    "push and the empty array remembered, then pop taking one item off";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_array_push,
      ["", "a.push()", " adds one item, so the length goes up by ", "1"],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_two,
      context,
      app_learn_js_lesson_array_empty,
      ["", "[]", " is an array with no items, so its length is ", "0"],
    );
    let box_three = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_three, [
      "",
      "a.pop()",
      " does the opposite of ",
      "a.push()",
      ": ",
      "a.pop()",
      " removes the last item",
    ]);
    let code = program_of("a", example_items);
    let lines2 = text_split_newline(code);
    let value = eval_console_log_lines(code);
    app_learn_js_code_lines_writes_out(box_three, lines2, value);
    app_learn_js_div_cycle_code(box_three, [
      "",
      "a",
      " starts with ",
      "2",
      " items. ",
      "a.pop();",
      " removes the last item, so now ",
      "a",
      " has ",
      "1",
      " item",
    ]);
    app_learn_js_div_cycle_output(box_three, ["So ", "1", " is written out"]);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Taking an item off",
    "a.pop()",
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
