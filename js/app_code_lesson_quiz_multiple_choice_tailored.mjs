import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { app_code_lesson_quiz_multiple_choice_add_decoy } from "./app_code_lesson_quiz_multiple_choice_add_decoy.mjs";
import { each } from "./each.mjs";
export function app_code_lesson_quiz_multiple_choice_tailored(r2, quiz_answer) {
  arguments_assert(arguments, 2);
  let question_property = property_get(r2, "question_property");
  let quiz_question = property_get(r2, "quiz_question");
  let quiz_question_text = property_get(r2, "quiz_question_text");
  let answer_count_max = property_get(r2, "answer_count_max");
  let next_get = property_get(r2, "next_get");
  let distractor_count = property_get(r2, "distractor_count");
  let seen = property_get(r2, "seen");
  let distractors = property_get(r2, "distractors");
  let has_decoys = property_get(r2, "has_decoys");
  let r3 = property_get(r2, "r3");
  let answer_property = property_get(r3, "answer_property");
  let decoy_fn = property_get(r3, "decoy_fn");
  if (has_decoys) {
    ("seed the TAILORED wrong answers first (the tempting mistakes for this question, e.g. the rounded-UP value), so they are guaranteed to appear; the loop below then fills any remaining slots with random distractors from other questions. Opt-in via info.decoys - lessons without it behave exactly as before");
    let tailored = decoy_fn(quiz_question, quiz_answer);
    function add_decoy(decoy) {
      let r = app_code_lesson_quiz_multiple_choice_add_decoy(
        decoy,
        seen,
        distractors,
      );
      return r;
    }
    each(tailored, add_decoy);
  }
  let r4 = {
    question_property,
    quiz_question_text,
    answer_count_max,
    next_get,
    distractor_count,
    seen,
    distractors,
    answer_property,
  };
  return r4;
}
