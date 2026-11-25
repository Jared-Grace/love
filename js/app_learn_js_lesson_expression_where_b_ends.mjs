import { arguments_assert } from "./arguments_assert.mjs";
import { not } from "./not.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { list_get } from "./list_get.mjs";
import { list_map } from "./list_map.mjs";
import { app_learn_js_batch_question_answer_fns } from "./app_learn_js_batch_question_answer_fns.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { text_integers } from "./text_integers.mjs";
import { subtract } from "./subtract.mjs";
import { less_than_equal } from "./less_than_equal.mjs";
import { list_filter } from "./list_filter.mjs";
import { json_to } from "./json_to.mjs";
import { list_without } from "./list_without.mjs";
import { list_unique } from "./list_unique.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_expression_parentheses_arithmetic } from "./app_learn_js_lesson_expression_parentheses_arithmetic.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged } from "./app_learn_js_lesson_code_logged.mjs";
import { html_text_set_code_dark_lines } from "./html_text_set_code_dark_lines.mjs";
export function app_learn_js_lesson_expression_where_b_ends() {
  arguments_assert(arguments, 0);
  ("where b ends: let a = 1; let b = 9; console.log(b - (4 - a)); writes out 6");
  ("2026-11-25, at the human's asking, after a learner asked for a shortcut on the two pointer lessons: the shortcut as code a learner can run, just before Two names in a while, which then says its loop writes out the same.");
  ("The numbers are the ones Two names in a while draws, but only those whose loop runs at least once, since the formula is the loop's answer only then.");
  ("Reading forwards, the wrong answers are the same without the brackets, b - 4 - a; b take away the 4 alone; and b + 4 - a; each once, never the answer and never below zero.");
  ("Reading backwards, the wrong program is the same without its brackets.");
  ("The writing is a first draft by Claude 2026-11-25.");
  function program_lines(a, b, bound, bracketed) {
    let formula = `b - (${bound} - a)`;
    if (not(bracketed)) {
      formula = `b - ${bound} - a`;
    }
    let lines = [`let a = ${a};`, `let b = ${b};`, `console.log(${formula});`];
    return lines;
  }
  function program_get(a, b, bound, bracketed) {
    let lines2 = program_lines(a, b, bound, bracketed);
    let joined = list_join_newline(lines2);
    return joined;
  }
  function batch_get() {
    "four of the programs Two names in a while draws whose loop runs, each writing out a different number";
    let triples = [
      [2, 7, 3],
      [4, 8, 5],
      [1, 7, 3],
      [3, 6, 5],
      [1, 6, 4],
      [2, 5, 5],
      [1, 9, 4],
    ];
    let taken = list_shuffle_take(triples, 4);
    function program_of(triple) {
      let item = list_get(triple, 0);
      let item2 = list_get(triple, 1);
      let item3 = list_get(triple, 2);
      let code = program_get(item, item2, item3, true);
      return code;
    }
    let codes = list_map(taken, program_of);
    return codes;
  }
  let batch = app_learn_js_batch_question_answer_fns(
    batch_get,
    eval_console_log_lines,
  );
  function decoys(question, answer) {
    "without the brackets, b take away the bound alone, and b + bound - a; each once, never the answer and never below zero";
    let numbers = text_integers(question);
    let a2 = list_get(numbers, 0);
    let b2 = list_get(numbers, 1);
    let bound2 = list_get(numbers, 2);
    let left = subtract(b2, bound2);
    let difference = subtract(left, a2);
    let difference2 = subtract(b2, bound2);
    let difference3 = subtract(b2 + bound2, a2);
    let candidates = [difference, difference2, difference3];
    function possible(n) {
      let p = less_than_equal(0, n);
      return p;
    }
    let kept = list_filter(candidates, possible);
    let texts = list_map(kept, json_to);
    let found = list_without(texts, answer);
    let once = list_unique(found);
    return once;
  }
  function backwards_decoys(question, answer) {
    "the same program without its brackets";
    let numbers2 = text_integers(answer);
    let item4 = list_get(numbers2, 0);
    let item5 = list_get(numbers2, 1);
    let item6 = list_get(numbers2, 2);
    let code2 = program_get(item4, item5, item6, false);
    let found2 = [code2];
    return found2;
  }
  function above(root, context) {
    "brackets remembered, then the formula with names";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_expression_parentheses_arithmetic,
      ["what is inside ", "( )", " is worked out first"],
    );
    let box_two = app_learn_js_container_light_blue(root);
    ("Later the same day, at the human's asking, since the lesson never said what the number is for: it says first what it is for, then works the numbers out before the code.");
    app_learn_js_div_cycle_code(box_two, [
      "Say ",
      "a",
      " goes up 1 at a time until it is ",
      "4",
      ", and each time ",
      "b",
      " goes down 1. This works out where ",
      "b",
      " ends",
    ]);
    app_learn_js_div_cycle_code(box_two, [
      "",
      "4 - a",
      " is how many times ",
      "a",
      " goes up, so ",
      "b",
      " goes down that many times",
    ]);
    app_learn_js_div_cycle_code(box_two, [
      "For ",
      "a",
      " at ",
      "1",
      " and ",
      "b",
      " at ",
      "9",
      ", ",
      "4 - 1",
      " is ",
      "3",
      " and ",
      "9 - 3",
      " is ",
      "6",
      ":",
    ]);
    let lines3 = program_lines(1, 9, 4, true);
    app_learn_js_code_lines_writes_out(box_two, lines3, "6");
    app_learn_js_div_cycle_code(box_two, [
      "The next lesson does this with a loop",
    ]);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Where b ends",
    "b - (4 - a)",
  );
  let lesson = app_learn_js_lesson_code_logged({
    above,
    name_id,
    batch_get: batch,
    example_count: 1,
    on_question: html_text_set_code_dark_lines,
    unscramble: false,
    decoys,
    backwards_decoys,
    quiz_backwards_answer_count_override: null,
    forwards_answer_count_override: null,
  });
  return lesson;
}
