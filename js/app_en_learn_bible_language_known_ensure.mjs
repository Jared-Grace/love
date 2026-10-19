import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_bible_language_hash_key } from "./app_shared_bible_language_hash_key.mjs";
import { html_hash_object_get } from "./html_hash_object_get.mjs";
import { property_get_or } from "./property_get_or.mjs";
import { text_empty_is } from "./text_empty_is.mjs";
import { app_en_learn_bible_language_code_saved_or_null } from "./app_en_learn_bible_language_code_saved_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { app_en_learn_bible_language_ask } from "./app_en_learn_bible_language_ask.mjs";
import { html_hash_property_set } from "./html_hash_property_set.mjs";
export function app_en_learn_bible_language_known_ensure(context, on_chosen) {
  "Make sure the address names the language the reader speaks, answering whether the app can open now.";
  "A link that already names a language wins, so a link somebody sent opens in the language it was sent in. Failing that, the language this reader chose on an earlier visit is written into the address. Failing both, this is a new reader: they are asked, the answer is no for now, and on_chosen opens the app once they have chosen.";
  arguments_assert(arguments, 2);
  let key = app_shared_bible_language_hash_key();
  let hash = html_hash_object_get();
  let named = property_get_or(hash, key, "");
  let missing = text_empty_is(named);
  if (missing) {
    let saved = app_en_learn_bible_language_code_saved_or_null();
    if (null_is(saved)) {
      app_en_learn_bible_language_ask(context, on_chosen);
      return false;
    }
    html_hash_property_set(key, saved);
  }
  return true;
}
