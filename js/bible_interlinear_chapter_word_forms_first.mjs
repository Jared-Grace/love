import { bible_interlinear_chapter_word_forms } from "./bible_interlinear_chapter_word_forms.mjs";
export async function bible_interlinear_chapter_word_forms_first(
  chapter_code,
  count,
) {
  "$plain chapter_code";
  "$plain count";
  "The first different spoken forms of one chapter, each with the interlinear record of where it first appears: the form, its transliteration, its gloss and its Strong's number.";
  "A form is the word with its chanting marks and its punctuation removed, so the same word read with two different accents is one form, which is what saying a single word needs.";
  let forms = await bible_interlinear_chapter_word_forms(chapter_code);
  let v = Number(count);
  let chosen = forms.slice(0, v);
  return chosen;
}
