import { arguments_assert } from "./arguments_assert.mjs";
import { bible_glyph_chapter_rosetta_verses } from "./bible_glyph_chapter_rosetta_verses.mjs";
import { app_emoji_bible_verse_key_draw } from "./app_emoji_bible_verse_key_draw.mjs";
import { bible_glyph_chapter_draw_html } from "./bible_glyph_chapter_draw_html.mjs";
export function app_emoji_bible_chapter_body(
  content,
  chapter_code,
  traditions,
  key_shown,
) {
  arguments_assert(arguments, 4);
  ("One chapter of the picture Bible put on the page - either the pictures on their own, or every verse with its key underneath it.");
  ("$plain chapter_code");
  ("the code is a chapter's own, spelled the way the book divisions spell it. It names a chapter to draw and nothing that runs.");
  ("THE TWO ARE ONE UNIT RATHER THAN A CHOICE THE CALLER MAKES, because they are one question - what a chapter looks like here - and while it was answered in two places the two places were free to drift.");
  ("A verse the picture chapter has not reached yet has no key, because the key is built by matching the hand-written chapter against the downloaded interlinear verse by verse. Half-written chapters are the normal state of this work and must not stop the verses that ARE written from being read.");
  if (key_shown) {
    let rows = bible_glyph_chapter_rosetta_verses(chapter_code, traditions);
    for (let row of rows) {
      app_emoji_bible_verse_key_draw(content, row);
    }
    return;
  }
  bible_glyph_chapter_draw_html(content, chapter_code, traditions);
}
