import { less_than_equal } from "./less_than_equal.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { number_is } from "./number_is.mjs";
export function lyric_timing_line_at_seconds(starts, seconds) {
  arguments_assert(arguments, 2);
  ("$plain starts");
  ("$plain seconds");
  ("Which line the tapping should be waiting on, for somebody who has dragged the player to a given moment of the song.");
  ("THIS IS WHAT MAKES A REPAIR CHEAP. The ordinary second visit is two lines out of twenty, and without this the only way back to line twelve is to tap through eleven lines that were already right. Dragging the bar to just before the line and asking where that leaves the tapping turns the whole of that into one gesture.");
  ("A line with no time recorded is not counted as passed, whatever moment the player sits at. Nothing is known about where it belongs, so treating it as already behind would let somebody drag past a line they had never timed and never be offered it again.");
  function line_passed(start) {
    let timed = number_is(start);
    let passed = timed && less_than_equal(start, seconds);
    return passed;
  }
  let behind = starts.filter(line_passed);
  let index = behind.length;
  return index;
}
