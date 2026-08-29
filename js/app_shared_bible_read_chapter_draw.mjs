import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_bible_read_books_en } from "./app_shared_bible_read_books_en.mjs";
import { app_shared_bible_read_reference_stopped } from "./app_shared_bible_read_reference_stopped.mjs";
import { app_shared_bible_read_dismiss_help } from "./app_shared_bible_read_dismiss_help.mjs";
import { property_get } from "./property_get.mjs";
import { app_shared_bible_ref_chapter_code } from "./app_shared_bible_ref_chapter_code.mjs";
import { null_is } from "./null_is.mjs";
import { app_shared_bible_read_render_verse } from "./app_shared_bible_read_render_verse.mjs";
import { list_map_add_async } from "./list_map_add_async.mjs";
import { html_page_bottom_space } from "./html_page_bottom_space.mjs";
import { app_shared_bible_read_count_refresh } from "./app_shared_bible_read_count_refresh.mjs";
import { app_shared_bible_read_resume } from "./app_shared_bible_read_resume.mjs";
import { promise_later } from "./promise_later.mjs";
export async function app_shared_bible_read_chapter_draw({
  ref_mode,
  hash,
  ref_line,
  count_status,
  content,
  bar,
  context,
  help_text,
  c,
  languages_chosen,
  books,
  max,
  verse_action,
  t,
  chapter_action,
}) {
  arguments_assert(arguments, 1);
  ("Everything the shared bible reader does once it knows a chapter is what the page is for: work out which chapter that is, draw its verses, and hang the app's own thing under the last of them.");
  ("IT TAKES ONE RECORD RATHER THAN FIFTEEN NAMES IN A ROW, because that is what a row that long costs a caller to get right - it is read by counting places, and a place counted wrong hands one page element over as another with nothing anywhere to say so. The names it wants are the names it unpacks, so a caller writing them out is writing the same word twice and cannot put two of them the wrong way round.");
  ("IT STILL STOPS EARLY WHEN A REFERENCE ANSWERS THE PAGE ON ITS OWN, so that question stays beside the drawing it would replace rather than back in the reader. The reader has decided the page is a chapter by the time it calls this; what nobody has decided yet is which chapter, and a reference that names none is how that decision fails.");
  let books_en = await app_shared_bible_read_books_en();
  let reference_stopped = await app_shared_bible_read_reference_stopped(
    {
      ref_mode,
      hash,
      books_en,
      ref_line,
      count_status,
    },
    content,
    bar,
    context,
  );
  if (reference_stopped) {
    return;
  }
  let r2 = app_shared_bible_read_dismiss_help(bar, help_text, c);
  let dismiss_help = property_get(r2, "dismiss_help");
  let chapter_code = property_get(r2, "chapter_code");
  if (ref_mode) {
    let ref_chapter = await app_shared_bible_ref_chapter_code(ref_line);
    if (null_is(ref_chapter)) {
      ref_mode = false;
    } else {
      chapter_code = ref_chapter;
    }
  }
  let r = await app_shared_bible_read_render_verse({
    chapter_code,
    languages_chosen,
    hash,
    context,
    ref_mode,
    bar,
    content,
    books,
    ref_line,
    count_status,
    books_en,
    dismiss_help,
    max,
    verse_action,
    t,
  });
  let render_verse = property_get(r, "render_verse");
  let primary_verses = property_get(r, "primary_verses");
  let verse_rows = property_get(r, "verse_rows");
  let updates = property_get(r, "updates");
  let verse_numbers_chosen = property_get(r, "verse_numbers_chosen");
  await list_map_add_async(primary_verses, render_verse, updates);
  chapter_action(content, chapter_code);
  html_page_bottom_space(content);
  app_shared_bible_read_count_refresh(verse_numbers_chosen, max, count_status);
  async function resume() {
    let r3 = await app_shared_bible_read_resume(
      verse_numbers_chosen,
      updates,
      verse_rows,
    );
    return r3;
  }
  promise_later(resume);
}
