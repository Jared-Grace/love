import { arguments_assert } from "./arguments_assert.mjs";
import { list_size } from "./list_size.mjs";
import { less_than } from "./less_than.mjs";
import { list_get } from "./list_get.mjs";
import { equal } from "./equal.mjs";
import { subtract } from "./subtract.mjs";
import { null_is } from "./null_is.mjs";
import { word_count_pluralize } from "./word_count_pluralize.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function app_code_lesson_quiz_pieces_later_parts(
  variations,
  chosen,
  token,
) {
  arguments_assert(arguments, 3);
  ("the answer to a piece tapped too early, as parts taking turns between words and code: that it is needed, but later, and how many taps come before it. variations is the orders still standing, chosen the pieces tapped so far, token the piece just refused");
  ("2026-10-26, at the human's asking that each wrong choice have a helpful reminder. The row holds no piece the answer does not use, and a piece no order still needs is taken off it, so a refused piece is always one some order still needs further on - which is what this says. Counted as taps rather than as pieces or lines, because the same words serve a row of tokens and a row of whole lines. The fewest taps over the orders still standing, so the count is true of the nearest place it can go. Not picked: naming what comes next, which is the answer; saying only not yet, which leaves the learner unable to tell a misplaced piece from a wrong one");
  let start = list_size(chosen);
  let nearest = null;
  for (let variation of variations) {
    let size = list_size(variation);
    for (let index = start; less_than(index, size); index++) {
      let piece = list_get(variation, index);
      let found = equal(piece, token);
      if (found) {
        let away = subtract(index, start);
        if (null_is(nearest) || less_than(away, nearest)) {
          nearest = away;
        }
        break;
      }
    }
  }
  let taps = word_count_pluralize(nearest, "more tap");
  let tail = text_combine_multiple([" comes later, after ", taps]);
  let parts = ["Not yet: ", token, tail];
  return parts;
}
