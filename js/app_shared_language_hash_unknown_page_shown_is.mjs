import { app_shared_bible_hash_field_language } from "./app_shared_bible_hash_field_language.mjs";
import { app_shared_hash_fields_unknown_page_shown_is } from "./app_shared_hash_fields_unknown_page_shown_is.mjs";
export function app_shared_language_hash_unknown_page_shown_is(context, hash) {
  "What a page whose link names languages and nothing else puts in front of its own work: did the link name a language we do not have, and has the reader been told so and offered the near ones.";
  "It asks about the language alone, unlike the bible pages, because these pages read nothing else out of the link. A page that complained about a chapter it was never going to open would be telling the reader to fix something that was doing no harm, and the reader has no way to know which of the two of us is confused.";
  let language = app_shared_bible_hash_field_language();
  let fields = [language];
  let shown = app_shared_hash_fields_unknown_page_shown_is(
    context,
    hash,
    fields,
  );
  return shown;
}
