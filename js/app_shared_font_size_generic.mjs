import { app_shared_font_size_key } from "./app_shared_font_size_key.mjs";
import { storage_local_initialize_context } from "./storage_local_initialize_context.mjs";
export function app_shared_font_size_generic(context, value_default) {
  "the size this reader chose for this app, or the size the app opens at when they have never chosen one. one place holds the stored word, so every app spells it the same and a reader's choice is never filed under two names";
  "the starting size is asked for rather than fixed here, because apps do not all read at the same scale: a reading app sets its text directly, while the game renders its words through a 1.2em token and so starts from a smaller root to land in the same place";
  let key = app_shared_font_size_key();
  let value = storage_local_initialize_context(context, key, value_default);
  return value;
}
