import { emoji_book_open } from "./emoji_book_open.mjs";
import { text_combine_middle_space } from "./text_combine_middle_space.mjs";
import { list_first_property } from "./list_first_property.mjs";
import { ebible_languages_from_codes } from "./ebible_languages_from_codes.mjs";
import { list_reverse } from "./list_reverse.mjs";
import { list_first } from "./list_first.mjs";
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
  let chapter_code = list_first_property(run, "chapter_code");
  ("Only the verses lying in the chapter the reading starts in are named, because the reader shows one chapter at a time. A passage carried on into the next chapter opens at the chapter it began in, which is where somebody reading it was.");
  let same = list_filter_property(run, "chapter_code", chapter_code);
  let property_name = verse_number_key();
  let numbers = list_map_property(same, property_name);
  let number_first = list_first(numbers);
  let number_last = list_last(numbers);
  let single = equal(number_first, number_last);
  let endpoints = single ? [number_first] : [number_first, number_last];
  let selection = list_join(endpoints, "-");
  ("An open book in front of it, the same sign the reader itself puts on the way into a whole chapter, so the two pages point at the bible with the same picture.");
  let sign = emoji_book_open();
  let text = text_combine_middle_space(sign, "Open passage in Bible");
  function lambda() {
    let hash = html_hash_object_get();
    ("A link names its languages by their short codes, and the reader is opened with the languages themselves - so the codes are looked up rather than handed on as they are. A code naming no language we have is dropped on the way, which is what lets a link written before a bible was retired still open.");
    let codes = app_shared_bible_hash_to_languages_chosen(hash);
    let languages_chosen = ebible_languages_from_codes(codes);
    ("A link keeps the language read down the middle last, and a chosen list keeps it first, so the one turns into the other by being turned round. Handed over the way it arrived, the link out of here would name the same languages in the other order and quietly swap which one the reader reads by.");
    list_reverse(languages_chosen);
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
