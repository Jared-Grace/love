import { app_code_lesson_quiz_qa_property_other } from "./app_code_lesson_quiz_qa_property_other.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { equal } from "./equal.mjs";
import { list_add } from "./list_add.mjs";
import { list_any } from "./list_any.mjs";
import { list_size_greater_than } from "./list_size_greater_than.mjs";
import { not } from "./not.mjs";
import { property_get } from "./property_get.mjs";
import { property_get_or } from "./property_get_or.mjs";
import { text_includes } from "./text_includes.mjs";
import { text_to } from "./text_to.mjs";
export function app_code_quiz_exercise_lenient_is(exercise) {
  arguments_assert(arguments, 1);
  (
    "true of one quiz question whose right answer can be picked by reading it off the question itself: the right answer stands in the code, and not one of the wrong answers on offer does"
  );
  (
    "That is a screen that marks a learner right for a reason that has nothing to do with what it teaches. It happened three times in a row without anybody noticing, because a quiz that looks well made and a quiz that can be passed by luck are the same quiz to read - the difference is in the wrong answers, which are made when the screen is drawn and never written down anywhere."
  );
  (
    "A question with fewer than two wrong answers is passed over. Where the only two things anybody could answer are true and false there is nothing to add and nothing to take away, so the answer word standing in the code is a floor rather than a fault - saying so of every such screen would be a rule that can never be obeyed."
  );
  (
    "The wrong answers are worked out the way the screen works them out: a fresh run of the batch, its own question left out, and whatever the lesson asked for by name put in beside them. Not the four programs the learner is looking at - those are a different run, which is the whole reason a lesson can mean to offer a word and not offer it."
  );
  let info = property_get(exercise, "info");
  let answer_property = property_get(info, "answer_property");
  let question_property =
    app_code_lesson_quiz_qa_property_other(answer_property);
  let qa = {
    question: property_get(exercise, "question"),
    answer: property_get(exercise, "answer"),
  };
  let answer = property_get(qa, answer_property);
  let question = property_get(qa, question_property);
  let answer_text = text_to(answer);
  let question_text = text_to(question);
  let batch_get = property_get(exercise, "batch_get");
  let items = batch_get();
  let qa_for = property_get_or(info, "qa_for", null);
  let wrong_texts = [];
  for (let item of items) {
    let shown = item;
    if (qa_for) {
      shown = qa_for(item);
    }
    let shown_question_text = text_to(property_get(shown, question_property));
    let same = equal(shown_question_text, question_text);
    if (same) {
      continue;
    }
    let shown_answer_text = text_to(property_get(shown, answer_property));
    let right = equal(shown_answer_text, answer_text);
    if (right) {
      continue;
    }
    list_add(wrong_texts, shown_answer_text);
  }
  let decoy_fn = property_get_or(info, "decoys", null);
  if (decoy_fn) {
    let decoys = decoy_fn(question, answer);
    for (let decoy of decoys) {
      let decoy_text = text_to(decoy);
      let right = equal(decoy_text, answer_text);
      if (right) {
        continue;
      }
      list_add(wrong_texts, decoy_text);
    }
  }
  let enough = list_size_greater_than(wrong_texts, 1);
  if (not(enough)) {
    return false;
  }
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
