import { window_open_app } from "./window_open_app.mjs";
import { property_set } from "./property_set.mjs";
import { app_shared_bible_mode_hash_key } from "./app_shared_bible_mode_hash_key.mjs";
import { fn_name } from "./fn_name.mjs";
import { list_join_plus } from "./list_join_plus.mjs";
import { list_reverse } from "./list_reverse.mjs";
import { list_map_property } from "./list_map_property.mjs";
export function app_shared_bible_open(
  languages_chosen,
  chapter_code,
  verse_number,
  mode,
) {
  "the caller names the reader to land in, so a link can hand someone the whole chapter or the single verse";
  let mapped4 = list_map_property(languages_chosen, "language_code");
  list_reverse(mapped4);
  let joined = list_join_plus(mapped4);
  let hash = {
    c: chapter_code,
    v: verse_number,
    l: joined,
  };
  property_set(hash, app_shared_bible_mode_hash_key(), mode);
  window_open_app(fn_name("app_bible"), hash);
}
