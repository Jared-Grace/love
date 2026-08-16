import { each } from "./each.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { property_exists } from "./property_exists.mjs";
import { property_set } from "./property_set.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
export function words_capitalised_always(words) {
  "Of the words handed in, the ones never once written in small letters, keyed by the word in small letters.";
  "This is what a text says about its own names, and it is evidence and not a verdict. A name is written with a capital wherever it stands while an ordinary word takes one only where a sentence begins, so a word written both ways is certainly not a name - but a word written only the one way may be a name or may simply be a word that never happened to stand mid-sentence. Over the Psalms four hundred and six words come back this way and most of them are ordinary commands opening a line, so this says roughly how many names a body of text holds and settles no single word.";
  "How much text to hand in is the caller's to decide and it is the whole of the accuracy. The evidence is the times a word was written in small letters, so the more text, the fewer ordinary words come back looking like names - and asked of one chapter, a common word that opens every sentence it appears in comes back looking exactly like one.";
  let lowered = {};
  function lower_note(word) {
    let lower = text_lower_to(word);
    let same = equal(word, lower);
    if (same) {
      property_set(lowered, word, true);
    }
  }
  each(words, lower_note);
  let r = {};
  function capital_note(word) {
    let lower = text_lower_to(word);
    let seen = property_exists(lowered, lower);
    if (not(seen)) {
      property_set(r, lower, true);
    }
  }
  each(words, capital_note);
  return r;
}
