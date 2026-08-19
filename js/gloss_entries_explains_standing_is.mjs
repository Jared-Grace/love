import { list_size_equal } from "./list_size_equal.mjs";
import { list_get_property } from "./list_get_property.mjs";
import { equal } from "./equal.mjs";
import { gloss_entry_explain_key } from "./gloss_entry_explain_key.mjs";
import { gloss_values_placed } from "./gloss_values_placed.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
import { less_than } from "./less_than.mjs";
import { list_all_is } from "./list_all_is.mjs";
import { list_is } from "./list_is.mjs";
import { list_size } from "./list_size.mjs";
import { not } from "./not.mjs";
import { property_get } from "./property_get.mjs";
export function gloss_entries_explains_standing_is(entries, explains) {
  "Whether a passage already says, word for word and in the same standings, everything a piece of waiting wording would write into it - so that writing it again would change nothing at all.";
  "The wording is handed over in a file and the file is never removed by the writing, so the same sentences are written again every time the chapter is mended. That is harmless while nothing has moved on, and it silently undoes later work once something has. Asking whether the file still says what the passage says is what tells a spent hand-off from one still waiting, and it is the only question whose yes makes the file safe to remove.";
  "Word for word rather than nearly, because the whole point of the reading is that nothing would change. Anything looser would call a file spent while it still carried a difference, and the difference would be thrown away unread.";
  "A whole list has to agree in length before anything else is looked at. A short list would match everywhere it reached and say nothing about the explanations past its end, which are exactly the ones it would overwrite.";
  let key = gloss_entry_explain_key();
  let size = list_size(entries);
  let whole = list_is(explains);
  if (whole) {
    let agreed = list_size_equal(explains, size);
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
    let explain = property_get(placed, "explain");
    let same = equal(held, explain);
    return same;
  }
  let placed_list = gloss_values_placed(explains);
  let r = list_all_is(placed_list, placed_standing_is);
  return r;
}
