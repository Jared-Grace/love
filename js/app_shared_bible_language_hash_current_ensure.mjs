import { arguments_assert } from "./arguments_assert.mjs";
import { html_hash_object_get } from "./html_hash_object_get.mjs";
import { app_shared_bible_language_hash_key } from "./app_shared_bible_language_hash_key.mjs";
import { property_get_or } from "./property_get_or.mjs";
import { text_empty_is } from "./text_empty_is.mjs";
import { app_shared_bible_hash_to_languages_chosen_or } from "./app_shared_bible_hash_to_languages_chosen_or.mjs";
import { list_join_plus } from "./list_join_plus.mjs";
import { equal } from "./equal.mjs";
import { html_hash_property_set } from "./html_hash_property_set.mjs";
export function app_shared_bible_language_hash_current_ensure() {
  "Rewrite the languages a link names to the codes they go by now, so a link shared before a code was renamed - l=ur - shows l=urd in the address once it is opened.";
  "Every reader of the link already reads an old code as its current one, so nothing on the screen depends on this. What it changes is the address itself: a reader who copies it, or shares it again, passes on the current code rather than the old one, and the old spelling stops travelling.";
  "The reading is the one every bible page already does, so the translation from old to new is written in one place and this only writes its answer back. A link naming nothing is left alone, because what to open in then is each app's own choice.";
  arguments_assert(arguments, 0);
  let hash = html_hash_object_get();
  let key = app_shared_bible_language_hash_key();
  let named = property_get_or(hash, key, "");
  if (text_empty_is(named)) {
    return;
  }
  let codes = app_shared_bible_hash_to_languages_chosen_or(hash, named);
  let current = list_join_plus(codes);
  if (equal(current, named)) {
    return;
  }
  html_hash_property_set(key, current);
}
