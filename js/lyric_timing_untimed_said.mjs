import { arguments_assert } from "./arguments_assert.mjs";
import { number_is } from "./number_is.mjs";
import { not } from "./not.mjs";
import { list_map_index } from "./list_map_index.mjs";
import { list_filter_null_not_is } from "./list_filter_null_not_is.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { equal } from "./equal.mjs";
import { word_count_pluralize } from "./word_count_pluralize.mjs";
export function lyric_timing_untimed_said(starts) {
  arguments_assert(arguments, 1);
  ("$plain starts");
  ("How many lines of the passage nobody has heard yet, and where the first of them is, said in a sentence - or nothing at all when every line has a time.");
  ("A PERSON WHO STOPPED ONE LINE SHORT HAD NO WAY OF FINDING OUT UNTIL THEY WATCHED THE VIDEO. The screen counted where the cursor was, and the cursor goes back to the first line whenever a passage is opened, so a psalm with thirty-one of its thirty-two lines timed and a psalm with all thirty-two of them timed said exactly the same thing. The closing Hallelujah of Psalm a hundred and forty-eight was lost that way, and the only thing that ever mentioned it was ffmpeg, several minutes and one wrong video later.");
  ("It says where the first untimed line is as well as how many there are, because the count alone leaves somebody scrolling a list of thirty-two lines to find the gap. One number turns that into pressing the player near that line and starting from there.");
  ("Nothing is said when there is nothing to say. A line reading that no lines are untimed is a line a person has to read every time in order to learn nothing, and the box it sits in is being glanced at between taps.");
  function untimed_number(start, index) {
    let timed = number_is(start);
    let untimed = not(timed);
    let numbered = untimed ? index + 1 : null;
    return numbered;
  }
  let mapped = list_map_index(starts, untimed_number);
  let numbers = list_filter_null_not_is(mapped);
  let none = list_empty_is(numbers);
  if (none) {
    return null;
  }
  let total = numbers.length;
  let first = numbers[0];
  let one = equal(total, 1);
  if (one) {
    let alone = "Line " + first + " has no time yet";
    return alone;
  }
  let counted = word_count_pluralize(total, "line");
  let said = counted + " have no time yet - the first is line " + first;
  return said;
}
