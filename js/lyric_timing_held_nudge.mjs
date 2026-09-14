import { math_max } from "./math_max.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { number_is } from "./number_is.mjs";
import { not } from "./not.mjs";
import { number_hundredths_rounded } from "./number_hundredths_rounded.mjs";
export function lyric_timing_held_nudge(held, index, seconds) {
  arguments_assert(arguments, 3);
  ("$plain held");
  ("$plain index");
  ("$plain seconds");
  ("Moves the time of one line earlier or later by a small step, and says the moment it now begins at - or nothing where the line has no time to move.");
  ("A NUDGE IS FOR A LINE THAT IS NEARLY RIGHT. Retapping is the fix for a line that is badly out, but a line a tenth of a second late is hard to hit better by hand than it already was, and a step button fixes it exactly.");
  ("A line with no time is left alone rather than given one. Nudging nothing would have to invent where it started, and a guessed time looks exactly like a heard one.");
  let start = held.starts[index];
  let timed = number_is(start);
  if (not(timed)) {
    return null;
  }
  let number = math_max(0, start + seconds);
  let moved = number_hundredths_rounded(number);
  held.starts[index] = moved;
  return moved;
}
