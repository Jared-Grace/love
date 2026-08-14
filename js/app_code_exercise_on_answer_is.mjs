import { equal } from "./equal.mjs";
import { property_get } from "./property_get.mjs";
import { property_get_or } from "./property_get_or.mjs";
export function app_code_exercise_on_answer_is(exercise, on_answer) {
  "Whether an exercise is answered the given way - the multiple choice, say, or the unscramble.";
  "The kind an exercise is, is the function that takes the answer, so it is asked by naming that function rather than by a word standing for it. A word would be a second name for something already named, and the two could come apart.";
  let info = property_get(exercise, "info");
  let answered = property_get_or(info, "on_answer", null);
  let is = equal(answered, on_answer);
  return is;
}
