import { html_hash_object_get } from "./html_hash_object_get.mjs";
import { app_shared_bible_hash_to_languages_chosen } from "./app_shared_bible_hash_to_languages_chosen.mjs";
export function app_shared_bible_language_codes_chosen() {
  "The codes of the languages chosen right now, read out of the address of the page rather than remembered from when a screen was drawn.";
  "Asked freshly every time on purpose. The choice can change while a menu stands open, and a list held from before then says what the reader used to want. That is how a language chosen in the menu came back missing from the same menu a moment later.";
  let hash = html_hash_object_get();
  let codes = app_shared_bible_hash_to_languages_chosen(hash);
  return codes;
}
