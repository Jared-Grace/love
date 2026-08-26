import { bible_glyph_chapters_verse_marks_underdrawn_names } from "./bible_glyph_chapters_verse_marks_underdrawn_names.mjs";
import { bible_glyph_chapters_verse_marks_underdrawn_baseline_growth_assert } from "./bible_glyph_chapters_verse_marks_underdrawn_baseline_growth_assert.mjs";
import { bible_glyph_chapters_verse_marks_underdrawn_baseline_path } from "./bible_glyph_chapters_verse_marks_underdrawn_baseline_path.mjs";
import { baseline_known_write } from "./baseline_known_write.mjs";
export async function bible_glyph_chapters_verse_marks_underdrawn_baseline_write() {
  "Rewrite this ratchet's record from what offends right now. For seeding it once, and for shrinking it after a repair - never for blessing a new offence, which is the one thing the gate exists to refuse.";
  let known = await bible_glyph_chapters_verse_marks_underdrawn_names();
  await bible_glyph_chapters_verse_marks_underdrawn_baseline_growth_assert(
    known,
  );
  let path = bible_glyph_chapters_verse_marks_underdrawn_baseline_path();
  let r = await baseline_known_write(known, path);
  return r;
}
