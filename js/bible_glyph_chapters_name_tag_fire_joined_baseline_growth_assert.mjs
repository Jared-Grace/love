import { bible_glyph_chapters_name_tag_fire_joined_baseline_path } from "./bible_glyph_chapters_name_tag_fire_joined_baseline_path.mjs";
import { baseline_known_growth_assert } from "./baseline_known_growth_assert.mjs";
export async function bible_glyph_chapters_name_tag_fire_joined_baseline_growth_assert(
  known,
) {
  "Refuse to record a verse the baseline did not already hold. A ratchet that can be rewritten in both directions is not a ratchet, and the rewrite would be reached for at exactly the moment the gate went red, which is the moment it was doing its job.";
  "The first seeding has no file to compare against and is allowed, and so is any rewrite that only drops names.";
  let path = bible_glyph_chapters_name_tag_fire_joined_baseline_path();
  await baseline_known_growth_assert(
    known,
    path,
    "recording this would bless a chapter that ate the word between the LORD and his God rather than repair it - open the verse and read the English, and if the English really is the LORD God with nothing between them then the picture is right and the entry belongs here",
  );
}
