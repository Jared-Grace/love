export function text_vowel_dropped_once_is(word, shorter) {
  "Whether one word is another with a single vowel taken out of it and nothing else changed.";
  "Cebuano drops a vowel where a word is built on, and the two spellings then look like a mistake to any test that counts letters. The dictionary writes luoy and the words built on it are written luy and kaluy; sabot gives sabtan. One edit apart says only that they are close, which an invented root two letters off says too. Naming the dropped letter as a vowel is what tells the two cases apart, because a dropped consonant is not a shape Cebuano writes.";
  "Every place a vowel stands is tried rather than the letters being lined up from the front, because the same vowel repeated leaves more than one way to arrive at the shorter word and only one of them needs to be the right one for the answer to be yes.";
  "$plain word";
  "$plain shorter";
  "both name spellings being compared. Neither names anything that runs, reads a file, or reaches anywhere.";
  let vowels = "aeiou";
  let size = word.length;
  let i = 0;
  while (i < size) {
    let letter = word.charAt(i);
    let is_vowel = vowels.includes(letter);
    if (is_vowel) {
      let head = word.slice(0, i);
      let tail = word.slice(i + 1);
      let without = head + tail;
      let same = without === shorter;
      if (same) {
        return true;
      }
    }
    i = i + 1;
  }
  return false;
}
