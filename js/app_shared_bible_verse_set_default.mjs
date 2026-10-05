import { html_hash_object_get } from "./html_hash_object_get.mjs";
import { app_shared_bible_hash_v_get } from "./app_shared_bible_hash_v_get.mjs";
import { text_empty_is } from "./text_empty_is.mjs";
import { app_shared_screen_set } from "./app_shared_screen_set.mjs";
import { app_shared_bible_verses } from "./app_shared_bible_verses.mjs";
export async function app_shared_bible_verse_set_default(context) {
  "The verse half of the same answer the chapter gets, and whether it had to step in.";
  "A link that spells the verse as nothing is a chapter chosen and a verse not yet chosen - picking a book writes exactly that, on purpose. The single-verse view took the empty word for a verse, looked for it among the chapter's verses, found nothing, and the whole page failed to load. So the reader is handed the rest of that choice instead - the verses of the chapter they named. A link leaving the word out altogether still opens at the first verse; only the empty one means unchosen.";
  let hash = html_hash_object_get();
  let verse_number = app_shared_bible_hash_v_get(hash);
  let n = text_empty_is(verse_number);
  if (n) {
    await app_shared_screen_set(context, app_shared_bible_verses);
  }
  return n;
}
