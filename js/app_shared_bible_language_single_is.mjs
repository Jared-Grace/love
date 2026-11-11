import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_bible_language_single_key } from "./app_shared_bible_language_single_key.mjs";
import { property_get_or } from "./property_get_or.mjs";
export function app_shared_bible_language_single_is(context) {
  "Whether this app lets its reader choose only one language at a time.";
  "Saying nothing means several, which is how every bible reader here has always behaved, so an app that never mentions the matter is unchanged by this existing. An app that explains every word in the reader's own language can only explain in one of them, so it says so.";
  arguments_assert(arguments, 1);
  let key = app_shared_bible_language_single_key();
  let single = property_get_or(context, key, false);
  return single;
}
