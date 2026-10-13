import { bible_glyph_characters_twins_names } from "./bible_glyph_characters_twins_names.mjs";
import { bible_glyph_characters_twins_baseline_growth_assert } from "./bible_glyph_characters_twins_baseline_growth_assert.mjs";
import { bible_glyph_characters_twins_baseline_path } from "./bible_glyph_characters_twins_baseline_path.mjs";
import { baseline_known_write } from "./baseline_known_write.mjs";
export async function bible_glyph_characters_twins_baseline_write() {
  "Rewrite this ratchet's record from the twins the alphabet holds right now. For seeding it once, and for shrinking it after a twin name has been removed - never for blessing a new twin.";
  let known = bible_glyph_characters_twins_names();
  await bible_glyph_characters_twins_baseline_growth_assert(known);
  let path = bible_glyph_characters_twins_baseline_path();
  let r = await baseline_known_write(known, path);
  return r;
}
