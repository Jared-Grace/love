import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { app_shared_bible_chapter_set } from "./app_shared_bible_chapter_set.mjs";
import { app_shared_bible_read_persist_selection } from "./app_shared_bible_read_persist_selection.mjs";
export function app_shared_bible_history_hash_set(entry) {
  "Point the link at a remembered reading - the chapter it was in, and the verses that were picked in it.";
  "Written into the link rather than handed to a screen, because the link is where both readers look to find out what they are reading. Doing it this way means the tab picking a reading up is left in the state the tab that lost it was in, down to the address, which is also what makes it something a reader can then share or bookmark.";
  arguments_assert(arguments, 1);
  let chapter_code = property_get(entry, "chapter_code");
  let verse_numbers = property_get(entry, "verse_numbers");
  app_shared_bible_chapter_set(chapter_code);
  app_shared_bible_read_persist_selection(verse_numbers);
}
