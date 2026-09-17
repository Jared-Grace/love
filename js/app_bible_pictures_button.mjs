import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { emoji_picture_frame } from "./emoji_picture_frame.mjs";
import { text_combine_middle_space } from "./text_combine_middle_space.mjs";
import { app_shared_bible_pictures_chapter_hash } from "./app_shared_bible_pictures_chapter_hash.mjs";
import { window_open_app_hash_name } from "./window_open_app_hash_name.mjs";
import { app_shared_button } from "./app_shared_button.mjs";
export function app_bible_pictures_button(parent, chapter_code) {
  arguments_assert(arguments, 2);
  ("The way from a chapter of the ordinary Bible into the same chapter of the picture Bible.");
  ("$plain chapter_code");
  ("IT STANDS ON EVERY CHAPTER, BECAUSE EVERY CHAPTER IS IN PICTURES. It was drawn only on the chapters written by hand while those were a few hundred of the canon, since a button on every chapter would have been a promise the rest could not keep. The picture Bible is now built from the interlinear for the whole canon, so there is no chapter left where it would lead nowhere, and asking would only cost a list.");
  ("IT IS HANDED THE CHAPTER RATHER THAN READING ONE, because the two screens that draw it know which chapter they are showing by different routes: the verse screen has only the address, and the whole-chapter screen may have followed a reference the address never spelled. A unit that read the address itself would be right on one screen and quietly wrong on the other.");
  ("It opens beside this page rather than instead of it, for the reason ",
    fn_name("app_next_bible_button"),
    " gives: the reader rewrites its own address as it settles, so the back button walks through those arrivals and never reaches where somebody started.");
  ("It hands back what it drew, so a caller can space it.");
  let sign = emoji_picture_frame();
  let text = text_combine_middle_space(sign, "In pictures");
  function lambda() {
    let chapter_hash = app_shared_bible_pictures_chapter_hash(chapter_code);
    let app_fn_name = fn_name("app_emoji_bible");
    window_open_app_hash_name(app_fn_name, chapter_hash);
  }
  let component = app_shared_button(parent, text, lambda);
  return component;
}
