import { arguments_assert } from "./arguments_assert.mjs";
import { bible_chapter_testament_name } from "./bible_chapter_testament_name.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
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
  ("A word that knows the spelling it was written in, from the span drawn round it, hands that spelling on as well, so the overlay can show and say it; a word drawn without one hands on null. How the word is said rides on the same span and is handed on the same way.");
  ("A TAP WHILE THE MEANINGS ARE STILL ON THEIR WAY IS IGNORED. The first tap is already going to open an overlay, and a reader who taps again because nothing seemed to happen would otherwise get a second one stacked over it, which one tap then closes and leaves the other behind.");
  let testament_name = bible_chapter_testament_name(chapter_code);
  let meanings = null;
  let opening = false;
  async function on_tap(event) {
    let group = event.target.closest("[data-glyphs]");
    if (equal(group, null)) {
      return;
    }
    if (opening) {
      return;
    }
    let names = group.dataset.glyphs.split("+");
    if (equal(meanings, null)) {
      opening = true;
      let tables = await import("./bible_glyph_testament_meanings.mjs");
      meanings = tables.bible_glyph_testament_meanings(testament_name);
      opening = false;
    }
    let spelled = group.closest("[data-original]");
    let original = null;
    let sound = null;
    let b = equal(spelled, null);
    if (not(b)) {
      original = spelled.dataset.original;
      sound = spelled.dataset.sound ?? null;
    }
    bible_glyph_group_overlay_open(names, lookup, meanings, original, sound);
  }
  html_on(parent, "click", on_tap);
}
