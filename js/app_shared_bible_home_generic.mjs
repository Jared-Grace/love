import { app_shared_bible_home_generic_bottom } from "./app_shared_bible_home_generic_bottom.mjs";
import { app_shared_bible_home_reference_shown_is } from "./app_shared_bible_home_reference_shown_is.mjs";
import { app_shared_bible_home_frame } from "./app_shared_bible_home_frame.mjs";
import { app_shared_bible_verse_arrows } from "./app_shared_bible_verse_arrows.mjs";
import { app_shared_bible_home_chapter_button } from "./app_shared_bible_home_chapter_button.mjs";
import { app_shared_bible_home_share_button } from "./app_shared_bible_home_share_button.mjs";
import { app_shared_bible_home_copy_button } from "./app_shared_bible_home_copy_button.mjs";
import { app_shared_bible_home_verse_texts } from "./app_shared_bible_home_verse_texts.mjs";
import { app_shared_bible_hash_unknown_shown_is } from "./app_shared_bible_hash_unknown_shown_is.mjs";
import { fn_name } from "./fn_name.mjs";
import { html_page_bottom_space } from "./html_page_bottom_space.mjs";
import { app_shared_bible_chapter_set_default } from "./app_shared_bible_chapter_set_default.mjs";
import { html_p } from "./html_p.mjs";
import { html_hash_object_get } from "./html_hash_object_get.mjs";
import { property_get } from "./property_get.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
export async function app_shared_bible_home_generic(
  context,
  lambda$a,
  bar_extra,
  app_fn,
  chapter_reader_is,
) {
  let r4 = app_shared_bible_home_frame(context, bar_extra);
  let bar = property_get(r4, "bar");
  let content = property_get(r4, "content");
  ("A passage asked for by name is answered before the page falls back on somewhere to start, because a link carrying a reference has said where to open and the falling back is for links that have not.");
  if (await app_shared_bible_home_reference_shown_is(context, content)) {
    return null;
  }
  if (await app_shared_bible_chapter_set_default(context)) {
    return null;
  }
  let hash = html_hash_object_get();
  ("The same answer the chapter reader gives to a language code naming no bible we have, from the same function, so the two readers do not disagree about what a wrong link means.");
  let unknown_shown = app_shared_bible_hash_unknown_shown_is(content, hash);
  if (unknown_shown) {
    return null;
  }
  let r = await app_shared_bible_home_generic_bottom(
    hash,
    context,
    bar,
    content,
  );
  let bottom = property_get(r, "bottom");
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
  app_shared_bible_verse_arrows(context, chapter_code, verse_current, content);
  html_page_bottom_space(content);
  list_add_multiple(languages_verses, languages_available);
  let v = {
    bar,
  };
  return v;
}
