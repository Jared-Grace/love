import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { storage_local_name_get } from "./storage_local_name_get.mjs";
import { app_shared_font_size_default } from "./app_shared_font_size_default.mjs";
import { null_is } from "./null_is.mjs";
export function app_shared_bible_font_size() {
  "The text size this reader last chose in the bible reader, or the size a reading app opens at when they have never chosen one.";
  "It is asked for by the reader's name rather than by handing over the reader itself, because a page that shows one verse and offers the bible as the way onward would otherwise carry the whole of that reader in its own bundle to learn one number.";
  "Somebody who made the text bigger did not make it bigger in the bible, they made it bigger because that is the size they can read. A page sent to them out of the same scripture opening at a size they already turned down is the page telling them it is not part of what they were reading.";
  "Nothing is written back. This page offers no way to change the size, so a size written from here would be a page they passed through quietly deciding what the bible opens at next time.";
  arguments_assert(arguments, 0);
  let app_fn_name = fn_name("app_bible");
  let key = app_shared_font_size_key();
  let stored = storage_local_name_get(app_fn_name, key);
  let never = null_is(stored);
  if (never) {
    let value = app_shared_font_size_default();
    return value;
  }
  return stored;
}
