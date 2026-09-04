import { app_shared_bible_font_size } from "./app_shared_bible_font_size.mjs";
import { app_shared_mobile_default_font_size_generic } from "./app_shared_mobile_default_font_size_generic.mjs";
import { app_emoji_bible_settings_button } from "./app_emoji_bible_settings_button.mjs";
import { fn_name } from "./fn_name.mjs";
import { app_shared_app_fn_set } from "./app_shared_app_fn_set.mjs";
import { html_clear_context } from "./html_clear_context.mjs";
import { app_shared_bar_content_root_sticky_padded } from "./app_shared_bar_content_root_sticky_padded.mjs";
import { property_get } from "./property_get.mjs";
import { bible_glyph_chapter_references } from "./bible_glyph_chapter_references.mjs";
import { app_emoji_bible_chapter_chosen } from "./app_emoji_bible_chapter_chosen.mjs";
import { null_is } from "./null_is.mjs";
import { html_div_text_bold } from "./html_div_text_bold.mjs";
import { app_emoji_bible_chapter_index } from "./app_emoji_bible_chapter_index.mjs";
import { app_shared_footer } from "./app_shared_footer.mjs";
import { app_emoji_bible_chapter_bar } from "./app_emoji_bible_chapter_bar.mjs";
import { app_emoji_bible_tradition_get } from "./app_emoji_bible_tradition_get.mjs";
import { app_emoji_bible_tradition_toggle } from "./app_emoji_bible_tradition_toggle.mjs";
import { app_emoji_bible_tradition_button_text } from "./app_emoji_bible_tradition_button_text.mjs";
import { app_shared_button } from "./app_shared_button.mjs";
import { app_emoji_bible_key_shown_get } from "./app_emoji_bible_key_shown_get.mjs";
import { app_emoji_bible_key_shown_toggle } from "./app_emoji_bible_key_shown_toggle.mjs";
import { app_emoji_bible_key_shown_button_text } from "./app_emoji_bible_key_shown_button_text.mjs";
import { app_emoji_bible_traditions } from "./app_emoji_bible_traditions.mjs";
import { app_emoji_bible_chapter_body } from "./app_emoji_bible_chapter_body.mjs";
import { app_emoji_bible_words_button } from "./app_emoji_bible_words_button.mjs";
export async function app_emoji_bible(context) {
  "The picture Bible as a page: one chapter at a time, drawn with its pictures in place of its words, and a list of every chapter written so far to reach them by.";
  "THE PAGE READS ONE CHAPTER AT A TIME AND FINDS IT BY THE SAME WORD THE BIBLE READER NEXT DOOR USES. That word is taken from the reader's own key rather than spelled again here, so a link naming a chapter opens that chapter in either app, and the day the pictures become a version somebody picks inside the reader every link anybody saved goes on working.";
  "The whole Bible used to be poured onto one page, which was right while there was one chapter and had become wrong at twenty five. A picker costs the reader a tap; a page of twenty five chapters costs them the whole scroll every time they want the second one, and costs them any way at all of sending somebody a single chapter.";
  "THE PAGE CARRIES THE LIST OF CHAPTERS AND NOT THE CHAPTERS, which is why what is asked for here is the references and never the whole Bible. It was carrying all twenty five however few were read, and that was measured on the twenty eighth of August rather than guessed: the twenty five chapter files were four hundred and forty KiB of source inside a bundle of five hundred and thirty two, so about five sixths of what a visitor downloaded was Bible they did not open, and somebody who landed on the index and read nothing paid all of it. The chapters, their written-out keys and the whole Tagalog were all moved behind a fetch on the same day, and the page a visitor first downloads went from five hundred and forty one thousand bytes to eighty five thousand. The third of those was found only by weighing what the page could reach, function by function, after the other two were already fixed and the page looked done - which is why there is now a gate rather than a habit.";
  "THE LIST IS FIFTY SHORT WORDS STANDING IN FOR THAT, and it holds exactly what every screen short of a chapter needs - the code a link spells and the reference a person reads. The index, the bar with its arrows, and the deciding of which chapter the address names all work from those two and touch no verse, so a chapter is sent for at the one moment a chapter is actually going to be drawn.";
  "It is already in canon order and is not sorted again here. The order is the order it is written in, and it is a gate rather than a habit that keeps it so.";
  ("It is not given a ceiling in ",
    fn_name("bundle_size_ceilings"),
    ", and that file's own prose says why: a ceiling has to be raised on every honest growth, and this page used to grow by twenty KiB every time a chapter was written. THAT REASON HAS JUST STOPPED BEING TRUE - the page now grows by one line per chapter - so a ceiling has become affordable here for the first time, and that is a thing to decide rather than a thing done in passing. ",
    fn_name("bundle_size_step_gate_run"),
    " already watches it and refuses a tree arriving all at once, which is the thing a ceiling was ever wanted for.");
  ("The way out of a chapter is the bar the bible reader already teaches - an arrow to each side and the reference in the middle, which goes back to the list. The arrows are that reader's own, so a reader who has used the other app has already learned this one.");
  ("There is no language setting and there is nothing to translate, which is the entire point of the app: a reader who has never met English still meets the heart, the fire and the seed. What English is left on the page is the grammar, and that is the honest state of the project rather than a decision that has been made.");
  ("The page opens at the size the reader already chose in the bible reader next door, because a picture Bible is read the way scripture is read and a person who made the words bigger there did not mean only there. THAT IS WHERE THE PAGE STARTS AND NOT WHERE IT STAYS. The size chosen next door is written down as this page's own the first time a reader arrives, and the gear on the bar changes this page and nothing else from then on - so a reader who wants the pictures larger than the words gets that, and a page nobody has been to still opens at a size they have already agreed to.");
  ("The reader chooses how the cross is drawn, and nothing about any verse changes when they do. A verse names glyphs and never characters, so an Orthodox reader and a Western reader are reading the same stored Bible drawn two ways - which is the whole reason the vocabulary and the verses were separated in the first place.");
  ("The page is drawn again from the top when that choice changes, rather than the crosses already on the screen being hunted down and swapped. Drawing it again is one call and cannot miss one; hunting them down is a search that silently leaves behind any cross reached by a path nobody thought of.");
  ("The reader may put a KEY under every verse, and the key is where the pictures are actually taught. Under the pictures go the same verse in the language it was written in and the same verse word for word in English, and NOBODY IS TOLD WHAT ANY PICTURE MEANS anywhere on the page. A reader who knows one of the two known lines works the pictures out from it, which is how the Rosetta stone was read - and everyone who does that arrives at the same meanings, because a picture is keyed to the original word rather than to anybody's translation.");
  ("The key opens DOWN. The picture Bible is the thing being offered, and a page that printed the English under every verse before being asked would have quietly become an English Bible with pictures over it - which is the exact failure this whole project exists to avoid.");
  ("THE VERSES ARE DRAWN AS ARTWORK RATHER THAN AS EMOJI CHARACTERS, and a reader who has been here before will see the same Bible drawn by this project instead of by their phone. The emoji are still underneath every picture and appear the moment one fails to arrive, so a glyph nobody has drawn yet costs nothing and a phone too old to know a character never has to draw it at all. That last one is not a nicety: several of these characters were added to the standard in the last few years, and the phone this Bible is for is the cheap one.");
  ("Both of the reader's two choices sit in the bar of the chapter they are reading and nowhere on the list, because neither of them changes anything a list shows. A control that does nothing where it is drawn teaches the reader it does nothing anywhere.");
  app_shared_app_fn_set(context, app_emoji_bible);
  html_clear_context(context);
  let value_default = app_shared_bible_font_size();
  let root = app_shared_mobile_default_font_size_generic(
    context,
    value_default,
  );
  let frame = app_shared_bar_content_root_sticky_padded(root);
  let bar = property_get(frame, "bar");
  let content = property_get(frame, "content");
  let chapters = bible_glyph_chapter_references();
  let chosen = app_emoji_bible_chapter_chosen(chapters);
  let index_shown = null_is(chosen);
  if (index_shown) {
    html_div_text_bold(bar, "The Bible in pictures");
    app_emoji_bible_settings_button(bar, context);
    app_emoji_bible_chapter_index(content, chapters);
    app_shared_footer(content);
    return;
  }
  app_emoji_bible_chapter_bar(bar, chapters, chosen);
  let tradition = app_emoji_bible_tradition_get();
  async function lambda_tradition() {
    app_emoji_bible_tradition_toggle();
    await app_emoji_bible(context);
  }
  let button_text = app_emoji_bible_tradition_button_text(tradition);
  app_shared_button(bar, button_text, lambda_tradition);
  let key_shown = app_emoji_bible_key_shown_get();
  async function lambda_key() {
    app_emoji_bible_key_shown_toggle();
    await app_emoji_bible(context);
  }
  let key_text = app_emoji_bible_key_shown_button_text(key_shown);
  app_shared_button(bar, key_text, lambda_key);
  app_emoji_bible_settings_button(bar, context);
  let traditions = app_emoji_bible_traditions(tradition);
  let chapter_code = property_get(chosen, "chapter_code");
  await app_emoji_bible_chapter_body(
    content,
    chapter_code,
    traditions,
    key_shown,
  );
  app_emoji_bible_words_button(content, chapter_code);
  app_shared_footer(content);
}
