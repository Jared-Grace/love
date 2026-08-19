import { add } from "./add.mjs";
import { greater_than } from "./greater_than.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_max } from "./list_max.mjs";
import { subtract } from "./subtract.mjs";
export function span_worst_piece(count, size, handed_back) {
  arguments_assert(arguments, 3);
  ("How long the longer of the two functions would be if a run of this many lines were cut out of a body of that many, given how many names the run would have to hand back.");
  ("What a cut is worth is not how much it moves but how much is still too long afterwards, and those are different numbers. Cutting seventy-seven lines out of eighty-nine moves nearly the whole body and leaves a function of seventy-seven - the same problem under a new name. Cutting forty-five leaves forty-five and forty-five, which is half the problem twice.");
  ("What stays behind is one line longer than the lines removed would suggest, because the run does not simply vanish - a line calling the new function stands where it was.");
  ("Handing several names back costs a line each on top of that, and leaving them out was measured wrong by eight lines on 2026-08-19. A run said to leave thirty-four left forty-two, because the eight names the lines behind still read came home in one record and were lifted out of it one line at a time. So a cut promised as the one that finishes a function did not finish it, and the promise is the whole of what this number is for.");
  ("One name costs nothing extra, and nor does none, because the call itself is the line that takes it - the name is bound where the call stands. Only from two upwards is there a record to take apart, and then every name in it is paid for.");
  ("Nothing here knows about the ceiling, and it does not need to. Asking which cut leaves the smallest worst piece has an answer whatever the ceiling happens to be, so no number is written down that would have to be kept in step with one written somewhere else.");
  let removed = subtract(count, size);
  let behind = add(removed, 1);
  let lifted_is = greater_than(handed_back, 1);
  if (lifted_is) {
    behind = add(behind, handed_back);
  }
  let worst = list_max([size, behind]);
  return worst;
}
