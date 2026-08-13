import { app_shared_bible_hash_fields } from "./app_shared_bible_hash_fields.mjs";
import { app_shared_hash_fields_unknown_shown_is } from "./app_shared_hash_fields_unknown_shown_is.mjs";
export function app_shared_bible_hash_unknown_shown_is(parent, hash) {
  "The one line every bible page puts in front of its own work: did the link say anything a bible page cannot make sense of, and has the reader been shown so? A page that hears yes has nothing left to do and should stop.";
  let fields = app_shared_bible_hash_fields();
  let shown = app_shared_hash_fields_unknown_shown_is(parent, hash, fields);
  return shown;
}
