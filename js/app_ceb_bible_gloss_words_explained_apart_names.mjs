import { arguments_assert } from "./arguments_assert.mjs";
import { app_ceb_bible_gloss_words_roots_named_apart } from "./app_ceb_bible_gloss_words_roots_named_apart.mjs";
import { property_get } from "./property_get.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { list_unique_sorted } from "./list_unique_sorted.mjs";
export async function app_ceb_bible_gloss_words_explained_apart_names() {
  "Every Cebuano word the app explains one way in one chapter and another way in another, spelled once each and sorted, so a record can be kept of which ones are already known about.";
  "★ THE READING UNDER THIS WAS WIDENED ON THE SECOND OF OCTOBER AND THE RECORD WAS STARTED AGAIN BECAUSE OF IT. What stood here asked a reader that matches the word root followed by a quoted word and nothing else. The pass that rewrote nine hundred and sixty seven of the store's nine hundred and seventy nine chapters that morning writes comes from kalooy and binisaya.com takes it back to kalooy instead, and neither of those says root, so a word whose two explanations used to disagree in writing went quiet without being mended. Thirty six words were being watched and the walk found none of them. The wider reader asked here reads four wordings rather than one, and the same walk now finds eight hundred and three.";
  "★ THE DICTIONARY IS NEVER ASKED, AND THAT IS WHAT MAKES THE LIST HOLD STILL. This used to say so while asking for the dictionary's offenders two lines below, which decided which words were gathered at all. Now nothing of the sort is reached: whether one word carries two claims is settled by the store alone, so the same store answers the same way tonight and next month.";
  "★ THE WORD IS ITS OWN NAME HERE. A row is one word with two or more roots claimed for it, and the word is what a person opens the passages under, so nothing else is put beside it. The count of sightings the reading ranks by is deliberately left out: it moves whenever a chapter is glossed again, and a record that changes on its own is a record that goes red for nothing.";
  arguments_assert(arguments, 0);
  let read = await app_ceb_bible_gloss_words_roots_named_apart();
  let apart = property_get(read, "apart");
  let spelled_all = list_map_property(apart, "word");
  let sorted = list_unique_sorted(spelled_all);
  return sorted;
}
