import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_bible_passage_kept_get } from "./app_shared_bible_passage_kept_get.mjs";
import { app_shared_bible_chapter_hash_key } from "./app_shared_bible_chapter_hash_key.mjs";
import { app_shared_bible_verse_hash_key } from "./app_shared_bible_verse_hash_key.mjs";
import { app_shared_bible_verses_separator } from "./app_shared_bible_verses_separator.mjs";
import { html_hash_property_set } from "./html_hash_property_set.mjs";
import { html_hash_property_delete } from "./html_hash_property_delete.mjs";
import { list_join } from "./list_join.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { null_is } from "./null_is.mjs";
import { property_get } from "./property_get.mjs";
export function app_shared_bible_passage_kept_restore(context) {
  "Put the remembered passage back into the link, undoing whatever a half-finished choosing wrote there.";
  "Choosing a book writes a chapter into the link before a chapter has been chosen, because the chapter picker is handed its book that way. So by the second screen the link no longer says where somebody came from, and leaving by the way out would have landed them somewhere they never asked for. The remembering is what makes the way out honest.";
  "A passage with no verses picked takes the verse back out of the link rather than writing an empty one, because that is the state it is restoring: a whole chapter with nothing chosen inside it. Left in, the word the verse picker wrote on the way here would survive the cancelling and land the reader on a verse they only passed through.";
  "Only the chapter and the verses are put back. Everything else the link carries - how many verses to a message, which bibles to read - was not touched by the choosing and is somebody's setting rather than their place, so restoring it would undo a change they meant.";
  arguments_assert(arguments, 1);
  let kept = app_shared_bible_passage_kept_get(context);
  let nothing = null_is(kept);
  if (nothing) {
    return;
  }
  let chapter_code = property_get(kept, "chapter_code");
  let verse_numbers = property_get(kept, "verse_numbers");
  let property_name = app_shared_bible_chapter_hash_key();
  html_hash_property_set(property_name, chapter_code);
  let property_name2 = app_shared_bible_verse_hash_key();
  let unpicked = list_empty_is(verse_numbers);
  if (unpicked) {
    html_hash_property_delete(property_name2);
    return;
  }
  let separator = app_shared_bible_verses_separator();
  let joined = list_join(verse_numbers, separator);
  html_hash_property_set(property_name2, joined);
}
