import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_bible_home_generic_unknown_shown } from "./app_shared_bible_home_generic_unknown_shown.mjs";
import { property_get } from "./property_get.mjs";
export function app_shared_bible_home_generic_hash(content) {
  arguments_assert(arguments, 1);
  let r3 = app_shared_bible_home_generic_unknown_shown(content);
  let unknown_shown = property_get(r3, "unknown_shown");
  let hash = property_get(r3, "hash");
  return {
    unknown_shown,
    hash,
  };
}
