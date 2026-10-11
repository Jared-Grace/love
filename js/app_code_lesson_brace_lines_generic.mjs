import { list_get } from "./list_get.mjs";
import { list_size } from "./list_size.mjs";
import { list_shuffle } from "./list_shuffle.mjs";
import { modulo } from "./modulo.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { js_code_brace_left } from "./js_code_brace_left.mjs";
import { app_code_brace_unmarked } from "./app_code_brace_unmarked.mjs";
import { property_get } from "./property_get.mjs";
import { js_code_brace_partner_index } from "./js_code_brace_partner_index.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { add } from "./add.mjs";
import { text_size } from "./text_size.mjs";
import { less_than } from "./less_than.mjs";
import { list_add } from "./list_add.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { equal } from "./equal.mjs";
import { app_code_brace_marked } from "./app_code_brace_marked.mjs";
import { app_code_batch_question_answer_fns } from "./app_code_batch_question_answer_fns.mjs";
import { app_shared_success_message } from "./app_shared_success_message.mjs";
import { app_code_brace_lines_choose } from "./app_code_brace_lines_choose.mjs";
import { app_code_lesson_quiz_question_none } from "./app_code_lesson_quiz_question_none.mjs";
import { app_code_brace_marked_div } from "./app_code_brace_marked_div.mjs";
import { app_code_lesson_quizzes_generic } from "./app_code_lesson_quizzes_generic.mjs";
import { app_code_lesson_base } from "./app_code_lesson_base.mjs";
export function app_code_lesson_brace_lines_generic(name_id, above, codes_get) {
  arguments_assert(arguments, 3);
  ("a lesson on which lines stand between a pair of braces, over four of the programs codes_get hands back: one pair is drawn in a colour and the learner taps every line between its two braces, in the worked examples and in the quiz alike; asked for by the human 2026-10-11");
  ("The pair pointed at takes each { of the programs in turn rather than one at random, so a screen of an if inside an if asks for the pair around, holding the inner pair's lines too, as often as the pair inside, holding one line; a random choice could leave the pair around out of a screen, and it is the one that teaches. Changed 2026-10-11, when the human asked for the nested programs to be sure of being asked.");
  ("There is one quiz, the same choosing as the examples, because the question - a program with a pair coloured - and the answer - its lines - are already the lesson's whole fact, and no program here is run.");
  let left = js_code_brace_left();
  function between_lines(question) {
    "the lines standing between the pointed-at { and the } that closes it, one under another";
    let unmarked = app_code_brace_unmarked(question);
    let code = property_get(unmarked, "code");
    let open = property_get(unmarked, "index");
    let close = js_code_brace_partner_index(code, open);
    let lines = text_split_newline(code);
    let found = [];
    let start = 0;
    for (let line of lines) {
      let right = text_size(line);
      let end = add(start, right);
      if (less_than(open, start) && less_than(end, close)) {
        list_add(found, line);
      }
      start = add(end, 1);
    }
    let joined = list_join_newline(found);
    return joined;
  }
  function batch_get() {
    "four of the programs, the first pointing at its first {, the next at its second, and so on round, then put in a random order";
    let list = codes_get();
    let codes = list_shuffle_take(list, 4);
    let questions = [];
    for (let n = 0; less_than(n, codes.length); n++) {
      let code = list_get(codes, n);
      let indexes = [];
      for (let i = 0; less_than(i, code.length); i++) {
        if (equal(code[i], left)) {
          list_add(indexes, i);
        }
      }
      let right2 = list_size(indexes);
      let index2 = modulo(n, right2);
      let index = list_get(indexes, index2);
      let question = app_code_brace_marked(code, index);
      list_add(questions, question);
    }
    list_shuffle(questions);
    return questions;
  }
  let batch = app_code_batch_question_answer_fns(batch_get, between_lines);
  function example_choose(component, text, container) {
    "a worked example chosen on the page, with nothing to tell the lesson when a line is tapped wrong";
    function wrong() {}
    function success() {
      app_shared_success_message(component);
    }
    app_code_brace_lines_choose(component, text, wrong, success);
  }
  function lines_quiz(
    parent,
    info,
    qa,
    on_success,
    on_wrong,
    batch_get2,
    correction_code_set,
  ) {
    "the quiz: the same choosing as the worked examples";
    let question = property_get(qa, "question");
    let answer = property_get(qa, "answer");
    correction_code_set(answer);
    app_code_brace_lines_choose(parent, question, on_wrong, on_success);
  }
  let forwards = {
    question_label: "",
    on_question: app_code_lesson_quiz_question_none,
    answer_label: "",
    answer_on_button: app_code_brace_marked_div,
    answer_count_override: null,
  };
  let quizzes_get = app_code_lesson_quizzes_generic({
    lines: false,
    forwards,
    backwards: forwards,
    backwards_code: false,
    backwards_include: false,
    forwards_include: false,
    batch_get: batch,
    forwards_code: false,
    builds_more: [
      {
        question_label: "",
        on_question: app_code_lesson_quiz_question_none,
        answer_label: "",
        on_answer: lines_quiz,
      },
    ],
  });
  let lesson = app_code_lesson_base(
    name_id,
    above,
    1,
    batch,
    example_choose,
    null,
    quizzes_get,
    "Code:",
    app_code_brace_marked_div,
  );
  return lesson;
}
