import { arguments_assert } from "./arguments_assert.mjs";
import { property_exists } from "./property_exists.mjs";
import { property_get } from "./property_get.mjs";
export function app_learn_js_review_seed_inputs_add(lesson, seed) {
  arguments_assert(arguments, 2);
  ("writes into seed the inputs lesson remembers for its question and answer, when lesson is one that remembers them (inputs_saved). A review rebuilds a question with a fresh lesson that never made it, so a lesson building its wrong answers from the input a program was made from has to be handed that input back - 2026-11-28, at the human's asking, after review 355 threw on a fizz buzz question");
  let saves = property_exists(lesson, "inputs_saved");
  if (saves) {
    let inputs_saved = property_get(lesson, "inputs_saved");
    let question = property_get(seed, "question");
    let answer = property_get(seed, "answer");
    seed.inputs = inputs_saved([question, answer]);
  }
}
