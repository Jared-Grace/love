import { app_shared_bible_hash_languages_transform_reload } from "./app_shared_bible_hash_languages_transform_reload.mjs";
import { list_filter_equal_not } from "./list_filter_equal_not.mjs";
export function app_shared_bible_language_drop_reload(code) {
  "Takes one language code out of the link and opens the page again - the way on for a reader when none of the offered corrections is what they meant.";
  "There is always this to press, even when nothing is spelled like what the link says, so a reader is never left on a page whose only choices are wrong.";
  function lambda$codes(codes) {
    let after = list_filter_equal_not(codes, code);
    return after;
  }
  app_shared_bible_hash_languages_transform_reload(lambda$codes);
}
