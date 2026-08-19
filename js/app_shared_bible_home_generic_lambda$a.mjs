import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { app_shared_bible_home_chapter_button } from "./app_shared_bible_home_chapter_button.mjs";
import { app_shared_bible_home_copy_button } from "./app_shared_bible_home_copy_button.mjs";
import { app_shared_bible_home_share_button } from "./app_shared_bible_home_share_button.mjs";
import { fn_name } from "./fn_name.mjs";
import { app_shared_bible_home_verse_texts } from "./app_shared_bible_home_verse_texts.mjs";
import { html_p } from "./html_p.mjs";
export async function app_shared_bible_home_generic_lambda$a(
  r,
  context,
  app_fn,
  chapter_reader_is,
  bottom,
  hash,
  content,
  lambda$a,
) {
  arguments_assert(arguments, 8);
  let p_verse = property_get(r, "p_verse");
  let top = property_get(r, "top");
  let verse_current = property_get(r, "verse_current");
  let verse_number = property_get(r, "verse_number");
  let text_languages = property_get(r, "text_languages");
  let languages_available = property_get(r, "languages_available");
  let languages_verses = property_get(r, "languages_verses");
  let chapter_name = property_get(r, "chapter_name");
  let book_name = property_get(r, "book_name");
  let chapter_code = property_get(r, "chapter_code");
  app_shared_bible_home_chapter_button(
    context,
    app_fn,
    chapter_reader_is,
    bottom,
  );
  app_shared_bible_home_copy_button(
    bottom,
    verse_number,
    chapter_code,
    languages_verses,
    p_verse,
  );
  app_shared_bible_home_share_button(
    hash,
    book_name,
    chapter_name,
    verse_number,
    bottom,
  );
  ("the verse NUMBER is not printed above the text here: the bar already carries it as the verse-picker button, so a single-verse view would show it twice. the WHOLE-CHAPTER reader is different — it prints each verse's number inline (",
    fn_name("app_shared_bible_read"),
    ") because that is the only place the number appears there. shared by ",
    fn_name("app_bible"),
    " and ",
    fn_name("app_g_bible"),
    ", so both single-verse views drop the duplicate together.");
  app_shared_bible_home_verse_texts(text_languages, top);
  let p = html_p(content);
  await lambda$a({
    p_verse,
    p,
    chapter_code,
    verse_number,
  });
  let r2 = {
    verse_current,
    languages_available,
    languages_verses,
    chapter_code,
  };
  return r2;
}
