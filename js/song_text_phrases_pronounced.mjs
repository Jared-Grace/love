import { object_property_names } from "./object_property_names.mjs";
import { equal } from "./equal.mjs";
import { song_pronunciation_phrases } from "./song_pronunciation_phrases.mjs";
export function song_text_phrases_pronounced(t) {
  "One piece of text with every run of words a song generator says wrongly swapped for a spelling it says rightly, matched whole and whatever its case, with any run of spaces or line breaks between its words.";
  "A run that began with a capital keeps one. Run before the single-word swap, so the word a phrase settles is never swapped again on its own.";
  let phrases = song_pronunciation_phrases();
  let pronounced = t;
  for (let phrase of object_property_names(phrases)) {
    let spelled = phrases[phrase];
    let words = phrase.split(" ");
    let edge = "[\\p{L}\\p{M}\\p{N}]";
    let r = new RegExp(
      "(?<!" + edge + ")" + words.join("\\s+") + "(?!" + edge + ")",
      "giu",
    );
    function phrase_pronounced(found) {
      let first = found[0];
      let right = first.toLowerCase();
      if (equal(first, right)) {
        return spelled;
      }
      let r2 = spelled[0].toUpperCase() + spelled.slice(1);
      return r2;
    }
    pronounced = pronounced.replace(r, phrase_pronounced);
  }
  return pronounced;
}
