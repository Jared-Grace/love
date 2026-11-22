import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { list_copy } from "./list_copy.mjs";
import { app_shared_bible_home_copy_button } from "./app_shared_bible_home_copy_button.mjs";
import { app_shared_bible_home_share_button } from "./app_shared_bible_home_share_button.mjs";
import { html_span } from "./html_span.mjs";
import { app_shared_bible_biblehub_buttons } from "./app_shared_bible_biblehub_buttons.mjs";
import { app_shared_bible_home_chapter_button } from "./app_shared_bible_home_chapter_button.mjs";
import { fn_name } from "./fn_name.mjs";
import { app_shared_bible_passage_verses_draw } from "./app_shared_bible_passage_verses_draw.mjs";
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
  lines_copy_extra,
  shown,
) {
  arguments_assert(arguments, 10);
  let downloaded = property_get(shown, "downloaded");
  let passage = property_get(shown, "passage");
  let verse_numbers_shown = property_get(shown, "verse_numbers_shown");
  let passage_is = null_not_is(passage);
  ("Copy starts with every verse on the screen already picked when the screen shows a passage, so one press copies the whole passage. One verse on the screen starts with nothing picked, as it always did, and the press picks it.");
  let verse_numbers_chosen = [];
  if (passage_is) {
    verse_numbers_chosen = list_copy(verse_numbers_shown);
  }
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
  ("The row under the verse reads: copy, share, in pictures, the three ways out to biblehub, whole chapter - the order the human asked for. What is done with this verse comes first, then where else it can be seen, then leaving it for the chapter.");
  app_shared_bible_home_copy_button(
    bottom,
    verse_number,
    chapter_code,
    languages_verses,
    p_verse,
    lines_copy_extra,
    verse_numbers_chosen,
  );
  app_shared_bible_home_share_button(
    hash,
    book_name,
    chapter_name,
    verse_numbers_shown,
    bottom,
  );
  ("The picture Bible is only known once the screen has answered, so its place is held here, between share and the biblehub buttons, and handed back for the app that has one to fill. An app without it leaves the place empty, which draws nothing.");
  let pictures_place = html_span(bottom);
  app_shared_bible_biblehub_buttons(
    bottom,
    chapter_name,
    book_name,
    verse_number,
  );
  app_shared_bible_home_chapter_button(
    context,
    app_fn,
    chapter_reader_is,
    bottom,
  );
  ("the verse NUMBER is not printed above the text here: the bar already carries it as the verse-picker button, so a single-verse view would show it twice. the WHOLE-CHAPTER reader is different - it prints each verse's number inline (",
    fn_name("app_shared_bible_read"),
    ") because that is the only place the number appears there. shared by ",
    fn_name("app_bible"),
    " and ",
    fn_name("app_g_bible"),
    ", so both single-verse views drop the duplicate together.");
  if (passage_is) {
    let verse_numbers = property_get(passage, "verse_numbers");
    app_shared_bible_passage_verses_draw(
      top,
      languages_available,
      chapter_code,
      verse_numbers,
    );
  } else {
    app_shared_bible_home_verse_texts(text_languages, top);
  }
  let p = html_p(content);
  await lambda$a({
    p_verse,
    p,
    chapter_code,
    verse_number,
    downloaded,
    passage,
  });
  let r2 = {
    verse_current,
    verse_number,
    languages_available,
    languages_verses,
    chapter_code,
    pictures_place,
  };
  return r2;
}
