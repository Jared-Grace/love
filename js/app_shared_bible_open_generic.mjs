import { list_map_property } from "./list_map_property.mjs";
import { language_code_key } from "./language_code_key.mjs";
import { list_reverse } from "./list_reverse.mjs";
import { list_join_plus } from "./list_join_plus.mjs";
import { property_set } from "./property_set.mjs";
import { app_shared_bible_mode_hash_key } from "./app_shared_bible_mode_hash_key.mjs";
import { fn_name } from "./fn_name.mjs";
export function app_shared_bible_open_generic(
  open_fn,
  languages_chosen,
  chapter_code,
  verse,
  mode,
) {
  "The bible reader opened at one place in it: the caller names the reader to land in, the languages to read it in, and how to get there - beside what is open now, or instead of it.";
  "The verse is whatever a link may say there, so one verse or the two ends of a passage both come this way.";
  let property_name = language_code_key();
  let mapped = list_map_property(languages_chosen, property_name);
  list_reverse(mapped);
  let joined = list_join_plus(mapped);
  let hash = {
    c: chapter_code,
    v: verse,
    l: joined,
  };
  let property_name2 = app_shared_bible_mode_hash_key();
  property_set(hash, property_name2, mode);
  let f_name = fn_name("app_bible");
  open_fn(f_name, hash);
}
