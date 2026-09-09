import { gloss_entry_explain_key } from "./gloss_entry_explain_key.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { list_map_filter_null_not_is } from "./list_map_filter_null_not_is.mjs";
import { list_tally_ranked } from "./list_tally_ranked.mjs";
import { property_get } from "./property_get.mjs";
import { greater_than } from "./greater_than.mjs";
import { list_filter } from "./list_filter.mjs";
export function gloss_entries_explains_repeated(entries) {
  "Every explanation among a run of word explanations that some other word in the same run was given word for word, commonest first, each named beside how many words were handed it.";
  "An explanation carrying nothing at all is left out rather than counted as a repeat. Whether a word is owed an explanation is a different question with its own reader, and counting the empty ones here would report one gap as many repeats and point the repair at the wrong words.";
  "The reader meets these one under another on a single page, so a sentence written once and handed to nine words is nine words the reader is told nothing new about - the second time it is read it has already been read, and by the ninth it is furniture. That is why the count travels beside the wording: one word sharing a sentence with one other is a slip, and thirty-seven words sharing it is the store's whole account of that kind of word.";
  "Commonest first, because the wording handed to the most words is both the worst of it and the cheapest to mend - one sentence rewritten as many times as it was reused, with the count saying up front how much work that is.";
  let key = gloss_entry_explain_key();
  function explain_read(entry) {
    let explain = property_get_or_null(entry, key);
    return explain;
  }
  let explains = list_map_filter_null_not_is(entries, explain_read);
  let ranked = list_tally_ranked(explains);
  function shared_is(row) {
    let count = property_get(row, "count");
    let more_than_once = greater_than(count, 1);
    return more_than_once;
  }
  let repeated = list_filter(ranked, shared_is);
  return repeated;
}
