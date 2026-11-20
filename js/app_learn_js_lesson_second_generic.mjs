import { not } from "./not.mjs";
import { property_get } from "./property_get.mjs";
import { list_first } from "./list_first.mjs";
import { list_skip } from "./list_skip.mjs";
import { list_map } from "./list_map.mjs";
import { list_shuffle } from "./list_shuffle.mjs";
import { app_learn_js_batch_question_answer_fns } from "./app_learn_js_batch_question_answer_fns.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { list_concat } from "./list_concat.mjs";
import { list_without } from "./list_without.mjs";
import { list_unique } from "./list_unique.mjs";
import { list_take } from "./list_take.mjs";
import { not_equal } from "./not_equal.mjs";
import { list_filter } from "./list_filter.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_lesson_code_logged } from "./app_learn_js_lesson_code_logged.mjs";
import { html_text_set_code_dark_lines } from "./html_text_set_code_dark_lines.mjs";
export function app_learn_js_lesson_second_generic(options) {
  "a lesson whose questions are one program written several ways: the first way is right, the others are the wrong programs. Each question's input (an array, or a few numbers) is remembered by the code it made, so the wrong programs and the wrong answers are worked out from the same input";
  "2026-11-20, for the four second-biggest lessons, at the human's asking: they differ only in the program and its inputs, so they share this. A wrong program is offered only when it writes out something other than the right one; a wrong answer is what a wrong program writes out, then the lesson's own extra answers, each once, at most three, never the right one.";
  let name_id = property_get(options, "name_id");
  let above_boxes = property_get(options, "above");
  let inputs_get = property_get(options, "inputs_get");
  let program_of = property_get(options, "program_of");
  let ways = property_get(options, "ways");
  let extra_answers = property_get(options, "extra_answers");
  let inputs_by_code = new Map();
  let way_right = list_first(ways);
  let ways_wrong = list_skip(ways, 1);
  function right_of(input) {
    let code = program_of(input, way_right);
    inputs_by_code.set(code, input);
    return code;
  }
  function batch_get() {
    let inputs = inputs_get();
    let codes = list_map(inputs, right_of);
    list_shuffle(codes);
    return codes;
  }
  let batch = app_learn_js_batch_question_answer_fns(
    batch_get,
    eval_console_log_lines,
  );
  function input_of(code2) {
    let b = inputs_by_code.has(code2);
    if (not(b)) {
      throw new Error("no input remembered for this program: " + code2);
    }
    let input2 = inputs_by_code.get(code2);
    return input2;
  }
  function wrongs_of(input3) {
    function wrong(way) {
      let code3 = program_of(input3, way);
      return code3;
    }
    let programs = list_map(ways_wrong, wrong);
    return programs;
  }
  function decoys(question, answer) {
    let input4 = input_of(question);
    let programs2 = wrongs_of(input4);
    let outs = list_map(programs2, eval_console_log_lines);
    let extras = extra_answers(input4);
    let candidates = list_concat(outs, extras);
    let found = list_without(candidates, answer);
    let once = list_unique(found);
    let taken = list_take(once, 3);
    return taken;
  }
  function backwards_decoys(question, answer) {
    let input5 = input_of(answer);
    let programs3 = wrongs_of(input5);
    let out_answer = eval_console_log_lines(answer);
    function differs(code4) {
      let out = eval_console_log_lines(code4);
      let ne = not_equal(out, out_answer);
      return ne;
    }
    let kept = list_filter(programs3, differs);
    return kept;
  }
  function example(box, input6) {
    "the right program over input6, with what it writes out";
    let code5 = right_of(input6);
    let lines = text_split_newline(code5);
    let value = eval_console_log_lines(code5);
    app_learn_js_code_lines_writes_out(box, lines, value);
  }
  function above(root, context) {
    above_boxes(root, context, example);
  }
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
