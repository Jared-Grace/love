import { arguments_assert } from "./arguments_assert.mjs";
import { less_than } from "./less_than.mjs";
import { equal } from "./equal.mjs";
import { list_add } from "./list_add.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { js_code_brace_left } from "./js_code_brace_left.mjs";
import { js_code_brace_right } from "./js_code_brace_right.mjs";
import { list_get } from "./list_get.mjs";
import { modulo } from "./modulo.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { app_code_brace_marked } from "./app_code_brace_marked.mjs";
import { app_code_brace_unmarked } from "./app_code_brace_unmarked.mjs";
import { property_get } from "./property_get.mjs";
import { js_code_brace_partner_index } from "./js_code_brace_partner_index.mjs";
import { app_code_batch_question_answer_fns } from "./app_code_batch_question_answer_fns.mjs";
import { integer_is_assert } from "./integer_is_assert.mjs";
import { list_map } from "./list_map.mjs";
import { list_without } from "./list_without.mjs";
import { list_unique } from "./list_unique.mjs";
import { app_code_code_dark_lines_brace_marked } from "./app_code_code_dark_lines_brace_marked.mjs";
import { app_code_brace_pair_wrong_say } from "./app_code_brace_pair_wrong_say.mjs";
import { app_code_lesson_quizzes_unscramble } from "./app_code_lesson_quizzes_unscramble.mjs";
import { app_code_lesson_base } from "./app_code_lesson_base.mjs";
import { app_code_brace_pair_example_choose } from "./app_code_brace_pair_example_choose.mjs";
import { app_code_brace_marked_div } from "./app_code_brace_marked_div.mjs";
export function app_code_lesson_brace_pair_generic(
  name_id,
  above,
  codes_get,
  pairs,
) {
  arguments_assert(arguments, 4);
  ("a lesson on which brace pairs with which, over four of the programs codes_get hands back, every one with pairs pairs of braces: one brace is pointed at and the learner finds its pair, in the worked examples by tapping it and in the quizzes out of every brace of that kind");
  ("Every question offers as many buttons as there are pairs - every brace of the kind asked for - and the quiz is told to show that many, because a quiz told to show more fills the rest from other questions, which offered a different program and even the question itself.");
  ("Each screen has four of the programs. Two questions point at a { and two at a }, so both ways are asked on every screen.");
  ("The wrong answers are every other brace of the kind asked for, each once. In a nested program the nearest one is among them, which is the mistake the learner made.");
  ("There is no backwards quiz, because the question and the answer are the same kind of thing - a program with one brace pointed at - and reading it backwards is the other way of asking, which the screen already asks. There are no quizzes about lines or building the code, because no program here is run.");
  ("Its worked examples are chosen on the page since 2026-10-11, as the human asked: one brace is pointed at and the learner taps its pair, so no pair is printed under them.");
  function braces_of(code, brace) {
    "where every brace of one kind stands in code";
    let indexes = [];
    for (let i = 0; less_than(i, code.length); i++) {
      if (equal(code[i], brace)) {
        list_add(indexes, i);
      }
    }
    return indexes;
  }
  function batch_get() {
    "four of the programs, two pointing at a { and two at a }";
    let list = codes_get();
    let codes = list_shuffle_take(list, 4);
    let left = js_code_brace_left();
    let right = js_code_brace_right();
    let questions = [];
    for (let i = 0; less_than(i, codes.length); i++) {
      let code = list_get(codes, i);
      let brace = left;
      let left3 = modulo(i, 2);
      if (equal(left3, 1)) {
        brace = right;
      }
      let indexes2 = braces_of(code, brace);
      let index = list_random_item(indexes2);
      let question = app_code_brace_marked(code, index);
      list_add(questions, question);
    }
    return questions;
  }
  function partner_marked(question) {
    "the same program with the partner of the pointed-at brace pointed at instead";
    let unmarked = app_code_brace_unmarked(question);
    let code3 = property_get(unmarked, "code");
    let index3 = property_get(unmarked, "index");
    let partner = js_code_brace_partner_index(code3, index3);
    let answer = app_code_brace_marked(code3, partner);
    return answer;
  }
  let batch = app_code_batch_question_answer_fns(batch_get, partner_marked);
  function decoys(question, answer) {
    "every other brace of the kind asked for, each once and never the answer";
    let unmarked2 = app_code_brace_unmarked(question);
    let code4 = property_get(unmarked2, "code");
    let index4 = property_get(unmarked2, "index");
    let partner2 = js_code_brace_partner_index(code4, index4);
    integer_is_assert(partner2);
    let kind = code4[partner2];
    let indexes3 = braces_of(code4, kind);
    function marked_at(i) {
      let m = app_code_brace_marked(code4, i);
      return m;
    }
    let texts = list_map(indexes3, marked_at);
    let found = list_without(texts, answer);
    let once = list_unique(found);
    return once;
  }
  let painter = app_code_code_dark_lines_brace_marked;
  let question_label = "Code:";
  let answer_label = "Which brace pairs with the one pointed at?";
  let forwards = {
    question_label,
    on_question: painter,
    answer_label,
    answer_on_button: painter,
    answer_count_override: pairs,
    decoys,
    wrong_say: app_code_brace_pair_wrong_say,
  };
  let quizzes_get = app_code_lesson_quizzes_unscramble({
    batch_get: batch,
    forwards,
    backwards: forwards,
    unscramble_label: null,
    unscramble: false,
    backwards_include: false,
    lines: false,
  });
  let lesson = app_code_lesson_base(
    name_id,
    above,
    1,
    batch,
    app_code_brace_pair_example_choose,
    null,
    quizzes_get,
    question_label,
    app_code_brace_marked_div,
  );
  return lesson;
}
