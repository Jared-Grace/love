import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_bible_languages_chosen_get } from "./app_shared_bible_languages_chosen_get.mjs";
import { app_shared_bible_language_chapter_fetch } from "./app_shared_bible_language_chapter_fetch.mjs";
import { list_map_unordered_add_async } from "./list_map_unordered_add_async.mjs";
import { list_filter_null_not_is } from "./list_filter_null_not_is.mjs";
import { app_shared_bible_home_verse_text_entry } from "./app_shared_bible_home_verse_text_entry.mjs";
import { list_map_filter_null_not_is } from "./list_map_filter_null_not_is.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { ebible_language_english } from "./ebible_language_english.mjs";
export async function app_shared_bible_home_languages(
  chapter_code,
  verse_number_hash,
  verses,
  books,
  text,
) {
  arguments_assert(arguments, 5);
  let languages_chosen = app_shared_bible_languages_chosen_get();
  async function lambda_language(lc) {
    let r2 = await app_shared_bible_language_chapter_fetch(lc, chapter_code);
    return r2;
  }
  let fetched = [];
  await list_map_unordered_add_async(
    languages_chosen,
    lambda_language,
    fetched,
  );
  let languages_available = list_filter_null_not_is(fetched);
  function lambda_text_map(item) {
    let r3 = app_shared_bible_home_verse_text_entry(item, verse_number_hash);
    return r3;
  }
  let text_languages = list_map_filter_null_not_is(
    languages_available,
    lambda_text_map,
  );
  if (list_empty_is(languages_available)) {
    languages_available = [
      {
        language: ebible_language_english(),
        verses,
        books,
      },
    ];
  }
  if (list_empty_is(text_languages)) {
    text_languages = [
      {
        language: ebible_language_english(),
        text,
      },
    ];
  }
  return {
    languages_available,
    text_languages,
  };
}
