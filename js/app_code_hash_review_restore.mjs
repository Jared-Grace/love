import { app_code_review_hash_key } from "./app_code_review_hash_key.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { number_from_text } from "./number_from_text.mjs";
import { app_code_review_number_key } from "./app_code_review_number_key.mjs";
import { storage_session_set_context } from "./storage_session_set_context.mjs";
export function app_code_hash_review_restore(context, hash) {
  "Take the review named in the address and write it into this tab before anything is drawn, so the screen that opens is the checkpoint the link asked for.";
  "It is kept as a number rather than as the word the address spells it with, because everything downstream compares it against lesson numbers and a word never equals one of those - the comparison simply comes out no, and the reader is handed the fallback with nothing said.";
  let word = app_code_review_hash_key();
  let said = property_get_or_null(hash, word);
  let present = null_not_is(said);
  if (present) {
    let counted = number_from_text(said);
    let key = app_code_review_number_key();
    storage_session_set_context(context, key, counted);
  }
}
