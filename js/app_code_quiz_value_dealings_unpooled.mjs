import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_quiz_token_select_variations } from "./app_code_lesson_quiz_token_select_variations.mjs";
import { list_map } from "./list_map.mjs";
import { list_join_space } from "./list_join_space.mjs";
import { app_code_quiz_value_dealings_alike } from "./app_code_quiz_value_dealings_alike.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_add } from "./list_add.mjs";
export function app_code_quiz_value_dealings_unpooled(code) {
  "Every line an unscramble would refuse although it is right by everything the learner was actually shown - the question's own shape, its own tiles, and the one value printed above them - because it is not the line the question happened to be generated from.";
  "Whether a dealing counts as right is asked of the dealing reader rather than decided again here, so this cannot disagree with the pool about what it is looking for. What it does check independently is that the pool holds every one of them: the spelling rules run after the dealings are added, and a rule that dropped one would leave exactly this fault behind.";
  "Which lines there are to look for is asked of the same maker the pool asks, ceiling and all, so this is a check rather than a second opinion: were the two to deal their own tiles, a hole reported here could be nothing worse than the two of them having looked in different places.";
  arguments_assert(arguments, 1);
  let variations = app_code_lesson_quiz_token_select_variations(code);
  let accepted = list_map(variations, list_join_space);
  let dealings = app_code_quiz_value_dealings_alike(code);
  let rejected = [];
  for (let written of dealings) {
    let holds = list_includes(accepted, written);
    if (holds) {
      continue;
    }
    list_add(rejected, written);
  }
  return rejected;
}
