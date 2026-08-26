import { bible_glyph_chapters_collision_marks_baseline_path } from "./bible_glyph_chapters_collision_marks_baseline_path.mjs";
import { baseline_known_growth_assert } from "./baseline_known_growth_assert.mjs";
export async function bible_glyph_chapters_collision_marks_baseline_growth_assert(
  known,
) {
  "Refuse to record an undecided mark the baseline did not already hold. A ratchet that can be rewritten in both directions is not a ratchet, and the rewrite would be reached for at exactly the moment the gate went red, which is the moment it was doing its job.";
  "The first seeding has no file to compare against and is allowed, and so is any rewrite that only drops names.";
  let path = bible_glyph_chapters_collision_marks_baseline_path();
  await baseline_known_growth_assert(
    known,
    path,
    "recording these as known would bless a fresh mark that nobody can tell apart - these verses draw a picture two roots share, in a place where neither the interlinear nor the order of the words says which root was meant - write the word in plain English instead, or draw as many marks as the original has words so the two pair off",
  );
}
