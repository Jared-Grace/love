import { baseline_known_write } from "./baseline_known_write.mjs";
import { color_near_miss_baseline_growth_assert } from "./color_near_miss_baseline_growth_assert.mjs";
import { color_near_miss_baseline_path } from "./color_near_miss_baseline_path.mjs";
import { colors_near_miss_pairs } from "./colors_near_miss_pairs.mjs";
export async function color_near_miss_baseline_write() {
  "rewrite the colour ratchet from the near misses the repo carries right now. For seeding it once, and for shrinking it after a family has been collapsed onto one shared colour — never for blessing a new near miss, which is the one thing the gate exists to refuse.";
  let known = await colors_near_miss_pairs();
  await color_near_miss_baseline_growth_assert(known);
  let path = color_near_miss_baseline_path();
  let r = await baseline_known_write(known, path);
  return r;
}
