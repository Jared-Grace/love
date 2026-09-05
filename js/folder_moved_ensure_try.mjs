import { arguments_assert } from "./arguments_assert.mjs";
import { folder_moved_ensure } from "./folder_moved_ensure.mjs";
import { property_get } from "./property_get.mjs";
import { property_set } from "./property_set.mjs";
import { catch_error_text_or_null_async } from "./catch_error_text_or_null_async.mjs";
export async function folder_moved_ensure_try(before, after) {
  "Puts one folder where it now belongs and answers what happened, saying a refusal as part of the answer rather than raising it.";
  "The sweep that runs this over a whole list is the reason it exists. A refusal raised where it happens ends the walk, so every folder written down after the refused one is never even reached - and the ones that could have moved perfectly well sit exactly where they were, while the reading says nothing at all about them. That is the failure this shape removes: one stale destination quietly turning off a whole migration.";
  "The answer is the same line the move itself gives back, with the reason beside it and nothing left out. Nothing is swallowed either - the caller reads the reason, and the caller is the one that raises, once, with every refusal it collected in it.";
  "A refusal answers that it did not move, because it did not. The two things a reader must never confuse are a folder already in place and a folder that would not go, so they are told apart by the reason standing beside them rather than by the moving word alone.";
  arguments_assert(arguments, 2);
  let answer = {
    before,
    after,
    moved: false,
    refused: null,
  };
  async function move() {
    let one = await folder_moved_ensure(before, after);
    let moved = property_get(one, "moved");
    property_set(answer, "moved", moved);
  }
  let refused = await catch_error_text_or_null_async(move);
  property_set(answer, "refused", refused);
  return answer;
}
