import { ceil } from "./ceil.mjs";
import { floor } from "./floor.mjs";
import { divide } from "./divide.mjs";
import { subtract } from "./subtract.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { list_map } from "./list_map.mjs";
import { json_to } from "./json_to.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { list_get } from "./list_get.mjs";
import { app_learn_js_batch_question_answer_fns } from "./app_learn_js_batch_question_answer_fns.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { text_integers } from "./text_integers.mjs";
import { list_without } from "./list_without.mjs";
import { list_unique } from "./list_unique.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_expression_round_up } from "./app_learn_js_lesson_expression_round_up.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged } from "./app_learn_js_lesson_code_logged.mjs";
import { html_text_set_code_dark_lines } from "./html_text_set_code_dark_lines.mjs";
export function app_learn_js_lesson_expression_where_meet() {
  arguments_assert(arguments, 0);
  ("where they meet: let a = 3; let b = 4; console.log(Math.ceil((a + b) / 2)); console.log(Math.floor((a + b) / 2)); writes out 4 and 3");
  ("2026-11-25, at the human's asking, after a learner asked for a shortcut on the two pointer lessons: the shortcut as code a learner can run, just before Two numbers meeting, which then says its loop writes out the same. The human's rule was the midpoint, landing on it when whole and passing it when it ends in .5; rounding up and rounding down say both at once, with no if.");
  ("The numbers are the ones Two numbers meeting draws, but only those whose loop runs at least once, since the formula is the loop's answer only then.");
  ("Reading forwards, the wrong answers are the two lines the other way round, both rounded up, both rounded down, where a and b start, and one further apart each way; each once and never the answer.");
  ("Reading backwards, the wrong program has Math.ceil and Math.floor the other way round, or, where that writes out the same, b one bigger.");
  ("The writing is a first draft by Claude 2026-11-25.");
  function program_lines(a, b, first, second) {
    let lines = [
      `let a = ${a};`,
      `let b = ${b};`,
      `console.log(${first}((a + b) / 2));`,
      `console.log(${second}((a + b) / 2));`,
    ];
    return lines;
  }
  function program_get(a, b, first, second) {
    let lines2 = program_lines(a, b, first, second);
    let joined = list_join_newline(lines2);
    return joined;
  }
  function written(pair) {
    let texts = list_map(pair, json_to);
    let text = list_join_newline(texts);
    return text;
  }
  function batch_get() {
    "four of the programs Two numbers meeting draws whose loop runs, each writing out something different";
    let pairs = [
      [5, 7],
      [3, 4],
      [1, 5],
      [4, 7],
      [1, 7],
      [2, 7],
    ];
    let taken = list_shuffle_take(pairs, 4);
    function program_of(pair) {
      let item = list_get(pair, 0);
      let item2 = list_get(pair, 1);
      let code = program_get(item, item2, "Math.ceil", "Math.floor");
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
    "the other way round, both up, both down, where they start, and one further apart each way; each once and never the answer";
    let numbers = text_integers(question);
    let a2 = list_get(numbers, 0);
    let b2 = list_get(numbers, 1);
    let p = divide(a2 + b2, 2);
    let up = ceil(p);
    let p2 = divide(a2 + b2, 2);
    let down = floor(p2);
    let difference = subtract(down, 1);
    let candidates = [
      [down, up],
      [up, up],
      [down, down],
      [a2, b2],
      [up + 1, difference],
    ];
    let texts = list_map(candidates, written);
    let found = list_without(texts, answer);
    let once = list_unique(found);
    return once;
  }
  function backwards_decoys(question, answer) {
    "Math.ceil and Math.floor the other way round, or, where that writes out the same, b one bigger";
    let numbers2 = text_integers(answer);
    let a3 = list_get(numbers2, 0);
    let b3 = list_get(numbers2, 1);
    let code2 = program_get(a3, b3, "Math.floor", "Math.ceil");
    let divided = divide(a3 + b3, 2);
    if (Number.isInteger(divided)) {
      code2 = program_get(a3, b3 + 1, "Math.ceil", "Math.floor");
    }
    let found2 = [code2];
    return found2;
  }
  function above(root, context) {
    "rounding up remembered, then the midpoint rounded both ways";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_expression_round_up,
      [
        "",
        "Math.ceil",
        " rounds up and ",
        "Math.floor",
        " rounds down, and a whole number stays as it is",
      ],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_two, [
      "",
      "(a + b) / 2",
      " is halfway between ",
      "a",
      " and ",
      "b",
      ". Here it is a whole number, so rounding up or down changes nothing:",
    ]);
    let lines3 = program_lines(1, 7, "Math.ceil", "Math.floor");
    let value = written([4, 4]);
    app_learn_js_code_lines_writes_out(box_two, lines3, value);
    app_learn_js_div_cycle_code(box_two, ["", "(1 + 7) / 2", " is ", "4", ""]);
    let box_three = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_three, [
      "Here it ends in .5, so rounding up and rounding down give two numbers:",
    ]);
    let lines4 = program_lines(3, 4, "Math.ceil", "Math.floor");
    let value2 = written([4, 3]);
    app_learn_js_code_lines_writes_out(box_three, lines4, value2);
    app_learn_js_div_cycle_code(box_three, [
      "",
      "(3 + 4) / 2",
      " is ",
      "3.5",
      ", which rounds up to ",
      "4",
      " and down to ",
      "3",
      "",
    ]);
    app_learn_js_div_cycle_code(box_three, [
      "The next lesson uses this to find where two numbers meet, without stepping through a loop",
    ]);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Where they meet",
    "Math.ceil((a + b) / 2)",
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
