import { each_index } from "./each_index.mjs";
import { each_object } from "./each_object.mjs";
import { error_json } from "./error_json.mjs";
import { gloss_entry_explain_key } from "./gloss_entry_explain_key.mjs";
import { list_get } from "./list_get.mjs";
import { list_is } from "./list_is.mjs";
import { list_size } from "./list_size.mjs";
import { list_size_assert_message } from "./list_size_assert_message.mjs";
import { not } from "./not.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
import { less_than } from "./less_than.mjs";
import { number_from_text } from "./number_from_text.mjs";
import { property_set } from "./property_set.mjs";
export function gloss_entries_explains_set(entries, explains, message) {
  "Give a passage's word explanations their new wording, matching them up by where they stand rather than by the word they are about, and leaving every other part of each explanation exactly as it was found.";
  "The word an explanation is about is the one part that must not be typed again. A passage's words are Greek and Hebrew, and typing one of those over changes the letters underneath while the letters on the screen stay the same - two spellings of the same accented letter look alike and are not alike, so a word rewritten by hand stops matching the passage it came from and nothing about it reads as wrong. Handing over the wording alone is what keeps those letters the ones the store already holds.";
  "Standing order is what matches them up, because it is the one thing a wording being rewritten cannot change. Matching by word would fail exactly where it is needed most: the same word stands many times in a passage and would take one wording everywhere, and a word whose letters were mistyped would match nothing at all and be passed over in silence.";
  "Two shapes of wording are answered, because re-writing a passage and mending one are not the same act. A whole list is every explanation of the passage in order, and its length has to agree before anything is written - a short list would otherwise take the opening explanations and leave the rest speaking in the older voice, which reads as finished work. Wordings named by their standing instead are the few being mended, and every other explanation of the passage is left exactly as it was, which is what lets one sentence be corrected without the other nineteen being typed out again to say the same thing they already said.";
  let key = gloss_entry_explain_key();
  let size = list_size(entries);
  let whole = list_is(explains);
  if (whole) {
    list_size_assert_message(explains, size, message);
    function entry_explain_set(entry, index) {
      let explain = list_get(explains, index);
      property_set(entry, key, explain);
    }
    each_index(entries, entry_explain_set);
    return entries;
  }
  function explain_place_set(explain, place) {
    let index = number_from_text(place);
    let within = greater_than_equal(index, 0) && less_than(index, size);
    if (not(within)) {
      error_json({
        message,
        place,
        entries: size,
      });
    }
    let entry = list_get(entries, index);
    property_set(entry, key, explain);
  }
  each_object(explains, explain_place_set);
  return entries;
}
