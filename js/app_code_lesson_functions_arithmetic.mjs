import { app_code_lesson_name_id } from "./app_code_lesson_name_id.mjs";
import { app_code_label_code_question } from "./app_code_label_code_question.mjs";
import { js_operators_arithmetic } from "./js_operators_arithmetic.mjs";
import { app_code_lesson_operators_value_max_range_1_next } from "./app_code_lesson_operators_value_max_range_1_next.mjs";
import { js_operator_to_code_call } from "./js_operator_to_code_call.mjs";
import { property_get } from "./property_get.mjs";
import { list_map } from "./list_map.mjs";
import { text_includes } from "./text_includes.mjs";
import { list_find_or_null } from "./list_find_or_null.mjs";
import { text_replace } from "./text_replace.mjs";
import { list_without } from "./list_without.mjs";
import { html_text_set_code_dark } from "./html_text_set_code_dark.mjs";
import { html_style_code_dark } from "./html_style_code_dark.mjs";
import { app_code_function_call_wrong_say } from "./app_code_function_call_wrong_say.mjs";
import { app_code_lesson_quizzes_unscramble_both } from "./app_code_lesson_quizzes_unscramble_both.mjs";
import { app_code_lesson_base } from "./app_code_lesson_base.mjs";
import { html_div_text_code_dark } from "./html_div_text_code_dark.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_div_cycle_code_instead_could_write } from "./app_learn_js_div_cycle_code_instead_could_write.mjs";
import { equal_0 } from "./equal_0.mjs";
import { each_index } from "./each_index.mjs";
import { js_operator_first_code_call } from "./js_operator_first_code_call.mjs";
import { app_learn_js_code_example_name } from "./app_learn_js_code_example_name.mjs";
import { html_div_cycle_code_bold } from "./html_div_cycle_code_bold.mjs";
export function app_code_lesson_functions_arithmetic() {
  let name_id = app_code_lesson_name_id("functions", ["arithmetic"]);
  let example_answer_label = "Function: ";
  let quiz_label = "What is this code rewritten using a function call?";
  let example_question_label = app_code_label_code_question();
  let operators = js_operators_arithmetic();
  let next = app_code_lesson_operators_value_max_range_1_next();
  function batch_get() {
    let mapper = function lambda2(o) {
      let r = js_operator_to_code_call(o, next);
      let answer = property_get(r, "call");
      let question = property_get(r, "expression");
      let r3 = {
        question,
        answer,
      };
      return r3;
    };
    let mapped = list_map(operators, mapper);
    return mapped;
  }
  let example_count = 1;
  let quiz_backwards_label_answer =
    "Rewrite this function call using a math symbol: ";
  let quiz_backwards_answer_count_override = null;
  ("The wrong answers hold the same two numbers as the right one, and differ only in which function or symbol they use. Filled from the other questions they held other numbers, so the one button with the numbers on the screen was the answer every time and could be picked without knowing what any function does.");
  ("Not picked: the two numbers swapped, because add(2, 1) comes to the same as add(1, 2) and so would be a wrong answer that is not wrong.");
  function others_in(answer, property) {
    "the right answer with its function or symbol changed for each of the other three";
    function word_of(o) {
      let word = property_get(o, property);
      return word;
    }
    let words = list_map(operators, word_of);
    function holds(word) {
      let held = text_includes(answer, word);
      return held;
    }
    let own = list_find_or_null(words, holds);
    function with_word(word) {
      let replaced = text_replace(answer, own, word);
      return replaced;
    }
    let others = list_without(words, own);
    let found = list_map(others, with_word);
    return found;
  }
  function decoys_forwards(question, answer) {
    "the same call with each of the other three functions";
    let found = others_in(answer, "verb");
    return found;
  }
  function decoys_backwards(question, answer) {
    "the same sum with each of the other three symbols";
    let found = others_in(answer, "operator");
    return found;
  }
  let forwards = {
    question_label: example_question_label,
    on_question: html_text_set_code_dark,
    answer_label: quiz_label,
    answer_on_button: html_style_code_dark,
    answer_count_override: null,
    wrong_say: app_code_function_call_wrong_say,
    decoys: decoys_forwards,
  };
  let backwards = {
    question_label: "Function call: ",
    on_question: html_text_set_code_dark,
    answer_label: quiz_backwards_label_answer,
    answer_on_button: html_style_code_dark,
    answer_count_override: quiz_backwards_answer_count_override,
    wrong_say: app_code_function_call_wrong_say,
    decoys: decoys_backwards,
  };
  let quizzes_get = app_code_lesson_quizzes_unscramble_both({
    batch_get,
    forwards,
    backwards,
  });
  let lesson = app_code_lesson_base(
    name_id,
    above,
    example_count,
    batch_get,
    html_text_set_code_dark,
    example_answer_label,
    quizzes_get,
    example_question_label,
    html_div_text_code_dark,
  );
  return lesson;
  function above(root) {
    function lambda(o, index) {
      let r = js_operator_to_code_call(o, next);
      let code = property_get(r, "call");
      let expression = property_get(r, "expression");
      let c2 = app_learn_js_container_light_blue(root);
      app_learn_js_div_cycle_code_instead_could_write(c2, expression, code);
      equal_0(index);
    }
    each_index(operators, lambda);
    let c = app_learn_js_container_light_blue(root);
    let o_f = js_operator_first_code_call(next);
    let call = property_get(o_f, "call");
    let verb = property_get(o_f, "verb");
    app_learn_js_code_example_name(c, verb, "function");
    html_div_cycle_code_bold(c, ["", call, " is called a ", "function call"]);
  }
}
