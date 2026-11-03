import { arguments_assert } from "./arguments_assert.mjs";
import { or } from "./or.mjs";
import { bible_glyph_characters_lookup } from "./bible_glyph_characters_lookup.mjs";
import { bible_glyph_chapter_literal_fetched } from "./bible_glyph_chapter_literal_fetched.mjs";
import { not } from "./not.mjs";
import { bible_glyph_chapter_draw_html } from "./bible_glyph_chapter_draw_html.mjs";
import { bible_glyph_chapter_built_fetched } from "./bible_glyph_chapter_built_fetched.mjs";
import { bible_glyph_chapter_rosetta_verses } from "./bible_glyph_chapter_rosetta_verses.mjs";
import { app_bible_emoji_literal_rosetta_rows } from "./app_bible_emoji_literal_rosetta_rows.mjs";
import { app_emoji_bible_verse_key_draw } from "./app_emoji_bible_verse_key_draw.mjs";
import { bible_glyph_words_tap_listen } from "./bible_glyph_words_tap_listen.mjs";
export async function app_bible_emoji_chapter_body(
  content,
  chapter_code,
  traditions,
  key_shown,
  english_shown,
  literal_shown,
) {
  arguments_assert(arguments, 6);
  ("One chapter of the picture Bible put on the page - either the pictures on their own, or every verse with a reading of it underneath.");
  ("$plain chapter_code");
  ("the code is a chapter's own, spelled the way the book divisions spell it. It names a chapter to draw and nothing that runs.");
  ("THE TWO ARE ONE UNIT RATHER THAN A CHOICE THE CALLER MAKES, because they are one question - what a chapter looks like here - and while it was answered in two places the two places were free to drift.");
  ("THERE ARE TWO WAYS TO ASK FOR A READING AND ONE WAY OF DRAWING ONE. The whole key stacks every band under the verse; the English on its own is that one band. Either answer reads the same lines off the same chapter, so either answer takes the same road, and what the reader asked for is passed on rather than decided again at the bottom.");
  ("THIS IS THE ONE PLACE A CHAPTER IS SENT FOR, and the two ways of showing it are handed what came back. Both used to take a code and look the chapter up themselves, which meant holding all twenty five to find one, so opening any chapter downloaded the whole picture Bible - and the index, which draws no chapter at all, downloaded it too.");
  ("It is sent for before the choice between the two rather than inside each of them, because both need the same chapter and the choice is only about what is drawn from it. Fetching in each branch would be the same round trip written twice, and the second copy is the one that goes stale.");
  ("The round trip lands in front of a chapter and never in front of the index, because a code only reaches here once a reader has asked for one. What that reader is waiting for is a page of pictures that is itself the larger part of the wait, so the fetch is hidden inside a cost they were already paying.");
  ("The chapter is a BUILT one: every verse of it, with its pictures looked up from the table this page was built with and its two known lines kept beside its words, so every verse has a key.");
  ("THE ORIGINAL ORDER IS A THIRD WAY OF DRAWING THE PICTURES, and the original and the English lines go under it the same as under the English order: every original word and every piece welded onto it is a picture, in the original's order, and the lines are read off the built chapter, the only one that keeps them. Measured 2026-11-01, the English button did nothing in the original order, because that order once drew alone. Tapping a picture still shows the original word it came from.");
  let reading_shown = or(key_shown, english_shown);
  let lookup = bible_glyph_characters_lookup(traditions);
  if (literal_shown) {
    let literal = await bible_glyph_chapter_literal_fetched(chapter_code);
    if (not(reading_shown)) {
      bible_glyph_chapter_draw_html(content, literal, traditions);
      return;
    }
    let built = await bible_glyph_chapter_built_fetched(chapter_code);
    let built_rows = await bible_glyph_chapter_rosetta_verses(
      built,
      traditions,
    );
    let literal_rows = app_bible_emoji_literal_rosetta_rows(
      literal,
      built_rows,
    );
    for (let row of literal_rows) {
      app_emoji_bible_verse_key_draw(
        content,
        row,
        key_shown,
        english_shown,
        lookup,
        chapter_code,
      );
    }
    bible_glyph_words_tap_listen(content, chapter_code, lookup);
    return;
  }
  let chapter = await bible_glyph_chapter_built_fetched(chapter_code);
  if (reading_shown) {
    let rows = await bible_glyph_chapter_rosetta_verses(chapter, traditions);
    for (let row of rows) {
      app_emoji_bible_verse_key_draw(
        content,
        row,
        key_shown,
        english_shown,
        lookup,
        chapter_code,
      );
    }
    bible_glyph_words_tap_listen(content, chapter_code, lookup);
    return;
  }
  bible_glyph_chapter_draw_html(content, chapter, traditions);
}
