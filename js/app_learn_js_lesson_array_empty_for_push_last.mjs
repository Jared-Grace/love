import { arguments_assert } from "./arguments_assert.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { json_to } from "./json_to.mjs";
import { js_code_binary_spaced_nb } from "./js_code_binary_spaced_nb.mjs";
import { js_code_called } from "./js_code_called.mjs";
import { js_code_statement } from "./js_code_statement.mjs";
import { js_code_for_start_condition_update_lines } from "./js_code_for_start_condition_update_lines.mjs";
import { js_code_length } from "./js_code_length.mjs";
import { js_code_index } from "./js_code_index.mjs";
import { js_code_console_log_statement } from "./js_code_console_log_statement.mjs";
import { list_concat } from "./list_concat.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { app_learn_js_name_letters } from "./app_learn_js_name_letters.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { list_size } from "./list_size.mjs";
import { less_than } from "./less_than.mjs";
import { list_get } from "./list_get.mjs";
import { add } from "./add.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { list_shuffle } from "./list_shuffle.mjs";
import { app_learn_js_batch_question_answer_fns } from "./app_learn_js_batch_question_answer_fns.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { list_first } from "./list_first.mjs";
import { text_between } from "./text_between.mjs";
import { subtract } from "./subtract.mjs";
import { list_without } from "./list_without.mjs";
import { list_unique } from "./list_unique.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_array_empty_for_push } from "./app_learn_js_lesson_array_empty_for_push.mjs";
import { app_learn_js_lesson_array_push_last } from "./app_learn_js_lesson_array_push_last.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_div_cycle_output } from "./app_learn_js_div_cycle_output.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged } from "./app_learn_js_lesson_code_logged.mjs";
import { html_text_set_code_dark_lines } from "./html_text_set_code_dark_lines.mjs";
export function app_learn_js_lesson_array_empty_for_push_last() {
  arguments_assert(arguments, 0);
  ("the last number a loop pushed: let a = []; for (let i = 1; i < 4; i++) { a.push(i); } console.log(a[a.length - 1]); writes out 3");
  ("2026-11-13, the step after A loop that pushes, chosen there as the harder lesson for later: writing out the last item means working out the loop's last run - the last i still below the end, one less than the end - which is the off-by-one every loop is known for.");
  ("The start is drawn from 0 to 3 and the count of pushes from 2 to 4, so the end varies as well as the start and the answer cannot be read off either one alone. A set is four questions, each naming its array with its own letter; the examples keep a.");
  ("Reading forwards, the wrong answers are the end itself, as if i reaching it were pushed too; the first number pushed; the one before the last; and how many were pushed. Reading backwards, the wrong programs are the same loop ending one later and one earlier.");
  ("The writing is a first draft by Claude 2026-11-13.");
  let starts = [0, 1, 2, 3];
  let counts = [2, 3, 4];
  let index_name = "i";
  function program_of(name, start, end) {
    let head = js_code_let_statement(name, "[]");
    let right = json_to(start);
    let started = js_code_let_statement(index_name, right);
    let right2 = json_to(end);
    let condition = js_code_binary_spaced_nb(index_name, "<", right2);
    let call = js_code_called(name + ".push", index_name);
    let push_line = js_code_statement(call);
    let loop = js_code_for_start_condition_update_lines(started, condition, [
      push_line,
      index_name + "++;",
    ]);
    let left = js_code_length(name);
    let last_index = js_code_binary_spaced_nb(left, "-", "1");
    let read = js_code_index(name, last_index);
    let log_line = js_code_console_log_statement(read);
    let a = list_concat([head], loop);
    let lines = list_concat(a, [log_line]);
    let code = list_join_newline(lines);
    return code;
  }
  function batch_get() {
    "four programs, one per start, each with a count of pushes drawn from 2 to 4, shuffled, each with its own letter";
    let letters = app_learn_js_name_letters([]);
    let count = list_size(starts);
    let names = list_shuffle_take(letters, count);
    let codes = [];
    for (let k = 0; less_than(k, list_size(starts)); k++) {
      let start = list_get(starts, k);
      let right3 = list_random_item(counts);
      let end = add(start, right3);
      let item = list_get(names, k);
      let code = program_of(item, start, end);
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
    "the array's name, read off the first line: let <name> = []";
    let lines = text_split_newline(code);
    let head = list_first(lines);
    let name = text_between(head, "let ", " =");
    return name;
  }
  function bounds_of(code) {
    "where the loop starts and the number it stops below, read off its for line";
    let lines = text_split_newline(code);
    let for_line = list_get(lines, 1);
    let between = text_between(for_line, "let i = ", ";");
    let start = Number(between);
    let between2 = text_between(for_line, "i < ", ";");
    let end = Number(between2);
    let r = {
      start,
      end,
    };
    return r;
  }
  function decoys(question, answer) {
    "the end, the first number pushed, the one before the last, and how many were pushed; each once, never the answer";
    let bounds = bounds_of(question);
    let start = bounds.start;
    let end = bounds.end;
    let before_last = subtract(end, 2);
    let pushed = subtract(end, start);
    let json = json_to(end);
    let json2 = json_to(start);
    let json3 = json_to(before_last);
    let json4 = json_to(pushed);
    let candidates = [json, json2, json3, json4];
    let found = list_without(candidates, answer);
    let once = list_unique(found);
    return once;
  }
  function backwards_decoys(question, answer) {
    "the same loop ending one later, and one earlier";
    let name = name_of(answer);
    let bounds = bounds_of(answer);
    let start = bounds.start;
    let end = bounds.end;
    let sum = add(end, 1);
    let v = program_of(name, start, sum);
    let difference = subtract(end, 1);
    let v2 = program_of(name, start, difference);
    let programs = [v, v2];
    return programs;
  }
  function above(root, context) {
    "the loop that pushes and the last item remembered, then the last number a loop pushed";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_array_empty_for_push,
      ["a loop can push ", "i", " itself, the first number at index ", "0"],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_two,
      context,
      app_learn_js_lesson_array_push_last,
      ["", "a[a.length - 1]", " is the last item of ", "a"],
    );
    let box_three = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_three, [
      "So the last item is the last number the loop pushed:",
    ]);
    let code = program_of("a", 1, 4);
    let lines = text_split_newline(code);
    let out = eval_console_log_lines(code);
    app_learn_js_code_lines_writes_out(box_three, lines, out);
    app_learn_js_div_cycle_code(box_three, [
      "",
      "i",
      " is ",
      "1",
      ", then ",
      "2",
      ", then ",
      "3",
      ". When ",
      "i",
      " is ",
      "4",
      ", ",
      "4 < 4",
      " is ",
      "false",
      ", so ",
      "4",
      " is never pushed",
    ]);
    app_learn_js_div_cycle_code(box_three, [
      "The last number pushed is ",
      "3",
      ", so ",
      "a[a.length - 1]",
      " is ",
      "3",
    ]);
    app_learn_js_div_cycle_output(box_three, ["So ", "3", " is written out"]);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "The last number pushed",
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
    quiz_backwards_answer_count_override: null,
    forwards_answer_count_override: null,
  });
  return lesson;
}
