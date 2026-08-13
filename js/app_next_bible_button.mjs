import { list_first } from "./list_first.mjs";
import { property_get } from "./property_get.mjs";
import { list_filter_property } from "./list_filter_property.mjs";
import { verse_number_key } from "./verse_number_key.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { list_last } from "./list_last.mjs";
import { equal } from "./equal.mjs";
import { list_join } from "./list_join.mjs";
import { html_hash_object_get } from "./html_hash_object_get.mjs";
import { app_shared_bible_hash_to_languages_chosen } from "./app_shared_bible_hash_to_languages_chosen.mjs";
import { app_shared_bible_mode_chapter } from "./app_shared_bible_mode_chapter.mjs";
import { app_shared_bible_open_generic } from "./app_shared_bible_open_generic.mjs";
import { window_go_app } from "./window_go_app.mjs";
import { app_shared_button } from "./app_shared_button.mjs";
export function app_next_bible_button(parent, run) {
  "The way from a verse somebody was sent into the bible it came out of, opened at the same place and in the same languages, with the verses that were shown here already picked out there.";
  "This page hands the reading over rather than growing a reader of its own. Two pages that both show scripture are two places to mend everything about showing scripture, and somebody who wants to keep reading is better served by the one that was built for it.";
  "It goes there in the tab that is already open, so the browser's own back button is the way back to what they were sent - a second tab is one more thing to close, and on a phone that is the expensive kind of one more thing.";
  let run_first = list_first(run);
  let chapter_code = property_get(run_first, "chapter_code");
  ("Only the verses lying in the chapter the reading starts in are named, because the reader shows one chapter at a time. A passage carried on into the next chapter opens at the chapter it began in, which is where somebody reading it was.");
  let same = list_filter_property(run, "chapter_code", chapter_code);
  let property_name = verse_number_key();
  let numbers = list_map_property(same, property_name);
  let number_first = list_first(numbers);
  let number_last = list_last(numbers);
  let single = equal(number_first, number_last);
  let endpoints = single ? [number_first] : [number_first, number_last];
  let selection = list_join(endpoints, "-");
  let text = "Read in the Bible";
  function lambda() {
    let hash = html_hash_object_get();
    let languages_chosen = app_shared_bible_hash_to_languages_chosen(hash);
    let mode = app_shared_bible_mode_chapter();
    app_shared_bible_open_generic(
      window_go_app,
      languages_chosen,
      chapter_code,
      selection,
      mode,
    );
  }
  let component = app_shared_button(parent, text, lambda);
  return component;
}
