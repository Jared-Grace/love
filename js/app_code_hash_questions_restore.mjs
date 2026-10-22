import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_questions_hash_key } from "./app_code_questions_hash_key.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { app_code_questions_max_key } from "./app_code_questions_max_key.mjs";
import { storage_session_set_context } from "./storage_session_set_context.mjs";
export function app_code_hash_questions_restore(context, hash) {
  arguments_assert(arguments, 2);
  ("Take the most questions named in the address and keep it in this tab before anything is drawn, so the review or milestone that opens asks no more than that.");
  let word = app_code_questions_hash_key();
  let said = property_get_or_null(hash, word);
  let present = null_not_is(said);
  if (present) {
    let key = app_code_questions_max_key();
    let counted = Number(said);
    storage_session_set_context(context, key, counted);
  }
}
