import { arguments_assert } from "./arguments_assert.mjs";
import { add } from "./add.mjs";
import { multiply } from "./multiply.mjs";
export function bless_still_wait_ms(pace, fraction) {
  arguments_assert(arguments, 2);
  ("How long somebody holds one facing before looking another way, drawn from their own");
  ("pace and a number between nought and one.");
  ("It is built ON their pace rather than being a length of its own, because standing about");
  ("is the same person doing something else and not a second character. A brisk person");
  ("glances quickly and a slow person dwells, exactly as they walk, so the pace goes on");
  ("saying who somebody is even while they are going nowhere. A fixed length would have");
  ("made everybody identical the moment they stopped, and a street where stopping erases");
  ("the difference between people is a street that only has one person in it.");
  ("Between one and three of their waits. Shorter than a wait would be a head snapping");
  ("about faster than the same person can take a step, which reads as a fault rather than");
  ("as looking around; much longer and the turn is missed altogether, because the player");
  ("looked away in between and comes back to somebody simply facing another way.");
  ("Drawn fresh for every single turn, so the same stretch is uneven within itself - a");
  ("glance, a longer look, a glance. Held at one length the turning would be a metronome,");
  ("which is the machine the whole of this was meant to get away from.");
  let extra = multiply(fraction, 2);
  let times = add(1, extra);
  let ms = multiply(pace, times);
  return ms;
}
