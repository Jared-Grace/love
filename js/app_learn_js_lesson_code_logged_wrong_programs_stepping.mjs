import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { list_map } from "./list_map.mjs";
import { app_learn_js_batch_question_answer_fns } from "./app_learn_js_batch_question_answer_fns.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { assert } from "./assert.mjs";
import { not_equal } from "./not_equal.mjs";
import { list_concat } from "./list_concat.mjs";
import { list_without } from "./list_without.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_unique } from "./list_unique.mjs";
import { app_learn_js_lesson_code_logged } from "./app_learn_js_lesson_code_logged.mjs";
import { html_text_set_code_dark_lines } from "./html_text_set_code_dark_lines.mjs";
import { each } from "./each.mjs";
import { list_first } from "./list_first.mjs";
import { list_second } from "./list_second.mjs";
export function app_learn_js_lesson_code_logged_wrong_programs_stepping(
  params,
  steps,
) {
  arguments_assert(arguments, 2);
  ("steps: whether the program can be stepped through line by line; false for a program the tracer cannot read, such as one holding an object");
  ("a lesson of multi-line programs that write out, whose wrong answers come from wrong programs: the forwards quiz offers what each wrong program writes out, and the backwards quiz offers each wrong program that writes out something other than the answer. Shared by the number lessons of 2026-11-21 (divisors, perfect numbers, primes, Fibonacci, digits, the digit total and Collatz), which differ only in their programs, their wrong programs and their screen above.");
  ("params: name_id and above, as every lesson has; inputs_get, handing back the list of inputs one set of questions is made from; program_of, the right program for one input; wrong_programs_of, the wrong programs for one input; wrong_outputs_of, more wrong answers for the forwards quiz that no single program writes out, often none.");
  ("Each program is remembered with the input it was made from, so the wrong programs are made from the same input rather than read back off the code.");
  let name_id = property_get(params, "name_id");
  let above = property_get(params, "above");
  let inputs_get = property_get(params, "inputs_get");
  let program_of = property_get(params, "program_of");
  let wrong_programs_of = property_get(params, "wrong_programs_of");
  let wrong_outputs_of = property_get(params, "wrong_outputs_of");
  let input_by_code = new Map();
  function batch_get() {
    let inputs = inputs_get();
    function code_of(input) {
      let code = program_of(input);
      input_by_code.set(code, input);
      return code;
    }
    let codes = list_map(inputs, code_of);
    return codes;
  }
  let batch = app_learn_js_batch_question_answer_fns(
    batch_get,
    eval_console_log_lines,
  );
  function input_of(code2) {
    let known = input_by_code.has(code2);
    assert(known);
    let input2 = input_by_code.get(code2);
    return input2;
  }
  function not_empty(text) {
    let ne = not_equal(text, "");
    return ne;
  }
  function decoys(question, answer) {
    "what each wrong program writes out, then the other wrong answers; each once, never the answer, never nothing";
    let input3 = input_of(question);
    let programs = wrong_programs_of(input3);
    let outputs = list_map(programs, eval_console_log_lines);
    let extra = wrong_outputs_of(input3);
    let candidates = list_concat(outputs, extra);
    let found = list_without(candidates, answer);
    let written = list_filter(found, not_empty);
    let once = list_unique(written);
    return once;
  }
  function backwards_decoys(question, answer) {
    "each wrong program that writes out something other than the answer";
    let input4 = input_of(answer);
    let programs2 = wrong_programs_of(input4);
    let out_answer = eval_console_log_lines(answer);
    function differs(code3) {
      let out = eval_console_log_lines(code3);
      let ne2 = not_equal(out, out_answer);
      return ne2;
    }
    let kept = list_filter(programs2, differs);
    let once2 = list_unique(kept);
    return once2;
  }
  let lesson = app_learn_js_lesson_code_logged({
    above,
    name_id,
    batch_get: batch,
    example_count: 2,
    on_question: html_text_set_code_dark_lines,
    unscramble: false,
    lines: true,
    steps,
    decoys,
    backwards_decoys,
    quiz_backwards_answer_count_override: null,
    forwards_answer_count_override: null,
  });
  ("2026-11-28, at the human's asking: a review rebuilds a question with a fresh copy of this lesson, which never made that program and so does not remember its input. So the review is handed the inputs of the programs it saves, and hands them back when it rebuilds - review 355 threw on a fizz buzz question before this");
  function inputs_saved(codes) {
    "for each of codes this lesson made, the code and the input it was made from";
    function known_is(code6) {
      let r = input_by_code.has(code6);
      return r;
    }
    let known = list_filter(codes, known_is);
    function pair_of(code7) {
      let v = input_by_code.get(code7);
      let r2 = [code7, v];
      return r2;
    }
    let pairs = list_map(known, pair_of);
    return pairs;
  }
  function inputs_restore(pairs) {
    "remember again each code and the input it was made from, as inputs_saved handed them out";
    function restore(pair) {
      let first = list_first(pair);
      let second = list_second(pair);
      input_by_code.set(first, second);
    }
    each(pairs, restore);
  }
  lesson.inputs_saved = inputs_saved;
  lesson.inputs_restore = inputs_restore;
  return lesson;
}
