import { app_shared_bible_hash_to_languages_chosen } from "./app_shared_bible_hash_to_languages_chosen.mjs";
import { app_shared_bible_hash_languages_set } from "./app_shared_bible_hash_languages_set.mjs";
import { html_hash_transform_reload } from "./html_hash_transform_reload.mjs";
export function app_shared_bible_hash_languages_transform_reload(lambda$codes) {
  "Changes which languages the link asks for and opens the page again on the new link.";
  "The change is written into the address rather than kept on the page, so a correction somebody made is in the link they are then looking at - they can send it on, and the browser's own back button undoes it.";
  function transform(hash) {
    let codes = app_shared_bible_hash_to_languages_chosen(hash);
    let codes_after = lambda$codes(codes);
    app_shared_bible_hash_languages_set(hash, codes_after);
  }
  html_hash_transform_reload(transform);
}
