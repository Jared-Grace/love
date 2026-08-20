import { app_code_lesson_quiz_qa_property_other } from "./app_code_lesson_quiz_qa_property_other.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { text_to } from "./text_to.mjs";
export function app_code_quiz_exercise_qa_texts(exercise) {
  "The two halves of one quiz screen worked out the way the screen works them out: which of the pair is asked and which is answered, each of them as it stands and again as the letters a learner sees.";
  "A lesson says which half is the answer and the other half is whatever is left, so both sides are named here rather than either being assumed. A screen that shows a program and asks for its value and one that shows a value and asks for its program are the same screen read in opposite directions, and a reading that fixed one direction would be right about half the lessons and quietly wrong about the rest.";
  "Both the thing and its letters come back, because the two are wanted for different questions - what a lesson hands its own workings-out is the thing, and what is compared against what is on screen is the letters.";
  arguments_assert(arguments, 1);
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
  let r = {
    question: question,
    answer: answer,
    question_text: question_text,
    answer_text: answer_text,
    question_property: question_property,
    answer_property: answer_property,
  };
  return r;
}
