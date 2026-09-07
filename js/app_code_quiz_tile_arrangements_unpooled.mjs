import { list_map_unique } from "./list_map_unique.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_quiz_token_select_variations } from "./app_code_lesson_quiz_token_select_variations.mjs";
import { list_map } from "./list_map.mjs";
import { list_join_space } from "./list_join_space.mjs";
import { app_code_quiz_tile_arrangements_or_null } from "./app_code_quiz_tile_arrangements_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { property_get } from "./property_get.mjs";
import { list_includes } from "./list_includes.mjs";
import { app_code_quiz_dealing_alike_is } from "./app_code_quiz_dealing_alike_is.mjs";
import { not } from "./not.mjs";
import { list_add } from "./list_add.mjs";
export function app_code_quiz_tile_arrangements_unpooled(code) {
  "$plain code";
  arguments_assert(arguments, 1);
  ("Every line an unscramble would refuse although it is right by everything the learner was actually shown - the question's own shape, its own tiles, and the one value printed above them - because it is not the line the question happened to be generated from.");
  ("Whether a line counts as right is asked of the reader of dealings rather than decided again here, so this cannot disagree with the pool about what a right answer is. Where to look for one is the opposite: this lays every tile in every place the learner could put it, while the pool hands each tile round among the places of its own kind. Sharing the judgment and not the walk is the whole design - a checker that shared both could only ever catch a spelling rule dropping a line, and the fault actually reported by a learner was the walk itself being too narrow.");
  ("That fault is what the wider walk is for. Shown true and the tiles of (3 > 5) !== (6 < 7), a learner built (3 < 5) !== (7 > 6) and was told the sign they pressed was wrong; every checker standing at the time was walking only the lines whose signs had not moved, so all of them agreed the pool was complete. A walk with no rule about which tile may stand where has nothing left to be narrow about, and what keeps it from reporting nonsense is the shared reader, which throws out anything that will not parse, comes out at another value, or is built to another shape.");
  ("A line with more tiles than the walk will lay out declines rather than counting out its factorial, and declining loses a check rather than an answer - nothing found here is ever offered to a learner.");
  let variations = app_code_lesson_quiz_token_select_variations(code);
  let accepted = list_map(variations, list_join_space);
  let laid = app_code_quiz_tile_arrangements_or_null(code);
  let unwalkable = null_is(laid);
  if (unwalkable) {
    let none = [];
    return none;
  }
  let arrangements = property_get(laid, "arrangements");
  let written_unique = list_map_unique(arrangements, list_join_space);
  let rejected = [];
  for (let written of written_unique) {
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
  return rejected;
}
