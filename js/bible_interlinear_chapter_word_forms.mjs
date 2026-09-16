import { bible_word_form } from "./bible_word_form.mjs";
import { bible_interlinear_chapter_words } from "./bible_interlinear_chapter_words.mjs";
import { equal } from "./equal.mjs";
export async function bible_interlinear_chapter_word_forms(chapter_code) {
  "$plain chapter_code";
  "Every different spoken form of one chapter, each with the interlinear record of where it first appears: the form, its transliteration, its gloss and its Strong's number.";
  "A form is the word with its chanting marks and its punctuation removed, so the same word read with two different accents is one form, which is what saying a single word needs.";
  "COUNTED OVER THE WHOLE BIBLE THIS IS WHAT A RECORDING RUN COSTS, because a form is said once and then played wherever it appears.";
  let verses = await bible_interlinear_chapter_words(chapter_code);
  let seen = new Set();
  let forms = [];
  for (let verse of verses) {
    for (let w of verse.words) {
      let text = bible_word_form(w.original);
      if (equal(text, "") || seen.has(text)) {
        continue;
      }
      seen.add(text);
      forms.push({
        text,
        translit: w.translit,
        gloss: w.gloss,
        strong: w.strong,
      });
    }
  }
  return forms;
}
