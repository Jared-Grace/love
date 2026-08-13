import { app_shared_bible_language_hash_key } from "./app_shared_bible_language_hash_key.mjs";
import { text_split_plus } from "./text_split_plus.mjs";
import { property_get_or } from "./property_get_or.mjs";
export function app_shared_bible_hash_to_languages_chosen_or(hash, l_default) {
  "The language codes a link names, and what to fall back on when it names none.";
  "The falling back is the caller's to decide because the callers do not agree about it. Most pages want english, since a stranger following a bare link has chosen nothing and english is what the most of them read. A page a reader returns to wants the languages that reader last chose, because they did choose, and handing them english instead would quietly undo it every time they arrive without a hash.";
  let key = app_shared_bible_language_hash_key();
  let l = property_get_or(hash, key, l_default);
  let languages_chosen = text_split_plus(l);
  return languages_chosen;
}
