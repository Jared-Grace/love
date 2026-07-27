import { baseline_known_read } from "./baseline_known_read.mjs";
import { color_near_miss_baseline_path } from "./color_near_miss_baseline_path.mjs";
export async function color_near_miss_baseline_read() {
  "the near miss colour pairs the repo already carried when the rule was written. The gate measures against this rather than against zero, so the rule binds new code today instead of waiting on a sweep of every old file — and the list only ever shrinks, because a pair it does not list fails.";
  let path = color_near_miss_baseline_path();
  let known = await baseline_known_read(path);
  return known;
}
