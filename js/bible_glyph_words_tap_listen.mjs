import { equal } from "./equal.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { bible_chapter_testament_name } from "./bible_chapter_testament_name.mjs";
import { bible_glyph_group_overlay_open } from "./bible_glyph_group_overlay_open.mjs";
import { html_on } from "./html_on.mjs";
export function bible_glyph_words_tap_listen(parent, chapter_code, lookup) {
  arguments_assert(arguments, 3);
  ("$plain chapter_code");
  ("$plain lookup");
  ("the code names the chapter drawn there, spelled the way the book divisions spell it, and the lookup is a glyph name to character table. Both are data and neither runs.");
  ("A tap on any drawn word of a chapter opens that word large, with its meaning.");
  ("ONE LISTENER FOR THE WHOLE CHAPTER, NOT ONE PER WORD. A chapter is hundreds of words and each one already says which pictures it is, so a tap is asked where it landed and the word answers for itself.");
  ("THE MEANINGS ARE SENT FOR AT THE FIRST TAP, behind a fetch of their own, because they read the root tables and a page that draws no chapter must never carry those. By the time a chapter is on the screen its drawing has already sent for the same tables, so the wait is nothing.");
  let testament_name = bible_chapter_testament_name(chapter_code);
  let meanings = null;
  async function on_tap(event) {
    let group = event.target.closest("[data-glyphs]");
    if (equal(group, null)) {
      return;
    }
    let names = group.dataset.glyphs.split("+");
    if (equal(meanings, null)) {
      let tables = await import("./bible_glyph_testament_meanings.mjs");
      meanings = tables.bible_glyph_testament_meanings(testament_name);
    }
    bible_glyph_group_overlay_open(names, lookup, meanings);
  }
  html_on(parent, "click", on_tap);
}
