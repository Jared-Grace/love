import { app_ceb_bible_gloss_roots_shallower_baseline_path } from "./app_ceb_bible_gloss_roots_shallower_baseline_path.mjs";
import { baseline_known_growth_assert } from "./baseline_known_growth_assert.mjs";
export async function app_ceb_bible_gloss_roots_shallower_baseline_growth_assert(
  known,
) {
  "Refuse to record a pair of roots the record did not already hold.";
  "A ratchet that can be rewritten in both directions is not a ratchet, and the rewrite is what somebody reaches for at the one moment the gate is red - which is the moment it is doing its work. Writing the record again is for banking a repair, never for blessing an explanation that has just started naming a built word as its root.";
  let path = app_ceb_bible_gloss_roots_shallower_baseline_path();
  await baseline_known_growth_assert(
    known,
    path,
    "recording these would bless a fresh disagreement rather than repair it - write the explanation out again with the root the dictionary gives, or say plainly that the word it names is a further layer",
  );
}
