import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { song_pronunciations } from "./song_pronunciations.mjs";
import { regex_word } from "./regex_word.mjs";
export function song_text_pronounced(t) {
  "One piece of text with every word a song generator says wrongly swapped for a spelling it says rightly, and everything else left exactly where it was.";
  "A word is matched whole and whatever its case, so Zion at the start of a line and zion inside one are both found while Zionward is not. A word that began with a capital keeps one, so a name still reads as a name.";
  let pronunciations = song_pronunciations();
  function word_pronounced(word) {
    let lower = word.toLowerCase();
    let b = Object.hasOwn(pronunciations, lower);
    if (not(b)) {
      return word;
    }
    let spelled = pronunciations[lower];
    let first = word[0];
    let right = first.toLowerCase();
    if (equal(first, right)) {
      return spelled;
    }
    let r = spelled[0].toUpperCase() + spelled.slice(1);
    return r;
  }
  let r2 = regex_word();
  let pronounced = t.replace(r2, word_pronounced);
  return pronounced;
}
