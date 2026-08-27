import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_font_size } from "./app_shared_font_size.mjs";
import { app_shared_font_size_key_factor } from "./app_shared_font_size_key_factor.mjs";
import { storage_local_set_context } from "./storage_local_set_context.mjs";
import { app_shared_font_size_refresh } from "./app_shared_font_size_refresh.mjs";
export async function app_shared_font_size_adjust(context, value_get) {
  "Move this app's text size by the caller's step and put the page on the new size at once.";
  "What is written is the factor's word, never the older one that held a count of pixels. A press that wrote back to the old word would be read next time as a size from the old scheme and carried through the migration a second time, which divides it by 16 - so the reader who pressed larger would open smaller.";
  arguments_assert(arguments, 2);
  let value = await app_shared_font_size(context);
  value = value_get(value);
  let key = app_shared_font_size_key_factor();
  storage_local_set_context(context, key, value);
  app_shared_font_size_refresh(context);
}
