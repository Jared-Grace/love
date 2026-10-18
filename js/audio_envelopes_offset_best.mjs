import { arguments_assert } from "./arguments_assert.mjs";
import { greater_than } from "./greater_than.mjs";
import { error } from "./error.mjs";
import { subtract } from "./subtract.mjs";
import { less_than_equal } from "./less_than_equal.mjs";
import { add } from "./add.mjs";
import { numbers_correlation } from "./numbers_correlation.mjs";
export function audio_envelopes_offset_best(envelope_short, envelope_long) {
  arguments_assert(arguments, 2);
  ("$plain envelope_short");
  ("$plain envelope_long");
  ("Slides the shorter of two loudness shapes along the longer one and answers the place where they agree best, as the number of readings in and how closely they agree there.");
  ("★ THE TWO ARE NOT LINED UP AT THE START AND THAT IS WHY SLIDING IS NEEDED RATHER THAN A STRAIGHT COMPARISON. A video is rendered from a recording with the quiet lead-in cut off its front, so the same singing begins at a different moment in each file. Compared where they both begin, the opening of one is matched against silence in the other and the answer is near nothing - which reads as two different recordings and is the reason an earlier attempt at this by subtraction could not tell a true pair from a false one.");
  ("★ THE PLACE IT WINS AT LOOKS LIKE A SECOND TEST AND IS NOT ONE. If the shorter file really is the longer one with its front cut off, then the offset it matches at has to equal the difference in their lengths. That reasoning is sound and the test is still worthless, because the offset lands there anyway: measured over fifteen hundred pairs of psalm recordings against psalm videos it equalled the length difference in thirty-one of the thirty-six pairs reported, including every wrong one. The cause is that both files end on the same last note, so sliding the shorter one all the way to the end puts the two endings flush, and flush endings beat every other offset for almost any two pieces of singing. So the closeness alone decides, and it decides soundly only when the caller compares against every wrong candidate it has - that sweep put every true pair at ninety-two hundredths or better and every wrong one at seventy-one hundredths or less.");
  ("It walks every offset rather than searching cleverly, because the shapes are a few hundred readings long and the whole walk costs less than measuring either file did.");
  let longer_is = greater_than(envelope_short.length, envelope_long.length);
  if (longer_is) {
    error(
      "the shape said to be shorter is the longer of the two, so there is nowhere to slide it",
    );
  }
  let offset_last = subtract(envelope_long.length, envelope_short.length);
  let fit_best = -2;
  let offset_best = 0;
  for (let offset = 0; less_than_equal(offset, offset_last); offset++) {
    let offset_end = add(offset, envelope_short.length);
    let window = envelope_long.slice(offset, offset_end);
    let fit = numbers_correlation(envelope_short, window);
    let better_is = greater_than(fit, fit_best);
    if (better_is) {
      fit_best = fit;
      offset_best = offset;
    }
  }
  let r = {
    fit: fit_best,
    offset: offset_best,
  };
  return r;
}
