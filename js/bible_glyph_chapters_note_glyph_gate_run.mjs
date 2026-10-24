import { arguments_assert } from "./arguments_assert.mjs";
import { bible_glyph_chapters_note_glyphs_undrawn } from "./bible_glyph_chapters_note_glyphs_undrawn.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
export async function bible_glyph_chapters_note_glyph_gate_run() {
  arguments_assert(arguments, 0);
  ("Gate: every picture a chapter note marks by name is still drawn by that chapter. Throws so the dispatcher seam exits nonzero.");
  ("Only what a note marks is held to this. A picture named in plain words is narrative, and telling a stale one from a deliberate one needs a reader, not a rule - which is why the marker exists.");
  let undrawn = await bible_glyph_chapters_note_glyphs_undrawn();
  for (let one of undrawn) {
    console.log("undrawn  " + one.glyph + "  in  " + one.chapter_code);
  }
  if (list_empty_not_is(undrawn)) {
    throw new Error(
      "chapter note glyph gate: " +
        undrawn.length +
        " marked pictures are no longer drawn by their chapter - was the chapter redrawn, or is the marker a typo?",
    );
  }
  let r = {
    undrawn: 0,
  };
  return r;
}
