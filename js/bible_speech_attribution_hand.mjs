import { arguments_assert } from "./arguments_assert.mjs";
import { bible_speech_attributions } from "./bible_speech_attributions.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
import { list_find_or_null } from "./list_find_or_null.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
export function bible_speech_attribution_hand(quotation) {
  "The hand ruling for one quotation, or null where none was needed - the last thing asked, after every rule has already declined to answer.";
  "★ IT IS ASKED LAST AND ANSWERS FOR ALMOST NOTHING, WHICH IS EXACTLY THE SHAPE A HAND TABLE SHOULD HAVE. Thirty rows against six thousand quotations means a null answer is the normal one, so this must be cheap to ask and must never be mistaken for the main path. A table that answered often would be a rule somebody failed to write.";
  "★ THE MATCH IS THE CHAPTER, THE VERSE, AND THE QUOTATION STARTING WITH THE STORED OPENING - ALL THREE, BECAUSE ANY TWO OF THEM ARE NOT ENOUGH. First Samuel 27:10 holds two ruled quotations in one verse, so chapter and verse alone name both; and an opening alone is a phrase that could recur anywhere in the Bible. Starting-with rather than equalling is what lets the stored opening be a few words instead of a whole speech, and a few words are what somebody can read in the table and recognise.";
  arguments_assert(arguments, 1);
  let attributions = bible_speech_attributions();
  function attribution_match(attribution) {
    let chapter_is = equal(attribution.chapter_code, quotation.chapter_code);
    if (not(chapter_is)) {
      return false;
    }
    let verse_is = equal(attribution.verse_number, quotation.verse_number);
    if (not(verse_is)) {
      return false;
    }
    let is = text_starts_with(quotation.text, attribution.opening);
    return is;
  }
  let found = list_find_or_null(attributions, attribution_match);
  if (equal(found, null)) {
    return null;
  }
  let speaker = found.speaker;
  return speaker;
}
