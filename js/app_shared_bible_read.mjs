import { app_shared_bible_read_frame } from "./app_shared_bible_read_frame.mjs";
import { app_shared_footer_column_context } from "./app_shared_footer_column_context.mjs";
import { app_shared_bible_read_unknown_shown } from "./app_shared_bible_read_unknown_shown.mjs";
import { property_get } from "./property_get.mjs";
import { app_shared_bible_read_books } from "./app_shared_bible_read_books.mjs";
import { html_centered } from "./html_centered.mjs";
import { text_empty_is } from "./text_empty_is.mjs";
import { text_empty_not_is } from "./text_empty_not_is.mjs";
import { app_shared_bible_choose_chapter } from "./app_shared_bible_choose_chapter.mjs";
import { app_shared_bible_settings_gear } from "./app_shared_bible_settings_gear.mjs";
import { app_shared_bible_read_chapter_draw } from "./app_shared_bible_read_chapter_draw.mjs";
export async function app_shared_bible_read(
  context,
  verse_action,
  chapter_action,
) {
  "The whole-chapter reader, shared by every bible app, with two places an app hangs its own thing: one on each verse, and one under the last of them once the chapter is drawn.";
  "THE CHAPTER HOOK IS HANDED THE CHAPTER RATHER THAN LEFT TO FIND IT, because by the time it runs the chapter may have been reached by following a reference the address never spelled - so the address is not a reliable answer here and the code in hand is.";
  "It is APPENDED after the verse hook rather than put beside it, because a caller hands its arguments over by position: an inserted one would slide the verse hook into the chapter hook's place and every app would go on calling the same names with the wrong jobs.";
  "AN APP THAT WANTS NEITHER HANDS OVER A FUNCTION THAT DRAWS NOTHING, so there is no absence to test for here. A hook that might not be there is two shapes of caller and two paths through this, and one of them is walked by nobody and so is never found to be wrong.";
  "TWO THINGS CAN ANSWER THE PAGE BEFORE A CHAPTER IS EVER DRAWN, and each of them stops the reading here: an address naming something we do not have, and a book named with no chapter after it. A third, a reference naming no book or several chapters, is asked further in, next to the drawing it stands in for.";
  "ONCE THOSE ARE PAST, WHAT IS LEFT IS ONE CALL, and everything this had read so far goes over in a single record. That keeps the two halves separable - this one is about whether a chapter is what the page is for, the other about which chapter and how it looks - and a row of fifteen arguments, which is what the same call was before, is read by counting places rather than by reading names.";
  "THE WAY OUT OF THE APP IS PUT DOWN BEFORE ANY OF THAT IS DECIDED, because three of the paths below stop early and a foot added at the end of the long one would be missing from the other two. This reader is an ordinary reading app rather than something a person is meant to be inside, so reaching the developer and the other apps is offered on the page rather than hidden a scroll below it; a game would rightly offer neither.";
  let r = app_shared_bible_read_frame(context);
  app_shared_footer_column_context(context);
  let r6 = app_shared_bible_read_unknown_shown(r);
  let unknown_shown = property_get(r6, "unknown_shown");
  let hash = property_get(r6, "hash");
  let count_status = property_get(r6, "count_status");
  let content = property_get(r6, "content");
  let bar = property_get(r6, "bar");
  let t = property_get(r6, "t");
  let max = property_get(r6, "max");
  let help_text = property_get(r6, "help_text");
  if (unknown_shown) {
    return;
  }
  let r2 = await app_shared_bible_read_books(hash);
  let books = property_get(r2, "books");
  let primary_folder = property_get(r2, "primary_folder");
  let languages_chosen = property_get(r2, "languages_chosen");
  let ref_mode = property_get(r2, "ref_mode");
  let ref_line = property_get(r2, "ref_line");
  let ref = property_get(r2, "ref");
  let b = property_get(r2, "b");
  let c = property_get(r2, "c");
  html_centered(bar);
  if (text_empty_is(c) && text_empty_is(ref) && text_empty_not_is(b)) {
    await app_shared_bible_choose_chapter(
      bar,
      content,
      b,
      books,
      primary_folder,
      context,
    );
    app_shared_bible_settings_gear(bar, content, context, count_status);
    return;
  }
  await app_shared_bible_read_chapter_draw({
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
  });
}
