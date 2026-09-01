import { subtract } from "./subtract.mjs";
import { less_than } from "./less_than.mjs";
import { less_than_equal } from "./less_than_equal.mjs";
import { greater_than } from "./greater_than.mjs";
import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_sorted_percentile } from "./list_sorted_percentile.mjs";
export function lyric_timing_lag_measured(clicks, taps, window_seconds) {
  arguments_assert(arguments, 3);
  ("$plain clicks");
  ("$plain taps");
  ("$plain window_seconds");
  ("How long after a sound this person presses, worked out from a run of sounds played at moments that were known before any of them were heard.");
  ("THE MOMENTS HAVE TO BE KNOWN RATHER THAN FOUND, WHICH IS THE WHOLE REASON THIS EXISTS. The same question was asked of the songs already timed, by looking for where each line begins in the recording, and it could not be answered: a song has something starting on every beat, so a constant delay is only ever recoverable as far as the nearest beat, and every estimator built on it either locked onto the beat grid or was dragged to zero by the way it chose which onset to measure against. A sound the page played itself has no such trouble. There is nothing to detect, because the moment was decided rather than observed.");
  ("EACH SOUND IS ANSWERED BY THE FIRST PRESS THAT FOLLOWS IT, and only within the window handed in. Pairing from the sounds rather than from the presses is what makes a doubled press harmless - the second one lands after the first has already answered and is simply not wanted - and a press that answers nothing, made while the person was settling or after they had stopped, falls outside every window and counts against nothing.");
  ("A PRESS ANSWERS AT MOST ONE SOUND, WHICH IS WHY THE PRESSES ARE WALKED THROUGH RATHER THAN SEARCHED. Asking each sound on its own which presses lie near it lets one press answer two of them where the windows overlap, and the way it goes wrong is the way that is hardest to see: the run comes back saying every sound was heard, from a person who pressed once. Walking them in order spends each press where it falls and cannot hand it out twice, whatever window it is given.");
  ("A SOUND NOBODY ANSWERED IS REPORTED RATHER THAN FILLED IN. It is the one thing here that says the run was no good: somebody who missed half of them was not listening, and a median taken across the half they did catch would be a real number standing for a run that should be done again. So the count comes back beside the answer and the screen is left to say so, because how many is enough is a question about the person in the room and not about arithmetic.");
  ("The middle press is taken rather than the average of them, because the presses that go wrong go wrong in one direction and by a lot. A person who looks away and answers a second late has not shifted the middle at all and would have pulled an average most of the way to a tenth of a second on a run of ten.");
  function ascending(a, b) {
    let difference = subtract(a, b);
    return difference;
  }
  let pressed = taps.slice().sort(ascending);
  let differences = [];
  let missed = 0;
  let next = 0;
  for (let click of clicks) {
    while (less_than(next, pressed.length) && less_than(pressed[next], click)) {
      next = next + 1;
    }
    let waiting = less_than(next, pressed.length);
    let answered =
      waiting &&
      less_than_equal(subtract(pressed[next], click), window_seconds);
    if (answered) {
      let difference2 = subtract(pressed[next], click);
      differences.push(difference2);
      next = next + 1;
    }
    if (not(answered)) {
      missed = missed + 1;
    }
  }
  let heard = differences.length;
  let sorted = differences.slice().sort(ascending);
  let measured = greater_than(heard, 0);
  let lag = measured ? list_sorted_percentile(sorted, 0.5) : null;
  let r = {
    lag,
    heard,
    missed,
  };
  return r;
}
