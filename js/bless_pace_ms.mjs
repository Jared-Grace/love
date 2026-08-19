import { arguments_assert } from "./arguments_assert.mjs";
import { add } from "./add.mjs";
import { multiply } from "./multiply.mjs";
export function bless_pace_ms(fraction) {
  arguments_assert(arguments, 1);
  ("How long one person stands between one step and the next, drawn from a number between");
  ("nought and one.");
  ("Everybody keeps their OWN pace, and that is what makes a street rather than a");
  ("formation. One clock ticking for the whole crowd moves everybody at the same instant");
  ("at the same rate, which reads as a body of soldiers however randomly each of them");
  ("chooses a direction - the giveaway is not where they go, it is that they all go at");
  ("once.");
  ("The number is CUBED before it is stretched, so the crowd is mostly brisk with a few");
  ("dawdlers rather than evenly spread between fast and slow. Spread evenly, a street");
  ("would have as many people barely moving as walking, and a crowd where half of");
  ("everybody is nearly still looks broken rather than restful.");
  ("Nobody is ever entirely still. Somebody who never moves at all is scenery, and a");
  ("player who prayed for them and came back an hour later would find them exactly where");
  ("they were - which says the world stopped, not that the person is standing about.");
  let squared = multiply(fraction, fraction);
  let cubed = multiply(squared, fraction);
  let stretched = multiply(cubed, 20000);
  let ms = add(700, stretched);
  return ms;
}
