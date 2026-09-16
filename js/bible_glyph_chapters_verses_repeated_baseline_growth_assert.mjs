import { bible_glyph_chapters_verses_repeated_baseline_path } from "./bible_glyph_chapters_verses_repeated_baseline_path.mjs";
import { baseline_known_growth_assert } from "./baseline_known_growth_assert.mjs";
export async function bible_glyph_chapters_verses_repeated_baseline_growth_assert(
  known,
) {
  "Refuse to record a repeat the baseline did not already hold. A ratchet that can be rewritten in both directions is not a ratchet, and the rewrite would be reached for at exactly the moment the gate went red, which is the moment it was doing its job.";
  "The first seeding has no file to compare against and is allowed, and so is any rewrite that only drops names.";
  let path = bible_glyph_chapters_verses_repeated_baseline_path();
  await baseline_known_growth_assert(
    known,
    path,
    "recording these as known would bless a lost verse rather than restore it - these picture Bible verses draw exactly what an earlier verse of the same chapter draws, which usually means one sentence was written into two slots and the line the first slot should have carried is gone - read the chapter's glossed draft at both numbers and write the verse that is missing",
  );
}
