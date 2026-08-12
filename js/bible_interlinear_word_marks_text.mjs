import { not } from "./not.mjs";
export function bible_interlinear_word_marks_text(word) {
  "Everything in an interlinear word that is not part of the word, joined in the order it";
  "occurs - which is how an editorial mark is found without anybody having to type one.";
  "A mark is anything that is not a letter. Naming the marks instead would mean typing";
  "characters that have near-identical twins, and a typed copy that picks the wrong twin";
  "matches nothing - which does not read as an error, it reads as a word carrying no mark,";
  "the wrong answer in the one direction that ships. Asking what is NOT a letter cannot";
  "miss a mark nobody knew about, and two of these marks appear in no legend.";
  "Hebrew's vowel points and cantillation count as part of the word rather than as marks:";
  "they are combining characters, they are on nearly every Hebrew word, and reading them";
  "as editorial would bury the handful of real marks under a hundred thousand false ones.";
  let letter = /[\p{L}\p{M}]/u;
  let characters = Array.from(word);
  function letter_not_is(character) {
    let is_letter = letter.test(character);
    let n = not(is_letter);
    return n;
  }
  let marks = characters.filter(letter_not_is);
  let joined = marks.join("");
  return joined;
}
