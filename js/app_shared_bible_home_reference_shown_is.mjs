import { property_get } from "./property_get.mjs";
import { app_shared_bible_chapter_verse_open } from "./app_shared_bible_chapter_verse_open.mjs";
import { app_shared_bible_hash_field_reference } from "./app_shared_bible_hash_field_reference.mjs";
import { app_shared_bible_read_books_en } from "./app_shared_bible_read_books_en.mjs";
import { app_shared_bible_reference_chapter_verse_or_null } from "./app_shared_bible_reference_chapter_verse_or_null.mjs";
import { app_shared_bible_reference_hash_english } from "./app_shared_bible_reference_hash_english.mjs";
import { app_shared_bible_reference_hash_key } from "./app_shared_bible_reference_hash_key.mjs";
import { app_shared_hash_fields_unknown_shown_is } from "./app_shared_hash_fields_unknown_shown_is.mjs";
import { html_hash_object_get } from "./html_hash_object_get.mjs";
import { html_hash_set_object } from "./html_hash_set_object.mjs";
import { null_is } from "./null_is.mjs";
import { property_delete_if_exists } from "./property_delete_if_exists.mjs";
import { property_get_or } from "./property_get_or.mjs";
import { text_empty_is } from "./text_empty_is.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export async function app_shared_bible_home_reference_shown_is(
  context,
  content,
) {
  "A link asking for a passage by name, answered by the screen that shows one verse: has it been dealt with, and has the page it was going to draw been taken out of its hands? A page that hears yes has nothing left to do.";
  "The chapter reader has understood these links for a long time and this one never did. A reference is the form every link out of this app is shared in, so somebody sending one to a friend who happens to open it here was put at the first verse of John and told nothing - the passage they were sent silently swapped for the one the page opens on when it has been told nothing at all.";
  "It answers by turning the reference into the chapter and verse this screen already speaks, which is why almost nothing else here had to change. A reference names one passage, and this screen shows one verse; the first verse of what was asked for is where it opens.";
  "The reference is taken out of the address as it is answered, because from that moment the address says the same passage in the words this screen moves around in - and a reference left sitting in it would say the passage all over again the moment the reader pressed on to the next verse, and pull them back.";
  "A reference naming no book we have is shown the same correction screen the chapter reader shows, from the same field. The alternative is where this started: opening somewhere else without a word.";
  arguments_assert(arguments, 2);
  let hash = html_hash_object_get();
  let key = app_shared_bible_reference_hash_key();
  let ref = property_get_or(hash, key, "");
  let asked_not = text_empty_is(ref);
  if (asked_not) {
    return false;
  }
  let ref_line = await app_shared_bible_reference_hash_english(hash, ref);
  let books_en = await app_shared_bible_read_books_en();
  let field = app_shared_bible_hash_field_reference(books_en);
  let unknown_shown = app_shared_hash_fields_unknown_shown_is(content, hash, [
    field,
  ]);
  if (unknown_shown) {
    return true;
  }
  let r = await app_shared_bible_reference_chapter_verse_or_null(ref_line);
  let placed_not = null_is(r);
  if (placed_not) {
    return false;
  }
  property_delete_if_exists(hash, key);
  html_hash_set_object(hash);
  let chapter_code = property_get(r, "chapter_code");
  let verse_number = property_get(r, "verse_number");
  await app_shared_bible_chapter_verse_open(
    context,
    chapter_code,
    verse_number,
  );
  return true;
}
