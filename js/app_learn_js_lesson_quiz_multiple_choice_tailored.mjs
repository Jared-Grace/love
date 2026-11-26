import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { list_copy } from "./list_copy.mjs";
import { list_shuffle } from "./list_shuffle.mjs";
import { less_than } from "./less_than.mjs";
import { app_learn_js_lesson_quiz_multiple_choice_add_decoy } from "./app_learn_js_lesson_quiz_multiple_choice_add_decoy.mjs";
import { each } from "./each.mjs";
export function app_learn_js_lesson_quiz_multiple_choice_tailored(
  r,
  quiz_answer,
) {
  arguments_assert(arguments, 2);
  let question_property = property_get(r, "question_property");
  let quiz_question = property_get(r, "quiz_question");
  let quiz_question_text = property_get(r, "quiz_question_text");
  let answer_count_max = property_get(r, "answer_count_max");
  let next_get = property_get(r, "next_get");
  let distractor_count = property_get(r, "distractor_count");
  let seen = property_get(r, "seen");
  let distractors = property_get(r, "distractors");
  let has_decoys = property_get(r, "has_decoys");
  let r3 = property_get(r, "r3");
  let answer_property = property_get(r3, "answer_property");
  let decoy_fn = property_get(r3, "decoy_fn");
  if (has_decoys) {
    ("seed the TAILORED wrong answers first (the tempting mistakes for this question, e.g. the rounded-UP value), so they are guaranteed to appear; the loop below then fills any remaining slots with random distractors from other questions. Opt-in via info.decoys - lessons without it behave exactly as before");
    ("2026-11-26, at the human's asking: no more than the answer count allows. Every tailored decoy used to be added, so a lesson with four wrong programs showed five choices past a maximum of four. They are shuffled and taken until the slots are full, so which ones show changes from question to question; a lesson with no more decoys than slots shows all of them, as before.");
    let original = decoy_fn(quiz_question, quiz_answer);
    let tailored = list_copy(original);
    list_shuffle(tailored);
    function add_decoy(decoy) {
      if (less_than(distractors.length, distractor_count)) {
        app_learn_js_lesson_quiz_multiple_choice_add_decoy(
          decoy,
          seen,
          distractors,
        );
      }
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
