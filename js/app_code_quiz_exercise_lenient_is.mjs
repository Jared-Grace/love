import { app_code_quiz_exercise_qa_texts } from "./app_code_quiz_exercise_qa_texts.mjs";
import { app_code_quiz_exercise_wrong_texts } from "./app_code_quiz_exercise_wrong_texts.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_any } from "./list_any.mjs";
import { list_size_greater_than } from "./list_size_greater_than.mjs";
import { not } from "./not.mjs";
import { property_get } from "./property_get.mjs";
import { text_includes } from "./text_includes.mjs";
export function app_code_quiz_exercise_lenient_is(exercise) {
  arguments_assert(arguments, 1);
  ("true of one quiz question whose right answer can be picked by reading it off the question itself: the right answer stands in the code, and not one of the wrong answers on offer does");
  ("That is a screen that marks a learner right for a reason that has nothing to do with what it teaches. It happened three times in a row without anybody noticing, because a quiz that looks well made and a quiz that can be passed by luck are the same quiz to read - the difference is in the wrong answers, which are made when the screen is drawn and never written down anywhere.");
  ("A question with fewer than two wrong answers is passed over. Where the only two things anybody could answer are true and false there is nothing to add and nothing to take away, so the answer word standing in the code is a floor rather than a fault - saying so of every such screen would be a rule that can never be obeyed.");
  let qa_texts = app_code_quiz_exercise_qa_texts(exercise);
  let wrong_texts = app_code_quiz_exercise_wrong_texts(exercise, qa_texts);
  let enough = list_size_greater_than(wrong_texts, 1);
  if (not(enough)) {
    return false;
  }
  let question_text = property_get(qa_texts, "question_text");
  let answer_text = property_get(qa_texts, "answer_text");
  let answer_shown = text_includes(question_text, answer_text);
  if (not(answer_shown)) {
    return false;
  }
  function wrong_shown_is(wrong_text) {
    "true of a wrong answer that also stands in the question, which is what stops the reading-it-off from working";
    let shown = text_includes(question_text, wrong_text);
    return shown;
  }
  let wrong_shown = list_any(wrong_texts, wrong_shown_is);
  let lenient = not(wrong_shown);
  return lenient;
}
