import { divide } from "./divide.mjs";
import { multiply } from "./multiply.mjs";
export function beats_seconds(beat_count, beats_per_minute) {
  "$plain beat_count";
  "$plain beats_per_minute";
  "answer how long a count of beats lasts, in seconds, at a stated speed";
  "THE NUMBERS THIS ANSWERS ARE THE ONES AN EDIT IS CUT ON, and a slip in any of them moves a join without anything going red. Splicing a new opening onto one song needed five of these - one beat, three, four, seven and twelve - and every one was worked out by hand twice over, once to plan where to cut and once to check where the cut landed. A recording cut on a wrong number does not fail and does not complain; it simply sounds slightly wrong, which is a fault only a person listening can find, and finding it costs them the whole length of the recording.";
  "IT DIVIDES THE COUNT BEFORE IT SCALES, RATHER THAN MEASURING ONE BEAT AND MULTIPLYING IT. One beat at an ordinary speed is very often a length that cannot be written down exactly, so a beat measured first and multiplied afterwards carries its rounding into every number taken from it, and the error grows with the count. That is the worst direction it could grow in, because the long distances are the ones a listener hears as a join arriving early.";
  "It takes the speed as beats in a minute because that is the number written on the recording itself, so nothing has to be converted before the question can be asked.";
  let seconds_per_minute = 60;
  let minutes = divide(beat_count, beats_per_minute);
  let seconds = multiply(minutes, seconds_per_minute);
  return seconds;
}
