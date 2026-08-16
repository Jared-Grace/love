import { add } from "./add.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_max } from "./list_max.mjs";
import { subtract } from "./subtract.mjs";
export function span_worst_piece(count, size) {
  arguments_assert(arguments, 2);
  ("How long the longer of the two functions would be if a run of this many lines were cut out of a body of that many.");
  ("What a cut is worth is not how much it moves but how much is still too long afterwards, and those are different numbers. Cutting seventy-seven lines out of eighty-nine moves nearly the whole body and leaves a function of seventy-seven - the same problem under a new name. Cutting forty-five leaves forty-five and forty-five, which is half the problem twice.");
  ("What stays behind is one line longer than the lines removed would suggest, because the run does not simply vanish - a line calling the new function stands where it was.");
  ("Nothing here knows about the ceiling, and it does not need to. Asking which cut leaves the smallest worst piece has an answer whatever the ceiling happens to be, so no number is written down that would have to be kept in step with one written somewhere else.");
  let removed = subtract(count, size);
  let behind = add(removed, 1);
  let worst = list_max([size, behind]);
  return worst;
}
