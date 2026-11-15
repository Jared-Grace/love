import { equal } from "./equal.mjs";
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
import { list_last } from "./list_last.mjs";
import { list_without } from "./list_without.mjs";
import { list_unique } from "./list_unique.mjs";
import { not_equal } from "./not_equal.mjs";
import { list_filter } from "./list_filter.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_statement_name_swap } from "./app_learn_js_lesson_statement_name_swap.mjs";
import { app_learn_js_lesson_array_temp_keep } from "./app_learn_js_lesson_array_temp_keep.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_div_cycle_output } from "./app_learn_js_div_cycle_output.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged } from "./app_learn_js_lesson_code_logged.mjs";
import { html_text_set_code_dark_lines } from "./html_text_set_code_dark_lines.mjs";
export function app_learn_js_lesson_array_swap() {
  arguments_assert(arguments, 0);
  ('swapping two items: let a = ["love", "joy", "peace"]; let temp = a[0]; a[0] = a[1]; a[1] = temp; console.log(a[1]); writes out love');
  ("2026-11-15, at the human's asking, as the step before swapping inside a loop and one pass of a bubble sort: the swap of plain names, let temp = a; a = b; b = temp;, done on two items of one array, with no loop. Keeping an item comes just before it, so the one new line is putting temp back.");
  ("A set is six questions, arrays of three items, swapping the items at 0 and 1 three times and at 1 and 2 three times, each writing out the first of the pair or the second. Each question names its array with its own letter; the examples keep a.");
  ("Reading forwards, the wrong answers are the item that was there before the swap, the item not swapped, and the index. Reading backwards, the wrong programs leave out temp, a[x] = a[y]; a[y] = a[x];, which writes the same item into both, and write out the other item of the pair.");
  ("The writing is a first draft by Claude 2026-11-15.");
  let firsts = [0, 0, 0, 1, 1, 1];
  let reads = ["first", "second", "first", "second", "second", "first"];
  let example_items = ["love", "joy", "peace"];
  function program_of(name, items, first, read, with_temp) {
    let codes = list_map(items, json_to);
    let array = js_code_array(codes);
    let head = js_code_let_statement(name, array);
    let x = name + "[" + first + "]";
    let second = add(first, 1);
    let y = name + "[" + second + "]";
    let lines = [head];
    if (with_temp) {
      let code4 = js_code_let_statement("temp", x);
      lines.push(code4);
      lines.push(x + " = " + y + ";");
      lines.push(y + " = temp;");
    } else {
      lines.push(x + " = " + y + ";");
      lines.push(y + " = " + x + ";");
    }
    let logged = equal(read, "first") ? x : y;
    let statement = js_code_console_log_statement(logged);
    lines.push(statement);
    let code = list_join_newline(lines);
    return code;
  }
  function batch_get() {
    "six programs, arrays of three items, swapping at 0 and 1 or at 1 and 2, shuffled, each with its own letter";
    let letters = app_learn_js_name_letters([]);
    let count = list_size(firsts);
    let names = list_shuffle_take(letters, count);
    let codes = [];
    for (let k = 0; less_than(k, list_size(firsts)); k++) {
      let list = fruits_of_the_spirit_short();
      let items = list_shuffle_take(list, 3);
      let first = list_get(firsts, k);
      let read = list_get(reads, k);
      let name = list_get(names, k);
      let code = program_of(name, items, first, read, true);
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
  function first_of(code) {
    "the first index of the pair, read off the second line: let temp = <name>[<first>];";
    let list4 = text_split_newline(code);
    let line = list_get(list4, 1);
    let inside = text_between(line, "[", "]");
    let first2 = number_from_text(inside);
    return first2;
  }
  function read_of(code) {
    "first when the last line writes out the first item of the pair, and otherwise second";
    let first3 = first_of(code);
    let list5 = text_split_newline(code);
    let line2 = list_last(list5);
    let inside2 = text_between(line2, "[", "]");
    let at = number_from_text(inside2);
    if (equal(at, first3)) {
      let r2 = "first";
      return r2;
    }
    let r = "second";
    return r;
  }
  function decoys(question, answer) {
    "the item there before the swap, the item not swapped, and the index; each once, never the answer";
    let items3 = items_of(question);
    let first4 = first_of(question);
    let read2 = read_of(question);
    let second2 = add(first4, 1);
    let at2 = equal(read2, "first") ? first4 : second2;
    let before = list_get(items3, at2);
    let left_out = equal(first4, 0) ? 2 : 0;
    let other = list_get(items3, left_out);
    let index_text = json_to(at2);
    let candidates = [before, other, index_text];
    let found = list_without(candidates, answer);
    let once = list_unique(found);
    return once;
  }
  function backwards_decoys(question, answer) {
    "leaving out temp, and writing out the other item of the pair";
    let name3 = name_of(answer);
    let items4 = items_of(answer);
    let first5 = first_of(answer);
    let read3 = read_of(answer);
    let other_read = equal(read3, "first") ? "second" : "first";
    let v2 = program_of(name3, items4, first5, read3, false);
    let v3 = program_of(name3, items4, first5, other_read, true);
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
    "swapping plain names and keeping an item remembered, then swapping two items";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_statement_name_swap,
      ["", "let temp = a; a = b; b = temp;", " swaps ", "a", " and ", "b"],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_two,
      context,
      app_learn_js_lesson_array_temp_keep,
      [
        "",
        "let temp = a[0];",
        " keeps the item, even after ",
        "a[0]",
        " changes",
      ],
    );
    let box_three = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_three, ["Two items swap the same way:"]);
    let code2 = program_of("a", example_items, 0, "second", true);
    let lines2 = text_split_newline(code2);
    let value = eval_console_log_lines(code2);
    app_learn_js_code_lines_writes_out(box_three, lines2, value);
    app_learn_js_div_cycle_code(box_three, [
      "",
      "temp",
      " keeps ",
      '"love"',
      ". ",
      "a[0] = a[1]",
      " puts ",
      '"joy"',
      " first. ",
      "a[1] = temp",
      " puts ",
      '"love"',
      " second",
    ]);
    app_learn_js_div_cycle_output(box_three, [
      "So ",
      "love",
      " is written out",
    ]);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Swapping two items",
    "a[1] = temp;",
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
