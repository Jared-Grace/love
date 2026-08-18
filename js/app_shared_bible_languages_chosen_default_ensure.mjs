import { html_hash_object_get } from "./html_hash_object_get.mjs";
import { app_shared_bible_language_hash_key } from "./app_shared_bible_language_hash_key.mjs";
import { property_get_or } from "./property_get_or.mjs";
import { text_empty_is } from "./text_empty_is.mjs";
import { language_code_key } from "./language_code_key.mjs";
import { property_get } from "./property_get.mjs";
import { html_hash_property_set } from "./html_hash_property_set.mjs";
export function app_shared_bible_languages_chosen_default_ensure(language) {
  "The language a bible app opens in when the link names none. Every app here opens in english and asks for nothing, so nothing about them changes; an app teaching english to readers of another language opens in that other language instead, because a reader who cannot read english yet is exactly who it is for.";
  "It writes the answer into the link rather than holding it somewhere to be asked for later. The languages are read back out of the link in three separate places, so a default kept anywhere else would have to be handed to all three - and writing it here means the reader who shares the page shares the language along with it.";
  "A link that already names a language is left alone. Somebody chose that, and opening their link in something else would undo the choice every time they arrived.";
  let hash = html_hash_object_get();
  let key = app_shared_bible_language_hash_key();
  let named = property_get_or(hash, key, "");
  let missing = text_empty_is(named);
  if (missing) {
    let property_name = language_code_key();
    let language_code = property_get(language, property_name);
    html_hash_property_set(key, language_code);
  }
}
