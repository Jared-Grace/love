import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_quiz_token_select_variations } from "./app_code_lesson_quiz_token_select_variations.mjs";
import { list_map } from "./list_map.mjs";
import { list_join_space } from "./list_join_space.mjs";
import { app_code_quiz_value_orderings_or_null } from "./app_code_quiz_value_orderings_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { property_get } from "./property_get.mjs";
import { list_places_set_copy } from "./list_places_set_copy.mjs";
import { list_includes } from "./list_includes.mjs";
import { app_code_quiz_dealing_alike_is } from "./app_code_quiz_dealing_alike_is.mjs";
import { not } from "./not.mjs";
import { list_add } from "./list_add.mjs";
import { list_unique } from "./list_unique.mjs";
export function app_code_quiz_value_dealings_unpooled(code) {
  "Every line an unscramble would refuse although it is right by everything the learner was actually shown - the question's own shape, its own tiles, and the one value printed above them - because it is not the line the question happened to be generated from.";
  "Whether a dealing counts as right is asked of the dealing reader rather than decided again here, so this cannot disagree with the pool about what it is looking for. What it does check independently is that the pool holds every one of them: the spelling rules run after the dealings are added, and a rule that dropped one would leave exactly this fault behind.";
  "Which orderings there are to walk is asked of the same maker the pool asks, ceiling and all. That is what makes this a check rather than a second opinion: were the two to work out their own orderings, a hole reported here could be nothing worse than the two of them looking in different places.";
  "The same written line can be reached by several orderings when a value repeats, so each is reported once.";
  arguments_assert(arguments, 1);
  let none = [];
  let variations = app_code_lesson_quiz_token_select_variations(code);
  let accepted = list_map(variations, list_join_space);
  let dealt_from = app_code_quiz_value_orderings_or_null(code);
  let unwalkable = null_is(dealt_from);
  if (unwalkable) {
    return none;
  }
  let tokens = property_get(dealt_from, "tokens");
  let value_places = property_get(dealt_from, "value_places");
  let orderings = property_get(dealt_from, "orderings");
  let rejected = [];
  for (let ordering of orderings) {
    let dealt = list_places_set_copy(tokens, value_places, ordering);
    let written = list_join_space(dealt);
    let holds = list_includes(accepted, written);
    if (holds) {
      continue;
    }
    let alike = app_code_quiz_dealing_alike_is(code, written);
    if (not(alike)) {
      continue;
    }
    list_add(rejected, written);
  }
  let unique = list_unique(rejected);
  return unique;
}
