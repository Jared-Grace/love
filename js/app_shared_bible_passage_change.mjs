import { arguments_assert } from "./arguments_assert.mjs";
import { null_is } from "./null_is.mjs";
import { property_get } from "./property_get.mjs";
import { app_shared_bible_verse_numbers_range_text } from "./app_shared_bible_verse_numbers_range_text.mjs";
import { app_shared_bible_verse_open } from "./app_shared_bible_verse_open.mjs";
export async function app_shared_bible_passage_change(
  context,
  chapter_code,
  passages,
  passage,
  passage_get,
  chapter_change,
) {
  "Move to the passage beside this one, written into the address as its run of verses. Past either end of the chapter's passages, the chapter changes instead.";
  arguments_assert(arguments, 6);
  let other = passage_get(passages, passage);
  if (null_is(other)) {
    await chapter_change(context, chapter_code);
    return;
  }
  let verse_numbers = property_get(other, "verse_numbers");
  let text = app_shared_bible_verse_numbers_range_text(verse_numbers);
  await app_shared_bible_verse_open(context, text);
}
