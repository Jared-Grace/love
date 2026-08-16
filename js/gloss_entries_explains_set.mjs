import { each_index } from "./each_index.mjs";
import { gloss_entry_explain_key } from "./gloss_entry_explain_key.mjs";
import { list_get } from "./list_get.mjs";
import { list_size } from "./list_size.mjs";
import { list_size_assert_message } from "./list_size_assert_message.mjs";
import { property_set } from "./property_set.mjs";
export function gloss_entries_explains_set(entries, explains, message) {
  "Give a passage's word explanations their new wording, matching them up by where they stand rather than by the word they are about, and leaving every other part of each explanation exactly as it was found.";
  "The word an explanation is about is the one part that must not be typed again. A passage's words are Greek and Hebrew, and typing one of those over changes the letters underneath while the letters on the screen stay the same - two spellings of the same accented letter look alike and are not alike, so a word rewritten by hand stops matching the passage it came from and nothing about it reads as wrong. Handing over only the wording is what keeps those letters the ones the store already holds.";
  "Standing order is what matches them up, because it is the one thing a wording being rewritten cannot change. Matching by word would fail exactly where it is needed most: the same word stands many times in a passage and would take one wording everywhere, and a word whose letters were mistyped would match nothing at all and be passed over in silence.";
  "So the count has to agree before anything is written. A shorter set of wordings would otherwise take the first explanations and leave the rest of the passage speaking in the older voice, which reads as finished work.";
  let size = list_size(entries);
  list_size_assert_message(explains, size, message);
  let key = gloss_entry_explain_key();
  function entry_explain_set(entry, index) {
    let explain = list_get(explains, index);
    property_set(entry, key, explain);
  }
  each_index(entries, entry_explain_set);
  return entries;
}
