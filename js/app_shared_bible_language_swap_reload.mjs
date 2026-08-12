import { app_shared_bible_hash_languages_transform_reload } from "./app_shared_bible_hash_languages_transform_reload.mjs";
import { list_equal_swapped } from "./list_equal_swapped.mjs";
export function app_shared_bible_language_swap_reload(code_before, code_after) {
  "Puts one language code in the link where another stood, and opens the page again - what a reader presses to accept a correction that was offered to them.";
  function lambda$codes(codes) {
    let after = list_equal_swapped(codes, code_before, code_after);
    return after;
  }
  app_shared_bible_hash_languages_transform_reload(lambda$codes);
}
