import { arguments_assert } from "./arguments_assert.mjs";
import { bible_glyph_chapter_fetched } from "./bible_glyph_chapter_fetched.mjs";
import { bible_glyph_chapter_rosetta_verses } from "./bible_glyph_chapter_rosetta_verses.mjs";
import { app_emoji_bible_verse_key_draw } from "./app_emoji_bible_verse_key_draw.mjs";
import { bible_glyph_chapter_draw_html } from "./bible_glyph_chapter_draw_html.mjs";
export async function app_emoji_bible_chapter_body(
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
  ("THIS IS THE ONE PLACE A CHAPTER IS SENT FOR, and the two ways of showing it are handed what came back. Both used to take a code and look the chapter up themselves, which meant holding all twenty five to find one, so opening any chapter downloaded the whole picture Bible - and the index, which draws no chapter at all, downloaded it too.");
  ("It is sent for before the choice between the two rather than inside each of them, because both need the same chapter and the choice is only about what is drawn from it. Fetching in each branch would be the same round trip written twice, and the second copy is the one that goes stale.");
  ("The round trip lands in front of a chapter and never in front of the index, because a code only reaches here once a reader has asked for one. What that reader is waiting for is a page of pictures that is itself the larger part of the wait, so the fetch is hidden inside a cost they were already paying.");
  ("A verse the picture chapter has not reached yet has no key, because the key is built by matching the hand-written chapter against the downloaded interlinear verse by verse. Half-written chapters are the normal state of this work and must not stop the verses that ARE written from being read.");
  let chapter = await bible_glyph_chapter_fetched(chapter_code);
  if (key_shown) {
    let rows = bible_glyph_chapter_rosetta_verses(chapter, traditions);
    for (let row of rows) {
      app_emoji_bible_verse_key_draw(content, row);
    }
    return;
  }
  bible_glyph_chapter_draw_html(content, chapter, traditions);
}
