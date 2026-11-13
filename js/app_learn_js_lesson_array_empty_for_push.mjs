import { arguments_assert } from "./arguments_assert.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { json_to } from "./json_to.mjs";
import { add } from "./add.mjs";
import { js_code_binary_spaced_nb } from "./js_code_binary_spaced_nb.mjs";
import { js_code_called } from "./js_code_called.mjs";
import { js_code_statement } from "./js_code_statement.mjs";
import { js_code_for_start_condition_update_lines } from "./js_code_for_start_condition_update_lines.mjs";
import { js_code_index } from "./js_code_index.mjs";
import { js_code_console_log_statement } from "./js_code_console_log_statement.mjs";
import { list_concat } from "./list_concat.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { app_learn_js_name_letters } from "./app_learn_js_name_letters.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { list_size } from "./list_size.mjs";
import { less_than } from "./less_than.mjs";
import { list_get } from "./list_get.mjs";
import { list_shuffle } from "./list_shuffle.mjs";
import { app_learn_js_batch_question_answer_fns } from "./app_learn_js_batch_question_answer_fns.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { list_first } from "./list_first.mjs";
import { text_between } from "./text_between.mjs";
import { subtract } from "./subtract.mjs";
import { list_without } from "./list_without.mjs";
import { list_unique } from "./list_unique.mjs";
import { equal } from "./equal.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_array_empty_push } from "./app_learn_js_lesson_array_empty_push.mjs";
import { app_learn_js_lesson_array_for } from "./app_learn_js_lesson_array_for.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_div_cycle_output } from "./app_learn_js_div_cycle_output.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged } from "./app_learn_js_lesson_code_logged.mjs";
import { html_text_set_code_dark_lines } from "./html_text_set_code_dark_lines.mjs";
export function app_learn_js_lesson_array_empty_for_push() {
  arguments_assert(arguments, 0);
  ("a for loop pushing into an empty array: let a = []; for (let i = 1; i < 4; i++) { a.push(i); } console.log(a[0]); writes out 1");
  ("2026-11-13, at the human's asking, the step after pushing into an empty array: a loop does the pushing, the start varying. The one new thing is that the loop pushes i itself, so the array is filled with the numbers i takes, the first one at index 0.");
  ("a[0] is what is written out, so the answer is where the loop starts and changes with it. Rejected for this lesson: a.length, which only repeats how many times a loop runs, already taught; and a[a.length - 1], the last number pushed, which needs the loop's last run worked out - a harder lesson for after this one. Writing out the whole array is still untaught.");
  ("Every loop pushes three numbers, starting at 0, 1, 2 or 3; a set is four questions, one per start, shuffled, each naming its array with its own letter. The examples keep a.");
  ("Reading forwards, the wrong answers are 0, reading a[0] as the index; the second and the last number pushed; and 3, how many were pushed. Reading backwards, the wrong programs are the same loop starting one later and one earlier (two later when it starts at 0).");
  ("The writing is a first draft by Claude 2026-11-13.");
  let starts = [0, 1, 2, 3];
  let count = 3;
  let index_name = "i";
  function program_of(name, start) {
    let head = js_code_let_statement(name, "[]");
    let right = json_to(start);
    let started = js_code_let_statement(index_name, right);
    let object = add(start, count);
    let end = json_to(object);
    let condition = js_code_binary_spaced_nb(index_name, "<", end);
    let call = js_code_called(name + ".push", index_name);
    let push_line = js_code_statement(call);
    let loop = js_code_for_start_condition_update_lines(started, condition, [
      push_line,
      index_name + "++;",
    ]);
    let read = js_code_index(name, "0");
    let log_line = js_code_console_log_statement(read);
    let a = list_concat([head], loop);
    let lines = list_concat(a, [log_line]);
    let code = list_join_newline(lines);
    return code;
  }
  function batch_get() {
    "four programs, one per start, shuffled, each with its own letter";
    let letters = app_learn_js_name_letters([]);
    let count2 = list_size(starts);
    let names = list_shuffle_take(letters, count2);
    let codes = [];
    for (let k = 0; less_than(k, list_size(starts)); k++) {
      let item = list_get(names, k);
      let item2 = list_get(starts, k);
      let code = program_of(item, item2);
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
  function start_of(code) {
    "where the loop starts, read off its for line: let i = <start>;";
    let lines = text_split_newline(code);
    let for_line = list_get(lines, 1);
    let start_text = text_between(for_line, "let i = ", ";");
    let start = Number(start_text);
    return start;
  }
  function decoys(question, answer) {
    "0, the second and last numbers pushed, and how many were pushed; each once, never the answer";
    let start = start_of(question);
    let object2 = add(start, 1);
    let second = json_to(object2);
    let right2 = subtract(count, 1);
    let object3 = add(start, right2);
    let last = json_to(object3);
    let json = json_to(count);
    let candidates = ["0", second, last, json];
    let found = list_without(candidates, answer);
    let once = list_unique(found);
    return once;
  }
  function backwards_decoys(question, answer) {
    "the same loop starting one later, and one earlier - two later when it starts at 0";
    let name = name_of(answer);
    let start = start_of(answer);
    let later = add(start, 1);
    let other = subtract(start, 1);
    if (equal(start, 0)) {
      other = add(start, 2);
    }
    let v = program_of(name, later);
    let v2 = program_of(name, other);
    let programs = [v, v2];
    return programs;
  }
  let example_start = 1;
  function above(root, context) {
    "pushing into an empty array and the for loop remembered, then a loop that pushes";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_array_empty_push,
      [
        "an array can start with no items, ",
        "[]",
        ", and be filled with ",
        "a.push()",
      ],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_two,
      context,
      app_learn_js_lesson_array_for,
      ["a ", "for", " loop runs its lines once for each value of ", "i"],
    );
    let box_three = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_three, [
      "A loop can do the pushing. Here it pushes ",
      "i",
      " itself:",
    ]);
    let code = program_of("a", example_start);
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
      ", so ",
      "a.push(i);",
      " pushes ",
      "1",
      ", then ",
      "2",
      ", then ",
      "3",
    ]);
    app_learn_js_div_cycle_code(box_three, [
      "The first number pushed, ",
      "1",
      ", is at index ",
      "0",
      ", so ",
      "a[0]",
      " is ",
      "1",
    ]);
    app_learn_js_div_cycle_output(box_three, ["So ", "1", " is written out"]);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "A loop that pushes",
    "a.push(i);",
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
