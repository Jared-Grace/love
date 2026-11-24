import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_bible_chapter_hash_get } from "./app_shared_bible_chapter_hash_get.mjs";
import { app_shared_bible_hash_v_get } from "./app_shared_bible_hash_v_get.mjs";
import { app_shared_bible_passages_or_null } from "./app_shared_bible_passages_or_null.mjs";
import { app_shared_bible_passage_containing_or_null } from "./app_shared_bible_passage_containing_or_null.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { property_get } from "./property_get.mjs";
import { app_shared_bible_verse_numbers_range_text } from "./app_shared_bible_verse_numbers_range_text.mjs";
import { app_shared_bible_verse_set } from "./app_shared_bible_verse_set.mjs";
export async function app_shared_bible_home_passage_found(context, hash) {
  arguments_assert(arguments, 2);
  ("THE PASSAGE IS FOUND BEFORE ANYTHING IS DRAWN, because nearly everything on the screen depends on it: the verse button in the bar says the passage's run, the text shows every verse of it, copy and share take all of it, and the ways on go by a passage. An app that has no passages, or a chapter nobody has written, finds none, and the screen is the one-verse screen it always was.");
  ("A LINK NAMING ONE VERSE OF A PASSAGE IS TURNED INTO THE PASSAGE'S RUN in the address, without a step on the back button. Links naming one verse have already been shared, and they keep working: they open the passage holding that verse, and the address then says what is on the screen.");
  let chapter_code_hash = app_shared_bible_chapter_hash_get(hash);
  let verse_number_hash = app_shared_bible_hash_v_get(hash);
  let downloaded = await app_shared_bible_passages_or_null(
    context,
    chapter_code_hash,
  );
  let passage = app_shared_bible_passage_containing_or_null(
    downloaded,
    verse_number_hash,
  );
  let verse_numbers_shown = [verse_number_hash];
  let verse_label = verse_number_hash;
  if (null_not_is(passage)) {
    verse_numbers_shown = property_get(passage, "verse_numbers");
    verse_label =
      app_shared_bible_verse_numbers_range_text(verse_numbers_shown);
    app_shared_bible_verse_set(verse_label);
  }
  let shown = {
    downloaded,
    passage,
    verse_numbers_shown,
  };
  let r = {
    shown,
    verse_label,
  };
  return r;
}
