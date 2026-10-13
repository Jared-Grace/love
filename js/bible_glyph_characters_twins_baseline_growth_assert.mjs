import { bible_glyph_characters_twins_baseline_path } from "./bible_glyph_characters_twins_baseline_path.mjs";
import { baseline_known_growth_assert } from "./baseline_known_growth_assert.mjs";
export async function bible_glyph_characters_twins_baseline_growth_assert(
  known,
) {
  "$plain known";
  "the names are the record about to be written, a list of words. Nothing in them runs.";
  "Refuse to record a twin the baseline did not already hold. The rewrite would be reached for at exactly the moment the gate went red, which is the moment it was doing its job. The first seeding, and any rewrite that only drops names, are allowed.";
  let path = bible_glyph_characters_twins_baseline_path();
  await baseline_known_growth_assert(
    known,
    path,
    "recording this as known would bless a second name drawing a character another name already draws - use the existing name instead, or pick a different character",
  );
}
