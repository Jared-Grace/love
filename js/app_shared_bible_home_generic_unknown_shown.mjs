import { arguments_assert } from "./arguments_assert.mjs";
import { html_hash_object_get } from "./html_hash_object_get.mjs";
import { app_shared_bible_hash_unknown_shown_is } from "./app_shared_bible_hash_unknown_shown_is.mjs";
export function app_shared_bible_home_generic_unknown_shown(content) {
  arguments_assert(arguments, 1);
  let hash = html_hash_object_get();
  ("The same answer the chapter reader gives to a language code naming no bible we have, from the same function, so the two readers do not disagree about what a wrong link means.");
  let unknown_shown = app_shared_bible_hash_unknown_shown_is(content, hash);
  let r = {
    hash,
    unknown_shown,
  };
  return r;
}
