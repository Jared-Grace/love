import { equal } from "./equal.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
import { less_than } from "./less_than.mjs";
import { list_all_is } from "./list_all_is.mjs";
import { list_get_property } from "./list_get_property.mjs";
import { list_is } from "./list_is.mjs";
import { list_size } from "./list_size.mjs";
import { list_size_equal } from "./list_size_equal.mjs";
import { gloss_values_placed } from "./gloss_values_placed.mjs";
import { not } from "./not.mjs";
import { property_get } from "./property_get.mjs";
export function gloss_entries_values_standing_is_generic(entries, values, key) {
  "Whether a passage already says, word for word and in the same standings, everything a piece of waiting text would write into one named part of its word explanations - so that writing it again would change nothing at all.";
  "$plain key";
  "the key is the name of a part of a word explanation, like explain or gloss. It names a place to read and nothing that runs.";
  "The text is handed over in a file and the file is never removed by the writing, so the same text is written again every time the chapter is mended. That is harmless while nothing has moved on, and it silently undoes later work once something has. Asking whether the file still says what the passage says is what tells a spent hand-off from one still waiting, and it is the only question whose yes makes the file safe to remove.";
  "Word for word rather than nearly, because the whole point of the reading is that nothing would change. Anything looser would call a file spent while it still carried a difference, and the difference would be thrown away unread.";
  "A whole list has to agree in length before anything else is looked at. A short list would match everywhere it reached and say nothing about the rows past its end, which are exactly the ones it would overwrite.";
  "Which part is being read is handed in rather than settled here, for the same reason the mender that writes it takes the part in: the prose beside a word and the short English under it are handed over in the same two shapes and are spent in the same way, and every word of the reasoning above is true of both.";
  let size = list_size(entries);
  let whole = list_is(values);
  if (whole) {
    let agreed = list_size_equal(values, size);
    if (not(agreed)) {
      return false;
    }
  }
  function placed_standing_is(placed) {
    let index = property_get(placed, "index");
    let within = greater_than_equal(index, 0) && less_than(index, size);
    if (not(within)) {
      return false;
    }
    let held = list_get_property(entries, index, key);
    let value = property_get(placed, "value");
    let same = equal(held, value);
    return same;
  }
  let placed_list = gloss_values_placed(values);
  let r = list_all_is(placed_list, placed_standing_is);
  return r;
}
