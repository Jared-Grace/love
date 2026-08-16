import { null_is } from "./null_is.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
export function binisaya_words_known_get(known, word) {
  "What the gathered Cebuano dictionary holds about one word, found whether the word was gathered in small letters or with a capital.";
  "The gathered answers are keyed by the spelling the word wore in the verse it was gathered from, so a word that only ever opens a sentence is held under a capital and a word that never does is held in small letters. A reader that picks one of those two spellings and asks for it alone misses every word held under the other.";
  "This asks for the word in small letters first and only then for it exactly as written, so a word held both ways answers with the small-letter entry it always answered with. Nothing that was found before is found differently; only what was missed is now found.";
  "It answers with nothing rather than throwing when the dictionary holds neither spelling, because a word nobody has looked up yet is the ordinary case and not a fault.";
  let key = text_lower_to(word);
  let lowered = property_get_or_null(known, key);
  if (null_is(lowered)) {
    let written = property_get_or_null(known, word);
    return written;
  }
  return lowered;
}
