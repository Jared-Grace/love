import { arguments_assert } from "./arguments_assert.mjs";
import { number_round_places } from "./number_round_places.mjs";
export function number_hundredths_rounded(number) {
  arguments_assert(arguments, 1);
  ("$plain number");
  ("A number cut down to two places after the point.");
  ("IT GOES UP AND COMES BACK DOWN RATHER THAN BEING SPELLED OUT AND READ BACK. Writing the number to two places gives words, and the caller wants a number, so the words would have to be read back - and a number that has been through words twice is a different kind of thing from one that has only ever been arithmetic. Multiplying by a hundred, rounding, and dividing again never leaves the arithmetic.");
  ("Two places is where seconds stop being worth arguing about. A hundredth is already shorter than anybody can hear a difference in, and the moments in a timing document are written to two places, so a number carried at more than that is carrying digits that only ever get thrown away later.");
  ("★ THE ARITHMETIC ABOVE IS DESCRIBED HERE AND DONE SOMEWHERE ELSE, BECAUSE THIS FUNCTION IS A DECISION ABOUT SECONDS AND NOT A WAY OF ROUNDING. Going up and coming back down was written out here as well until the two spellings were noticed, and the reason to keep the name rather than fold it into the caller is the paragraph above it: how many places seconds are worth is a judgement somebody may want to argue with, and an argument needs somewhere to happen.");
  let rounded = number_round_places(number, 2);
  return rounded;
}
