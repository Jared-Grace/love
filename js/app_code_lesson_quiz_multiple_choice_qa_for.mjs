import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { property_get_or } from "./property_get_or.mjs";
import { identity } from "./identity.mjs";
export function app_code_lesson_quiz_multiple_choice_qa_for(r, info) {
  arguments_assert(arguments, 2);
  let question_property = property_get(r, "question_property");
  let quiz_answer_text = property_get(r, "quiz_answer_text");
  let answer_property = property_get(r, "answer_property");
  let distractors = property_get(r, "distractors");
  let seen = property_get(r, "seen");
  let distractor_count = property_get(r, "distractor_count");
  let next_get = property_get(r, "next_get");
  let answer_count_max = property_get(r, "answer_count_max");
  let quiz_question_text = property_get(r, "quiz_question_text");
  ("the wrong answers below are drawn from the lesson's other questions, and read off each one by the same property names this quiz used. A quiz that shows something OTHER than the pair its batch spells - one that works a third value out of the pair and asks about that - would otherwise draw the wrong kind of thing entirely, and could offer the learner the very line it is asking them about. Such a lesson hands over info.qa_for to remap a drawn line the same way it remapped its own; every other lesson shows the pair as it stands and needs nothing");
  let qa_for = property_get_or(info, "qa_for", identity);
  let r2 = {
    question_property,
    quiz_answer_text,
    answer_property,
    distractors,
    seen,
    distractor_count,
    next_get,
    answer_count_max,
    quiz_question_text,
    qa_for,
  };
  return r2;
}
