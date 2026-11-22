import { property_initialize } from "./property_initialize.mjs";
import { app_shared_bible_verse_hash_key } from "./app_shared_bible_verse_hash_key.mjs";
import { log } from "./log.mjs";
import { text_empty_is } from "./text_empty_is.mjs";
import { app_shared_bible_hash_verse_numbers } from "./app_shared_bible_hash_verse_numbers.mjs";
import { list_first } from "./list_first.mjs";
export function app_shared_bible_hash_v_get(hash) {
  let property_name = app_shared_bible_verse_hash_key();
  let value = property_initialize(hash, property_name, "1");
  log(app_shared_bible_hash_v_get.name, {
    value2: value,
  });
  ("A LINK CAN NAME A RUN OF VERSES, like 1-4, and the screens reading this show one verse or the passage holding it - so a run answers with its first verse. Handed back whole, a run was looked for among the chapter's verses as if it were one, found nowhere, and the page failed to load. The empty word is handed back as it is, because it means a verse not yet chosen.");
  if (text_empty_is(value)) {
    return value;
  }
  let verse_numbers = app_shared_bible_hash_verse_numbers(hash);
  let first = list_first(verse_numbers);
  return first;
}
