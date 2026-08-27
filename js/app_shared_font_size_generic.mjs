import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_font_size_key_factor } from "./app_shared_font_size_key_factor.mjs";
import { storage_local_get_context } from "./storage_local_get_context.mjs";
import { not } from "./not.mjs";
import { null_is } from "./null_is.mjs";
import { app_shared_font_size_key } from "./app_shared_font_size_key.mjs";
import { app_shared_font_size_stored_migrate } from "./app_shared_font_size_stored_migrate.mjs";
import { storage_local_set_context } from "./storage_local_set_context.mjs";
export function app_shared_font_size_generic(context, value_default) {
  "the size this reader chose for this app, or the size the app opens at when they have never chosen one, as a multiple of the size their own browser is set to. one place holds the stored word, so every app spells it the same and a reader's choice is never filed under two names";
  "the starting size is asked for rather than fixed here, because the caller may be answering for a page whose reader settled the size somewhere else";
  "a reader who has nothing filed under the factor's word is carried across from the old scheme's word once, and the answer is written back under the new one. after that the old word is never read again, so the two can never disagree about what this reader chose";
  arguments_assert(arguments, 2);
  let key = app_shared_font_size_key_factor();
  let chosen = storage_local_get_context(context, key);
  let b = null_is(chosen);
  let known = not(b);
  if (known) {
    return chosen;
  }
  let key_pixels = app_shared_font_size_key();
  let pixels = storage_local_get_context(context, key_pixels);
  let value = app_shared_font_size_stored_migrate(pixels, value_default);
  storage_local_set_context(context, key, value);
  return value;
}
