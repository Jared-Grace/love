import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lessons_unscramble_codes } from "./app_code_lessons_unscramble_codes.mjs";
import { property_get } from "./property_get.mjs";
import { app_code_quiz_value_dealings_unpooled } from "./app_code_quiz_value_dealings_unpooled.mjs";
import { list_add } from "./list_add.mjs";
import { list_size } from "./list_size.mjs";
export function app_code_quiz_unscramble_other_answer_rejected(rounds) {
  "Every unscramble that will refuse an answer which is right by everything the learner was actually shown - the question's own shape, its own tiles, and the one value printed above them - and is simply not the line the question happened to be generated from.";
  "The two gates already standing here read the pool against the question. This one reads the pool against the screen. A backwards unscramble prints the value and nothing else, so the line the question was written from is a fact the learner is never told; judging their answer against it asks them to guess it. That is what a learner met on (2 > 9) === (5 === 4): they built (2 > 4) === (5 === 9), which is true, and the fourth tile they pressed was called an error.";
  "Only the value tiles are dealt round. Every bracket, name and sign stays exactly where the question put it, so each candidate here is the taught shape with the numbers in a different order - which is the one thing a learner looking at a value and a row of tiles has no way to rule out.";
  "What counts as a refused answer for one question is asked of the reader named below, so this walks the draw and nothing more.";
  arguments_assert(arguments, 1);
  let asked = app_code_lessons_unscramble_codes(rounds);
  let found = [];
  for (let item of asked) {
    let code = property_get(item, "code");
    let lesson = property_get(item, "lesson");
    let unpooled = app_code_quiz_value_dealings_unpooled(code);
    for (let written of unpooled) {
      list_add(found, {
        lesson,
        code,
        rejected: written,
      });
    }
  }
  let walked = list_size(asked);
  let r = {
    walked,
    found,
  };
  return r;
}
