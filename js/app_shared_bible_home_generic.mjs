import { app_shared_bible_home_generic_hash } from "./app_shared_bible_home_generic_hash.mjs";
import { app_shared_bible_home_generic_lambda$a } from "./app_shared_bible_home_generic_lambda$a.mjs";
import { app_shared_bible_home_generic_bottom } from "./app_shared_bible_home_generic_bottom.mjs";
import { app_shared_bible_home_reference_shown_is } from "./app_shared_bible_home_reference_shown_is.mjs";
import { app_shared_bible_home_frame } from "./app_shared_bible_home_frame.mjs";
import { app_shared_bible_verse_arrows } from "./app_shared_bible_verse_arrows.mjs";
import { html_page_bottom_space } from "./html_page_bottom_space.mjs";
import { app_shared_bible_chapter_set_default } from "./app_shared_bible_chapter_set_default.mjs";
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
  let { unknown_shown, hash } = app_shared_bible_home_generic_hash(content);
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
  let r2 = await app_shared_bible_home_generic_lambda$a(
    r,
    context,
    app_fn,
    chapter_reader_is,
    bottom,
    hash,
    content,
    lambda$a,
  );
  let chapter_code = property_get(r2, "chapter_code");
  let languages_verses = property_get(r2, "languages_verses");
  let languages_available = property_get(r2, "languages_available");
  let verse_current = property_get(r2, "verse_current");
  app_shared_bible_verse_arrows(context, chapter_code, verse_current, content);
  html_page_bottom_space(content);
  list_add_multiple(languages_verses, languages_available);
  let v = {
    bar,
  };
  return v;
}
