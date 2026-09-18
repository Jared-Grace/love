import { arguments_assert } from "./arguments_assert.mjs";
import { bible_glyph_chapters_verse_marks_underdrawn } from "./bible_glyph_chapters_verse_marks_underdrawn.mjs";
import { bible_glyph_chapters_verse_marks_offenders_word_draw } from "./bible_glyph_chapters_verse_marks_offenders_word_draw.mjs";
export async function bible_glyph_chapters_verse_marks_underdrawn_word_draw() {
  "Draws the mark on every underdrawn verse where the interlinear and the English agree on one single word, and hands back the verses it refused to settle.";
  "THIS IS THE ASKER AND THE JUDGMENT IS NEXT DOOR (2026-09-18). It names one reading - the shrink-only underdrawn one, which walks the glyphs a verse already drew at least once - and hands what that reading finds to the function that decides where each missing mark goes. Everything this used to do itself lives there now, unchanged, and the reason for the split is written in its prose: a second reading with a different bound can now reach the same judgment without this reading having to widen, and widening a reading that a baseline ratchets against would move a gate.";
  arguments_assert(arguments, 0);
  let offenders = await bible_glyph_chapters_verse_marks_underdrawn();
  let r = await bible_glyph_chapters_verse_marks_offenders_word_draw(offenders);
  return r;
}
