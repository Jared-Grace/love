import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { property_set } from "./property_set.mjs";
import { each } from "./each.mjs";
import { app_ceb_bible_gloss_roots_claimed_letters_rare_letter_read_out } from "./app_ceb_bible_gloss_roots_claimed_letters_rare_letter_read_out.mjs";
export async function app_ceb_bible_gloss_roots_claimed_letters_rare_bible_words_of(
  letter_words,
  letter_rows,
) {
  arguments_assert(arguments, 2);
  function letter_note(row) {
    let letter = property_get(row, "letter");
    let words = property_get(row, "words");
    property_set(letter_words, letter, words);
  }
  each(letter_rows, letter_note);
  let by_letter = {};
  let r2 = await app_ceb_bible_gloss_roots_claimed_letters_rare_letter_read_out(
    letter_words,
    by_letter,
  );
  let letter_read_out = property_get(r2, "letter_read_out");
  let letters = property_get(r2, "letters");
  let letters_used = property_get(r2, "letters_used");
  let gathered = property_get(r2, "gathered");
  each(letters_used, letter_read_out);
  function bible_words_of(row) {
    let words = property_get(row, "bible_words");
    return words;
  }
  let r = {
    letters,
    gathered,
    bible_words_of,
  };
  return r;
}
