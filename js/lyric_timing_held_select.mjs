import { arguments_assert } from "./arguments_assert.mjs";
import { list_filter } from "./list_filter.mjs";
import { number_is } from "./number_is.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { subtract } from "./subtract.mjs";
import { math_max } from "./math_max.mjs";
export function lyric_timing_held_select(held, index) {
  arguments_assert(arguments, 2);
  ("$plain held");
  ("$plain index");
  ("Puts the tapping on the line somebody picked out of the list, and says which moment of the song to play from so that line can be heard coming.");
  ("THE MOMENT IS A LITTLE BEFORE THE LINE, NOT ON IT. A person retiming a line has to hear the words arrive before they can press, so starting exactly on the old time would leave nothing to react to.");
  ("A line with no time is played from the nearest timed line before it, because that is the last place in the song anything is known about. Where nothing before it is timed the song starts from the beginning.");
  let lead = 2;
  held.cursor = index;
  let reached = held.starts.slice(0, index + 1);
  let known = list_filter(reached, number_is);
  let none = list_empty_is(known);
  let before = none ? 0 : known[subtract(known.length, 1)];
  let b = subtract(before, lead);
  let moment = math_max(0, b);
  return moment;
}
