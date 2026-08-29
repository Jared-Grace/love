import { arguments_assert } from "./arguments_assert.mjs";
import { not } from "./not.mjs";
import { app_shared_bible_hash_field_reference } from "./app_shared_bible_hash_field_reference.mjs";
import { app_shared_hash_fields_unknown_shown_is } from "./app_shared_hash_fields_unknown_shown_is.mjs";
import { app_shared_bible_ref_chapter_codes } from "./app_shared_bible_ref_chapter_codes.mjs";
import { list_multiple_is } from "./list_multiple_is.mjs";
import { app_shared_bible_ref_chapters_guard } from "./app_shared_bible_ref_chapters_guard.mjs";
import { app_shared_bible_settings_gear } from "./app_shared_bible_settings_gear.mjs";
export async function app_shared_bible_read_reference_stopped(
  { ref_mode, hash, books_en, ref_line, count_status },
  content,
  bar,
  context,
) {
  "Whether a link naming a reference has already been answered on the page, so that the reading stops here rather than going on to draw a chapter.";
  "A REFERENCE NAMING NO BOOK WE HAVE IS ANSWERED HERE RATHER THAN READ PAST. Read past, the reading of it came back with nothing, the link stopped counting as a reference, and Genesis 1 opened - so one wrong letter in a book name sent the reader to the front of the bible with nothing anywhere saying why.";
  "IT STOPS THE PAGE RATHER THAN SITTING ABOVE THE CHAPTER, which is what the verse correction does, because the two are not the same kind of wrong. A verse this chapter has not got still came with the chapter the reader meant, so there is something right to draw; a book we cannot find leaves no chapter at all, and any chapter drawn under the correction would be one nobody asked for.";
  "A REFERENCE THAT COULD MEAN SEVERAL CHAPTERS IS ALSO ANSWERED HERE, by asking which one was meant, because there is no one chapter to draw until that is settled.";
  "A link that is not a reference at all stops nothing, and neither does a reference that names one chapter we have - both of those go on to be drawn.";
  arguments_assert(arguments, 4);
  if (not(ref_mode)) {
    return false;
  }
  let reference_field = app_shared_bible_hash_field_reference(books_en);
  let reference_shown = app_shared_hash_fields_unknown_shown_is(content, hash, [
    reference_field,
  ]);
  if (reference_shown) {
    return true;
  }
  let ref_chapters = app_shared_bible_ref_chapter_codes(ref_line, books_en);
  if (list_multiple_is(ref_chapters)) {
    await app_shared_bible_ref_chapters_guard(content, ref_chapters, books_en);
    app_shared_bible_settings_gear(bar, content, context, count_status);
    return true;
  }
  return false;
}
