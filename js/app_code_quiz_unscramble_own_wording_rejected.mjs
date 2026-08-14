import { app_code_lesson_quiz_token_select_variations } from "./app_code_lesson_quiz_token_select_variations.mjs";
import { app_code_lessons_unscramble_codes } from "./app_code_lessons_unscramble_codes.mjs";
import { app_code_quiz_tokens } from "./app_code_quiz_tokens.mjs";
import { list_add } from "./list_add.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_join } from "./list_join.mjs";
import { list_map } from "./list_map.mjs";
import { not } from "./not.mjs";
import { property_get } from "./property_get.mjs";
export function app_code_quiz_unscramble_own_wording_rejected(rounds) {
  "Every unscramble that will not accept the line it was asked in - the learner copies the wording the lesson just taught them, presses the tiles in that order, and is told they are wrong.";
  "Two makers fill the pool of right orderings and it is nobody's job to put the question itself there. One re-prints the line from its tree, and printing drops a bracket the line does not need; the other declines above a small tile count. Neither is at fault on its own, which is why the hole between them stayed open, and why the answer is asked for here rather than reasoned about.";
  "The wording is the tiles in the order the question spells them, because that is exactly what a learner copying the line off the screen will press.";
  let asked = app_code_lessons_unscramble_codes(rounds);
  let found = [];
  function ordering_written(ordering) {
    let written = list_join(ordering, " ");
    return written;
  }
  for (let item of asked) {
    let code = property_get(item, "code");
    let lesson = property_get(item, "lesson");
    let tokens = app_code_quiz_tokens(code);
    let want = ordering_written(tokens);
    let variations = app_code_lesson_quiz_token_select_variations(code);
    let accepted = list_map(variations, ordering_written);
    let holds = list_includes(accepted, want);
    if (not(holds)) {
      list_add(found, {
        lesson,
        code,
        want,
        accepted,
      });
    }
  }
  return found;
}
