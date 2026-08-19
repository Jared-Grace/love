import { app_shared_bar_content_root_sticky_padded } from "./app_shared_bar_content_root_sticky_padded.mjs";
import { app_emoji_bible_key_shown_get } from "./app_emoji_bible_key_shown_get.mjs";
import { app_emoji_bible_key_shown_toggle } from "./app_emoji_bible_key_shown_toggle.mjs";
import { app_emoji_bible_key_shown_button_text } from "./app_emoji_bible_key_shown_button_text.mjs";
import { bible_glyph_chapter_rosetta_verses } from "./bible_glyph_chapter_rosetta_verses.mjs";
import { app_emoji_bible_verse_key_draw } from "./app_emoji_bible_verse_key_draw.mjs";
import { app_emoji_bible_tradition_get } from "./app_emoji_bible_tradition_get.mjs";
import { app_emoji_bible_tradition_toggle } from "./app_emoji_bible_tradition_toggle.mjs";
import { app_emoji_bible_tradition_button_text } from "./app_emoji_bible_tradition_button_text.mjs";
import { app_shared_button } from "./app_shared_button.mjs";
import { app_emoji_bible_traditions } from "./app_emoji_bible_traditions.mjs";
import { app_shared_mobile_default_bible_font_size } from "./app_shared_mobile_default_bible_font_size.mjs";
import { app_shared_app_fn_set } from "./app_shared_app_fn_set.mjs";
import { bible_glyph_chapter_draw_html } from "./bible_glyph_chapter_draw_html.mjs";
import { bible_glyph_chapters } from "./bible_glyph_chapters.mjs";
import { html_clear_context } from "./html_clear_context.mjs";
import { html_div_text_bold } from "./html_div_text_bold.mjs";
import { property_get } from "./property_get.mjs";
export async function app_emoji_bible(context) {
  "The picture Bible as a page: every chapter written so far, drawn with its pictures in place of its words.";
  "The page shows EVERY authored chapter at once rather than asking the reader to pick one, and that is right while there is one chapter and wrong once there are fifty. A picker is what the reader needs when choosing costs them something; today choosing would cost them a tap to see the only thing there is. The moment a second book appears this grows the same book and chapter picker every other bible app here already shares.";
  "There is no language setting and there is nothing to translate, which is the entire point of the app: a reader who has never met English still meets the heart, the fire and the seed. What English is left on the page is the grammar, and that is the honest state of the project rather than a decision that has been made.";
  "The page opens at the size the reader already chose in the bible reader next door, because a picture Bible is read the way scripture is read and a person who made the words bigger there did not mean only there. There is no size control of its own here yet, so borrowing theirs is the only size the page could honestly open at.";
  "The reader chooses how the cross is drawn, and nothing about any verse changes when they do. A verse names glyphs and never characters, so an Orthodox reader and a Western reader are reading the same stored Bible drawn two ways - which is the whole reason the vocabulary and the verses were separated in the first place.";
  "The page is drawn again from the top when that choice changes, rather than the crosses already on the screen being hunted down and swapped. Drawing it again is one call and cannot miss one; hunting them down is a search that silently leaves behind any cross reached by a path nobody thought of.";
  "The reader may put a KEY under every verse, and the key is where the pictures are actually taught. Under the pictures go the same verse in the language it was written in and the same verse word for word in English, and NOBODY IS TOLD WHAT ANY PICTURE MEANS anywhere on the page. A reader who knows one of the two known lines works the pictures out from it, which is how the Rosetta stone was read - and everyone who does that arrives at the same meanings, because a picture is keyed to the original word rather than to anybody's translation.";
  "The key opens DOWN. The picture Bible is the thing being offered, and a page that printed the English under every verse before being asked would have quietly become an English Bible with pictures over it - which is the exact failure this whole project exists to avoid.";
  "THE VERSES ARE DRAWN AS ARTWORK RATHER THAN AS EMOJI CHARACTERS, and a reader who has been here before will see the same Bible drawn by this project instead of by their phone. The emoji are still underneath every picture and appear the moment one fails to arrive, so a glyph nobody has drawn yet costs nothing and a phone too old to know a character never has to draw it at all. That last one is not a nicety: several of these characters were added to the standard in the last few years, and the phone this Bible is for is the cheap one.";
  "A verse the picture chapter has not reached yet has no key, because the key is built by matching the hand-written chapter against the downloaded interlinear verse by verse. Half-written chapters are the normal state of this work and must not stop the verses that ARE written from being read.";
  app_shared_app_fn_set(context, app_emoji_bible);
  html_clear_context(context);
  let root = app_shared_mobile_default_bible_font_size(context);
  let frame = app_shared_bar_content_root_sticky_padded(root);
  let bar = property_get(frame, "bar");
  let content = property_get(frame, "content");
  html_div_text_bold(bar, "The Bible in pictures");
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
  let chapters = bible_glyph_chapters();
  let traditions = app_emoji_bible_traditions(tradition);
  for (let chapter of chapters) {
    html_div_text_bold(content, chapter.reference);
    if (key_shown) {
      let rows = await bible_glyph_chapter_rosetta_verses(
        chapter.chapter_code,
        traditions,
      );
      for (let row of rows) {
        app_emoji_bible_verse_key_draw(content, row);
      }
      continue;
    }
    bible_glyph_chapter_draw_html(content, chapter.chapter_code, traditions);
  }
}
