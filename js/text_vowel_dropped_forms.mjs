import { less_than } from "./less_than.mjs";
export function text_vowel_dropped_forms(word) {
  "Every spelling of one word that can be reached by taking a single vowel out of it, in the order the vowels stand.";
  "Cebuano drops a vowel where a word is built on, and the piece that is added then hides the shortened spelling inside a longer word: luoy gives loy, and loy is what kaloy and maluloy-on are built around. Asking whether the shortened spelling sits inside the other word is the test that reaches those, and the shortened spellings have to be in hand before anything can be asked of them.";
  "The same vowel standing twice gives the same spelling twice over, and both are kept rather than one being thrown away. Nothing downstream counts these, they are only searched, and keeping them is one rule fewer to hold.";
  "$plain word";
  "it names a spelling being compared against another spelling. It names nothing that runs, reads a file, or reaches anywhere.";
  let vowels = "aeiou";
  let forms = [];
  let size = word.length;
  let i = 0;
  while (less_than(i, size)) {
    let letter = word.charAt(i);
    let is_vowel = vowels.includes(letter);
    if (is_vowel) {
      let head = word.slice(0, i);
      let tail = word.slice(i + 1);
      let without = head + tail;
      forms.push(without);
    }
    i = i + 1;
  }
  return forms;
}
