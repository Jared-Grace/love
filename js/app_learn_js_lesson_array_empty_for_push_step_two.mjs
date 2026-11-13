import { ceil } from "./ceil.mjs";
import { divide } from "./divide.mjs";
import { not } from "./not.mjs";
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
import { list_shuffle } from "./list_shuffle.mjs";
import { less_than } from "./less_than.mjs";
import { list_get } from "./list_get.mjs";
import { subtract } from "./subtract.mjs";
import { multiply } from "./multiply.mjs";
import { add } from "./add.mjs";
import { app_learn_js_batch_question_answer_fns } from "./app_learn_js_batch_question_answer_fns.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { list_first } from "./list_first.mjs";
import { text_between } from "./text_between.mjs";
import { list_without } from "./list_without.mjs";
import { list_unique } from "./list_unique.mjs";
import { json_equal } from "./json_equal.mjs";
import { list_filter } from "./list_filter.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_array_for_step_two } from "./app_learn_js_lesson_array_for_step_two.mjs";
import { app_learn_js_lesson_array_empty_for_push_last } from "./app_learn_js_lesson_array_empty_for_push_last.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_div_cycle_output } from "./app_learn_js_div_cycle_output.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged } from "./app_learn_js_lesson_code_logged.mjs";
import { html_text_set_code_dark_lines } from "./html_text_set_code_dark_lines.mjs";
export function app_learn_js_lesson_array_empty_for_push_step_two() {
  arguments_assert(arguments, 0);
  ("the last number a loop counting by 2 pushed: let a = []; for (let i = 1; i < 6; i += 2) { a.push(i); } console.log(a[a.length - 1]); writes out 5");
  ("2026-11-13, the last of the push stepping stones: the same loop as The last number pushed, but i += 2. The last number pushed is now one below the end only when the gap from start to end is odd; when it is even, it is two below, because i jumps straight onto the end and stops.");
  ("The start is drawn from 0 to 3 and the loop pushes 2 or 3 numbers, with the end either right after the last push or one further on, so both cases - one below the end and two below - come up in every set. A set is four questions, each naming its array with its own letter; the examples keep a.");
  ("Reading forwards, the wrong answers are the end itself; one below the end, as if counting by 1; the first number pushed; the one pushed before the last; and how many were pushed. Reading backwards, the wrong programs end two later, two earlier, or count by 1 - each kept only when it writes out something else.");
  ("The writing is a first draft by Claude 2026-11-13.");
  let starts = [0, 1, 2, 3];
  let index_name = "i";
  let update_two = index_name + " += 2;";
  let update_one = index_name + "++;";
  function program_of(name, start, end, update) {
    let head = js_code_let_statement(name, "[]");
    let right = json_to(start);
    let started = js_code_let_statement(index_name, right);
    let right2 = json_to(end);
    let condition = js_code_binary_spaced_nb(index_name, "<", right2);
    let call = js_code_called(name + ".push", index_name);
    let push_line = js_code_statement(call);
    let loop = js_code_for_start_condition_update_lines(started, condition, [
      push_line,
      update,
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
    "four programs, one per start; two end right after the last push and two one further on, so both answers come up; 2 or 3 pushes each; shuffled, each with its own letter";
    let letters = app_learn_js_name_letters([]);
    let count2 = list_size(starts);
    let names = list_shuffle_take(letters, count2);
    let extras = [0, 0, 1, 1];
    list_shuffle(extras);
    let counts = [2, 3, 2, 3];
    list_shuffle(counts);
    let codes = [];
    for (let k = 0; less_than(k, list_size(starts)); k++) {
      let start = list_get(starts, k);
      let right3 = list_get(counts, k);
      let left2 = multiply(2, right3);
      let span = subtract(left2, 1);
      let left3 = add(start, span);
      let right4 = list_get(extras, k);
      let end = add(left3, right4);
      let item = list_get(names, k);
      let code = program_of(item, start, end, update_two);
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
    "the end, one below it, the first number pushed, the one before the last, and how many were pushed; each once, never the answer";
    let bounds = bounds_of(question);
    let start = bounds.start;
    let end = bounds.end;
    let left4 = Number(answer);
    let before_last = subtract(left4, 2);
    let top = subtract(end, start);
    let p = divide(top, 2);
    let count = ceil(p);
    let json = json_to(end);
    let object = subtract(end, 1);
    let json2 = json_to(object);
    let json3 = json_to(start);
    let json4 = json_to(before_last);
    let json5 = json_to(count);
    let candidates = [json, json2, json3, json4, json5];
    let found = list_without(candidates, answer);
    let once = list_unique(found);
    return once;
  }
  function backwards_decoys(question, answer) {
    "the same loop ending two later, two earlier, or counting by 1; each kept only when it writes out something else";
    let name = name_of(answer);
    let bounds = bounds_of(answer);
    let start = bounds.start;
    let end = bounds.end;
    let sum = add(end, 2);
    let v = program_of(name, start, sum, update_two);
    let difference = subtract(end, 2);
    let v2 = program_of(name, start, difference, update_two);
    let v3 = program_of(name, start, end, update_one);
    let programs = [v, v2, v3];
    let out = eval_console_log_lines(answer);
    function differs(program) {
      let other = eval_console_log_lines(program);
      let same = json_equal(other, out);
      let n = not(same);
      return n;
    }
    let kept = list_filter(programs, differs);
    return kept;
  }
  function above(root, context) {
    "counting by 2 and the last number pushed remembered, then both together, once ending right after the last push and once one further on";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_array_for_step_two,
      ["", "i += 2", " makes ", "i", " jump by ", "2"],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_two,
      context,
      app_learn_js_lesson_array_empty_for_push_last,
      ["", "a[a.length - 1]", " is the last number the loop pushed"],
    );
    let box_three = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_three, ["Now the loop counts by 2:"]);
    let code = program_of("a", 1, 6, update_two);
    let lines2 = text_split_newline(code);
    let value = eval_console_log_lines(code);
    app_learn_js_code_lines_writes_out(box_three, lines2, value);
    app_learn_js_div_cycle_code(box_three, [
      "",
      "i",
      " is ",
      "1",
      ", then ",
      "3",
      ", then ",
      "5",
      ". Then ",
      "i",
      " is ",
      "7",
      ", and ",
      "7 < 6",
      " is ",
      "false",
    ]);
    app_learn_js_div_cycle_output(box_three, ["So ", "5", " is written out"]);
    let box_four = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_four, ["Here the loop stops one sooner:"]);
    let code2 = program_of("a", 1, 5, update_two);
    let lines3 = text_split_newline(code2);
    let value2 = eval_console_log_lines(code2);
    app_learn_js_code_lines_writes_out(box_four, lines3, value2);
    app_learn_js_div_cycle_code(box_four, [
      "",
      "i",
      " is ",
      "1",
      ", then ",
      "3",
      ". Then ",
      "i",
      " is ",
      "5",
      ", and ",
      "5 < 5",
      " is ",
      "false",
      ", so ",
      "5",
      " is never pushed",
    ]);
    app_learn_js_div_cycle_output(box_four, ["So ", "3", " is written out"]);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "The last number pushed, counting by 2",
    "i += 2",
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
