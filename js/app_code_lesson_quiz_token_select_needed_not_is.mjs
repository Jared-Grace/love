import { arguments_assert } from "./arguments_assert.mjs";
import { list_size } from "./list_size.mjs";
import { list_skip } from "./list_skip.mjs";
import { list_map_concat_multiple } from "./list_map_concat_multiple.mjs";
import { list_unique } from "./list_unique.mjs";
import { list_includes_not } from "./list_includes_not.mjs";
export function app_code_lesson_quiz_token_select_needed_not_is(
  variations,
  chosen,
  token,
) {
  "Say whether a piece is one that no order still standing has any further use for, so the row can stop offering it.";
  "Each order still standing is asked what it has left after the taps already made, and the answer is the pieces that could still be tapped. A piece missing from all of those answers can never be tapped correctly again, and leaving it in the row invites a tap that could only be wrong.";
  arguments_assert(arguments, 3);
  let size = list_size(chosen);
  function lambda(variation) {
    let skipped = list_skip(variation, size);
    return skipped;
  }
  let combined = list_map_concat_multiple(variations, lambda);
  let unique = list_unique(combined);
  let n = list_includes_not(unique, token);
  return n;
}
