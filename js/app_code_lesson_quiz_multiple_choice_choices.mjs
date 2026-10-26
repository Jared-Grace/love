import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { app_code_lesson_quiz_multiple_choice_need_more } from "./app_code_lesson_quiz_multiple_choice_need_more.mjs";
import { property_text_to } from "./property_text_to.mjs";
import { equal } from "./equal.mjs";
import { list_includes } from "./list_includes.mjs";
import { or } from "./or.mjs";
import { app_code_lesson_quiz_multiple_choice_logs_words } from "./app_code_lesson_quiz_multiple_choice_logs_words.mjs";
import { not } from "./not.mjs";
import { null_is } from "./null_is.mjs";
import { list_add } from "./list_add.mjs";
import { add } from "./add.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { app_code_lesson_quiz_multiple_choice_distractors_fit } from "./app_code_lesson_quiz_multiple_choice_distractors_fit.mjs";
import { list_concat } from "./list_concat.mjs";
export function app_code_lesson_quiz_multiple_choice_choices(
  r2,
  distractor_count,
  attempts_max,
  next_get,
) {
  arguments_assert(arguments, 4);
  let qa_for = property_get(r2, "qa_for");
  let quiz_question_text = property_get(r2, "quiz_question_text");
  let attempts = property_get(r2, "attempts");
  let question_property = property_get(r2, "question_property");
  let quiz_answer_text = property_get(r2, "quiz_answer_text");
  let answer_property = property_get(r2, "answer_property");
  let distractors = property_get(r2, "distractors");
  let seen = property_get(r2, "seen");
  let word_missing = null;
  while (
    app_code_lesson_quiz_multiple_choice_need_more(
      distractors,
      distractor_count,
      attempts,
      attempts_max,
    )
  ) {
    let item = next_get();
    let shown = qa_for(item);
    let answer_text = property_text_to(shown, answer_property);
    let question_text = property_text_to(shown, question_property);
    let ambiguous = equal(question_text, quiz_question_text);
    let already = list_includes(seen, answer_text);
    let skip = or(already, ambiguous);
    let logs_words = app_code_lesson_quiz_multiple_choice_logs_words(
      quiz_question_text,
      quiz_answer_text,
      answer_text,
    );
    if (not(skip) && not(logs_words) && null_is(word_missing)) {
      word_missing = answer_text;
    }
    if (not(skip) && logs_words) {
      list_add(seen, answer_text);
      list_add(distractors, answer_text);
    }
    attempts = add(attempts, 1);
  }
  ("a program missing a logged word is offered only when nothing else is, so that there are still two choices to pick between");
  if (list_empty_is(distractors) && null_not_is(word_missing)) {
    list_add(distractors, word_missing);
  }
  ("only as many wrong answers as are short enough to read together, never fewer than one");
  let fitting = app_code_lesson_quiz_multiple_choice_distractors_fit(
    distractors,
    quiz_answer_text,
  );
  let choices = list_concat(fitting, [quiz_answer_text]);
  let r = {
    quiz_answer_text,
    choices,
  };
  return r;
}
