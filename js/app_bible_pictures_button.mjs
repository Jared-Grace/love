import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { bible_glyph_chapter_codes } from "./bible_glyph_chapter_codes.mjs";
import { list_includes } from "./list_includes.mjs";
import { emoji_picture_frame } from "./emoji_picture_frame.mjs";
import { text_combine_middle_space } from "./text_combine_middle_space.mjs";
import { app_shared_bible_pictures_chapter_hash } from "./app_shared_bible_pictures_chapter_hash.mjs";
import { window_open_app } from "./window_open_app.mjs";
import { app_shared_button } from "./app_shared_button.mjs";
export function app_bible_pictures_button(parent, chapter_code) {
  arguments_assert(arguments, 2);
  ("The way from a chapter of the ordinary Bible into the same chapter of the picture Bible, drawn only when that chapter has been drawn.");
  ("$plain chapter_code");
  ("IT IS DRAWN ONLY WHERE IT LEADS SOMEWHERE. Twenty five chapters of this Bible are in pictures and the rest are not, so a button standing on every chapter would be a promise the other thousand chapters cannot keep. A reader who meets it in Psalm twenty three and not in Psalm twenty four has been told something true about how far this work has got.");
  ("IT ASKS A LIST OF TWENTY FIVE WORDS RATHER THAN THE PICTURE BIBLE ITSELF. ",
    fn_name("bible_glyph_chapters"),
    " carries every verse of every drawn chapter - four hundred and forty KiB of them, measured on the twenty eighth of August - and importing it here to ask one yes or no question would hand that whole weight to every reader of the ordinary Bible, most of whom never press this. ",
    fn_name("bible_glyph_chapter_codes"),
    " answers the same question for nothing, and ",
    fn_name("bible_glyph_chapter_codes_gate_run"),
    " is what keeps the cheap answer the true one.");
  ("IT IS HANDED THE CHAPTER RATHER THAN READING ONE, because the two screens that draw it know which chapter they are showing by different routes: the verse screen has only the address, and the whole-chapter screen may have followed a reference the address never spelled. A unit that read the address itself would be right on one screen and quietly wrong on the other.");
  ("It opens beside this page rather than instead of it, for the reason ",
    fn_name("app_next_bible_button"),
    " gives: the reader rewrites its own address as it settles, so the back button walks through those arrivals and never reaches where somebody started.");
  ("It hands back what it drew, or nothing when it drew nothing, so a caller can space it without asking the same question over again.");
  let codes = bible_glyph_chapter_codes();
  let drawn = list_includes(codes, chapter_code);
  if (drawn) {
    let sign = emoji_picture_frame();
    let text = text_combine_middle_space(sign, "In pictures");
    function lambda() {
      let chapter_hash = app_shared_bible_pictures_chapter_hash(chapter_code);
      let app_fn_name = fn_name("app_emoji_bible");
      window_open_app(app_fn_name, chapter_hash);
    }
    let component = app_shared_button(parent, text, lambda);
    return component;
  }
  let none = null;
  return none;
}
