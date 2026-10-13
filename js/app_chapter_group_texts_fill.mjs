import { arguments_assert } from "./arguments_assert.mjs";
import { html_hash_object_get } from "./html_hash_object_get.mjs";
import { app_shared_bible_hash_to_languages_chosen } from "./app_shared_bible_hash_to_languages_chosen.mjs";
import { list_last } from "./list_last.mjs";
import { ebible_language_to_bible_folder } from "./ebible_language_to_bible_folder.mjs";
import { ebible_verses_browser } from "./ebible_verses_browser.mjs";
import { verse_number_key } from "./verse_number_key.mjs";
import { property_get } from "./property_get.mjs";
import { property_get_or } from "./property_get_or.mjs";
import { whitespace_normalize } from "./whitespace_normalize.mjs";
import { property_set } from "./property_set.mjs";
import { each } from "./each.mjs";
import { app_chapter_group_laid_out_load } from "./app_chapter_group_laid_out_load.mjs";
import { null_not_is } from "./null_not_is.mjs";
export async function app_chapter_group_texts_fill(texts, chapter_code) {
  "$plain texts";
  "$plain chapter_code";
  "Fills what a copy is made from: for every verse of the chapter, in the language being read, its words and the white space that stands before it.";
  "The plain running words are kept first, a space between verses, so there is always something to copy. Where the chapter can be had with its layout, each verse laid out takes the place of its plain one.";
  "It fills what it is handed rather than handing back something new, because the buttons that copy were drawn before any of this arrived and are already holding it.";
  arguments_assert(arguments, 2);
  let hash = html_hash_object_get();
  let languages_chosen = app_shared_bible_hash_to_languages_chosen(hash);
  let language = list_last(languages_chosen);
  let bible_folder = ebible_language_to_bible_folder(language);
  let verses = await ebible_verses_browser(bible_folder, chapter_code);
  let number_key = verse_number_key();
  function plain_keep(verse) {
    let number = property_get(verse, number_key);
    let text = property_get_or(verse, "text", "");
    let flat = whitespace_normalize(text);
    property_set(texts, number, {
      before: " ",
      text: flat,
    });
  }
  each(verses, plain_keep);
  let laid_out = await app_chapter_group_laid_out_load(
    bible_folder,
    chapter_code,
  );
  function laid_keep(piece) {
    let number = property_get(piece, "verse_number");
    property_set(texts, number, piece);
  }
  if (null_not_is(laid_out)) {
    each(laid_out, laid_keep);
  }
}
