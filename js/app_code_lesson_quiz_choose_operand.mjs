import { property_get } from "./property_get.mjs";
import { property_text_to } from "./property_text_to.mjs";
import { app_code_lesson_quiz_qa_question } from "./app_code_lesson_quiz_qa_question.mjs";
import { text_to } from "./text_to.mjs";
import { text_regex_match } from "./text_regex_match.mjs";
import { list_shuffle } from "./list_shuffle.mjs";
import { equal } from "./equal.mjs";
import { app_code_quiz_choice_button_answer } from "./app_code_quiz_choice_button_answer.mjs";
import { list_map } from "./list_map.mjs";
export function app_code_lesson_quiz_choose_operand(
  parent,
  info,
  qa,
  on_success,
  on_wrong,
  batch_get,
) {
  "an answer quiz whose buttons are the NUMBERS in the question itself (for '14 / 4' the choices are 14 and 4; for 'Math.floor(14 / 4) === 3' they are 14, 4 and 3) - so the other numbers are decoys and the learner must pick the one in the asked role, not just spot the only number on screen. The across-item multiple choice can never set this up because it skips same-question items. The choices are every run of digits in the question, so it works whatever punctuation surrounds them (parens, ===, non-breaking spaces)";
  let answer_property = property_get(info, "answer_property");
  let quiz_answer_text = property_text_to(qa, answer_property);
  let quiz_question = app_code_lesson_quiz_qa_question(qa, answer_property);
  let quiz_question_text = text_to(quiz_question);
  let choices = text_regex_match(quiz_question_text, /[0-9]+/g);
  ("shuffle rather than sort the numbers: value-sorting would always put the dividend (largest) last and the quotient (smallest) first, so the learner could pick by position without knowing the role");
  list_shuffle(choices);
  let state = {
    answered: false,
  };
  function each_button(choice) {
    let right = equal(choice, quiz_answer_text);
    let b = app_code_quiz_choice_button_answer(
      parent,
      choice,
      right,
      state,
      on_success,
      on_wrong,
    );
    return b;
  }
  list_map(choices, each_button);
}
