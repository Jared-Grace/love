import { arguments_assert } from "./arguments_assert.mjs";
import { json_to } from "./json_to.mjs";
import { list_map } from "./list_map.mjs";
import { js_code_array } from "./js_code_array.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { js_code_console_log_statement } from "./js_code_console_log_statement.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { list_concat } from "./list_concat.mjs";
import { list_size } from "./list_size.mjs";
import { app_learn_js_batch_question_answer_fns } from "./app_learn_js_batch_question_answer_fns.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { list_without } from "./list_without.mjs";
import { not_equal } from "./not_equal.mjs";
import { list_filter } from "./list_filter.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_array_for_found } from "./app_learn_js_lesson_array_for_found.mjs";
import { app_learn_js_lesson_array_push } from "./app_learn_js_lesson_array_push.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged } from "./app_learn_js_lesson_code_logged.mjs";
import { html_text_set_code_dark_lines } from "./html_text_set_code_dark_lines.mjs";
export function app_learn_js_lesson_array_includes() {
  arguments_assert(arguments, 0);
  ('whether an array holds an item, in one line: let a = ["love", "joy", "peace"]; console.log(a.includes("joy")); writes out true');
  ("2026-11-14, at the human's asking: the loop that sets found to true when joy is seen, done by one call, right after that loop - so the student has written the long way before meeting the short one. The call is compared with a.push, the action of an array the student already uses");
  ("Every set holds two arrays with joy and two without, so the answers are never all one kind. Each array is three items: joy, when there, at any place, since .includes looks at every item. The writing is a first draft by Claude 2026-11-14");
  let name = "a";
  let item = "joy";
  let pool = ["love", "peace", "patience", "kindness", "goodness"];
  function call_code() {
    let json = json_to(item);
    let call = name + ".includes(" + json + ")";
    return call;
  }
  function program(items) {
    let codes = list_map(items, json_to);
    let array = js_code_array(codes);
    let head = js_code_let_statement(name, array);
    let call2 = call_code();
    let line = js_code_console_log_statement(call2);
    let code = list_join_newline([head, line]);
    return code;
  }
  function items_with() {
    let two = list_shuffle_take(pool, 2);
    let three = list_concat(two, [item]);
    let shuffled = list_shuffle_take(three, 3);
    return shuffled;
  }
  function items_without() {
    let three2 = list_shuffle_take(pool, 3);
    return three2;
  }
  function batch_get() {
    "four programs, two arrays with joy and two without, in a shuffled order";
    let v = items_with();
    let v2 = items_with();
    let v3 = items_without();
    let v4 = items_without();
    let arrays = [v, v2, v3, v4];
    let count = list_size(arrays);
    let shuffled2 = list_shuffle_take(arrays, count);
    let programs = list_map(shuffled2, program);
    return programs;
  }
  let batch = app_learn_js_batch_question_answer_fns(
    batch_get,
    eval_console_log_lines,
  );
  function decoys(question, answer) {
    "the other answer of true and false, and the item asked about";
    let candidates = ["true", "false", item];
    let found = list_without(candidates, answer);
    return found;
  }
  function backwards_decoys(question, answer) {
    "programs that write out the other answer";
    let out_answer = eval_console_log_lines(answer);
    let v5 = items_with();
    let v6 = items_with();
    let v7 = items_without();
    let v8 = items_without();
    let arrays2 = [v5, v6, v7, v8];
    let programs2 = list_map(arrays2, program);
    function differs(code2) {
      let out = eval_console_log_lines(code2);
      let ne = not_equal(out, out_answer);
      return ne;
    }
    let kept = list_filter(programs2, differs);
    return kept;
  }
  function example(root, items2) {
    "an example program and what it writes out";
    let code3 = program(items2);
    let lines = text_split_newline(code3);
    let out2 = eval_console_log_lines(code3);
    app_learn_js_code_lines_writes_out(root, lines, out2);
  }
  function above(root, context) {
    "the loop that finds joy remembered, a.push remembered, then .includes with joy and without it";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_array_for_found,
      [
        "a loop over ",
        "a",
        " with an ",
        "if",
        " sets ",
        "found",
        " to ",
        "true",
        " when an item is ",
        '"joy"',
      ],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_two,
      context,
      app_learn_js_lesson_array_push,
      [
        "in ",
        'a.push("joy")',
        ", the dot reaches the action ",
        "push",
        " of ",
        "a",
      ],
    );
    app_learn_js_div_cycle_code(box_two, [
      "An array has another action, ",
      "includes",
      ". ",
      'a.includes("joy")',
      " gives ",
      "true",
      " if ",
      "a",
      " has ",
      '"joy"',
      ", or ",
      "false",
      " if not. It does the whole loop in one line.",
    ]);
    let box_three = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_three, ["", "a", " has ", '"joy"', ":"]);
    example(box_three, ["love", "joy", "peace"]);
    app_learn_js_div_cycle_code(box_three, ["", "a", " has no ", '"joy"', ":"]);
    example(box_three, ["love", "peace", "patience"]);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Does it include joy?",
    'a.includes("joy")',
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
