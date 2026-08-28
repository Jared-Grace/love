import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { emoji_book_open } from "./emoji_book_open.mjs";
import { text_combine_middle_space } from "./text_combine_middle_space.mjs";
import { app_shared_bible_languages_chosen_get } from "./app_shared_bible_languages_chosen_get.mjs";
import { app_shared_bible_mode_chapter } from "./app_shared_bible_mode_chapter.mjs";
import { app_shared_bible_open_generic } from "./app_shared_bible_open_generic.mjs";
import { window_open_app } from "./window_open_app.mjs";
import { app_shared_button } from "./app_shared_button.mjs";
import { app_shared_button_gap_above } from "./app_shared_button_gap_above.mjs";
export function app_emoji_bible_words_button(parent, chapter_code) {
  arguments_assert(arguments, 2);
  ("$plain chapter_code");
  ("The way from a chapter of the picture Bible to the same chapter in the bible reader next door, in words.");
  ("IT COSTS NOTHING TO BUILD BECAUSE THE TWO APPS ALREADY NAME A CHAPTER THE SAME WAY. ",
    fn_name("app_shared_bible_pictures_chapter_hash"),
    " spells the reader's own key rather than one of its own, so the code being read here is already the code the reader opens at, and there is nothing to translate between them.");
  ("IT IS NOT THE KEY UNDER EVERY VERSE AND DOES NOT REPLACE IT. The key teaches: it prints the original line and a word for word English under the pictures, so a reader works the pictures out. This is for the reader who has finished and wants to go on reading scripture, and that is the other app's whole job rather than something to grow here.");
  ("It opens beside this page rather than instead of it, for the reason ",
    fn_name("app_next_bible_button"),
    " opens beside its own: the reader writes its own words into the address as it settles, so pressing back walks through the reader's arrivals and never reaches the chapter that sent you.");
  ("The languages are whatever the address names, which here is nothing, so the reader opens in English. That is honest rather than a decision: a page whose reason for existing is that it needs no language has no language of its own to hand over, and a reader who wants another one has that choice waiting in the app being opened.");
  ("At the foot of the chapter and not in the bar, because it is the thing to do AFTER reading rather than a control over what is being read. Everything in the bar changes what this page shows; this leaves it.");
  let sign = emoji_book_open();
  let text = text_combine_middle_space(sign, "Read this chapter in words");
  function lambda() {
    let mode = app_shared_bible_mode_chapter();
    let whole = "";
    app_shared_bible_open_hash_languages(chapter_code, whole, mode);
  }
  let component = app_shared_button(parent, text, lambda);
  app_shared_button_gap_above(component);
  return component;
}
