import { list_size_greater_than } from "./list_size_greater_than.mjs";
import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lessons_unscramble_codes } from "./app_code_lessons_unscramble_codes.mjs";
import { list_join } from "./list_join.mjs";
import { property_get } from "./property_get.mjs";
import { app_code_lesson_quiz_token_select_variations } from "./app_code_lesson_quiz_token_select_variations.mjs";
import { list_map } from "./list_map.mjs";
import { app_code_quiz_tokens } from "./app_code_quiz_tokens.mjs";
import { app_code_quiz_token_places_of_kind } from "./app_code_quiz_token_places_of_kind.mjs";
import { list_places_get } from "./list_places_get.mjs";
import { list_permutations } from "./list_permutations.mjs";
import { list_size } from "./list_size.mjs";
import { list_places_set_copy } from "./list_places_set_copy.mjs";
import { list_includes } from "./list_includes.mjs";
import { app_code_quiz_dealing_alike_is } from "./app_code_quiz_dealing_alike_is.mjs";
import { not } from "./not.mjs";
import { list_add } from "./list_add.mjs";
import { list_unique } from "./list_unique.mjs";
export function app_code_quiz_unscramble_other_answer_rejected(rounds) {
  "Every unscramble that will refuse an answer which is right by everything the learner was actually shown - the question's own shape, its own tiles, and the one value printed above them - and is simply not the line the question happened to be generated from.";
  "The two gates already standing here read the pool against the question. This one reads the pool against the screen. A backwards unscramble prints the value and nothing else, so the line the question was written from is a fact the learner is never told; judging their answer against it asks them to guess it. That is what a learner met on (2 > 9) === (5 === 4): they built (2 > 4) === (5 === 9), which is true, and the fourth tile they pressed was called an error.";
  "Only the value tiles are dealt round. Every bracket, name and sign stays exactly where the question put it, so each candidate here is the taught shape with the numbers in a different order - which is the one thing a learner looking at a value and a row of tiles has no way to rule out.";
  ("Whether a dealing counts as right is asked of ",
    fn_name("app_code_quiz_dealing_alike_is"),
    " rather than decided again here, so this gate cannot disagree with the pool about what it is looking for. What it does check independently is that the pool holds every one of them: the spelling rules run after the dealings are added, and a rule that dropped one would leave exactly this fault behind.");
  ("Orderings past a ceiling are passed over, the same ceiling the pool uses, because a line with eight loose values would be walked forty thousand ways for an answer no lesson asks.");
  ("The same written line can be reached by several orderings when a value repeats, so each is reported once.");
  arguments_assert(arguments, 1);
  let asked = app_code_lessons_unscramble_codes(rounds);
  let found = [];
  function ordering_written(ordering) {
    let separator = " ";
    let written = list_join(ordering, separator);
    return written;
  }
  for (let item of asked) {
    let code = property_get(item, "code");
    let lesson = property_get(item, "lesson");
    let variations = app_code_lesson_quiz_token_select_variations(code);
    let accepted = list_map(variations, ordering_written);
    let tokens = app_code_quiz_tokens(code);
    let value_places = app_code_quiz_token_places_of_kind(tokens, "value");
    let values = list_places_get(tokens, value_places);
    let orderings = list_permutations(values);
    let ceiling = 5040;
    let too_many = list_size_greater_than(orderings, ceiling);
    if (too_many) {
      continue;
    }
    let rejected = [];
    for (let ordering of orderings) {
      let dealt = list_places_set_copy(tokens, value_places, ordering);
      let written = ordering_written(dealt);
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
    for (let written of unique) {
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
