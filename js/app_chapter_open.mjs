import { app_chapter } from "./app_chapter.mjs";
import { window_open_app_fn } from "./window_open_app_fn.mjs";
import { list_join_plus } from "./list_join_plus.mjs";
import { list_reverse } from "./list_reverse.mjs";
import { list_map_property } from "./list_map_property.mjs";
export function app_chapter_open(languages_chosen, chapter_code, verse_number) {
  let mapped4 = list_map_property(languages_chosen, "language_code");
  list_reverse(mapped4);
  let joined = list_join_plus(mapped4);
  window_open_app_fn(app_chapter, {
    c: chapter_code,
    v: verse_number,
    l: joined,
  });
}
