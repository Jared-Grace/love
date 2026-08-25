import { property_get_or_null } from "./property_get_or_null.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_bible_history_get } from "./app_shared_bible_history_get.mjs";
import { property_get } from "./property_get.mjs";
import { app_shared_bible_reference_reading } from "./app_shared_bible_reference_reading.mjs";
import { list_map_async } from "./list_map_async.mjs";
export async function app_shared_bible_history_entries(context) {
  "The remembered readings with each one named the way a reader would say it - the book, the chapter, and the verses picked in it - in the language they are reading in.";
  "What is kept on the device is codes and numbers, because those are what a reading is made of and what one has to be pointed at again. A code is not a thing to offer somebody, so it is spelled out here, at the one moment somebody is about to look at it, rather than stored spelled - a name stored is a name in whatever language the reader used to read in.";
  "Which tab wrote a line down is left behind here. It is how the lines are kept to one per tab and it is nothing to a reader looking at a list of places; the drawing is handed the reading and nothing else.";
  "Spelling a book name means fetching the book names, which is why this has to be waited for.";
  arguments_assert(arguments, 1);
  let kept = app_shared_bible_history_get(context);
  async function named(entry) {
    let chapter_code = property_get(entry, "chapter_code");
    let verse_numbers = property_get(entry, "verse_numbers");
    let reference = await app_shared_bible_reference_reading(
      chapter_code,
      verse_numbers,
    );
    ("Which reader the line was taken down in is carried across untouched, because it is part of the reading rather than part of the naming - it is not said out loud to anybody, and it is what the opening needs. A line written before it was recorded says nothing here, and the opening answers for that.");
    let mode = property_get_or_null(entry, "mode");
    let entry_named = {
      chapter_code,
      verse_numbers,
      reference,
      mode,
    };
    return entry_named;
  }
  let entries = await list_map_async(kept, named);
  return entries;
}
