import { app_shared_font_size_key } from "./app_shared_font_size_key.mjs";
import { storage_local_initialize_context } from "./storage_local_initialize_context.mjs";
import { app_shared_font_size_stored_migrate } from "./app_shared_font_size_stored_migrate.mjs";
export function app_shared_font_size_generic(context, value_default) {
  "the size this reader chose for this app, or the size the app opens at when they have never chosen one. one place holds the stored word, so every app spells it the same and a reader's choice is never filed under two names";
  "the starting size is asked for rather than fixed here, because the caller may be answering for a page whose reader settled the size somewhere else";
  "what comes back out of storage is put through the migration on the way past, because devices that opened a page under the old scheme have a count of pixels sitting under this same word and reading one as a factor would set the page to twenty times the size";
  let key = app_shared_font_size_key();
  let stored = storage_local_initialize_context(context, key, value_default);
  let value = app_shared_font_size_stored_migrate(stored);
  return value;
}
