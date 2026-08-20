import { arguments_assert } from "./arguments_assert.mjs";
import { equal } from "./equal.mjs";
import { list_add } from "./list_add.mjs";
import { property_get } from "./property_get.mjs";
import { property_get_or } from "./property_get_or.mjs";
import { text_to } from "./text_to.mjs";
export function app_code_quiz_exercise_wrong_texts(exercise, qa_texts) {
  "Every wrong answer one quiz screen could put in front of a learner, as the letters they would read.";
  "They are worked out the way the screen works them out: a fresh run of the batch, its own question left out, and whatever the lesson asked for by name put in beside them. Not the four programs the learner is looking at - those are a different run, which is the whole reason a lesson can mean to offer a word and not offer it.";
  "Anything answering the same as the right answer is left out of both runs. Two questions can differ and still be answered the same way, and a wrong answer that is not wrong is one the learner cannot be marked down for picking - counting it would make a screen look harder than it is.";
  arguments_assert(arguments, 2);
  let info = property_get(exercise, "info");
  let question_property = property_get(qa_texts, "question_property");
  let answer_property = property_get(qa_texts, "answer_property");
  let question_text = property_get(qa_texts, "question_text");
  let answer_text = property_get(qa_texts, "answer_text");
  let batch_get = property_get(exercise, "batch_get");
  let items = batch_get();
  let qa_for = property_get_or(info, "qa_for", null);
  let wrong_texts = [];
  for (let item of items) {
    let shown = item;
    if (qa_for) {
      shown = qa_for(item);
    }
    let input = property_get(shown, question_property);
    let shown_question_text = text_to(input);
    let same = equal(shown_question_text, question_text);
    if (same) {
      continue;
    }
    let input2 = property_get(shown, answer_property);
    let shown_answer_text = text_to(input2);
    let right = equal(shown_answer_text, answer_text);
    if (right) {
      continue;
    }
    list_add(wrong_texts, shown_answer_text);
  }
  let decoy_fn = property_get_or(info, "decoys", null);
  if (decoy_fn) {
    let question = property_get(qa_texts, "question");
    let answer = property_get(qa_texts, "answer");
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
  return wrong_texts;
}
