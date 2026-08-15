import { git_history_heavy_absent } from "./git_history_heavy_absent.mjs";
import { git_history_heavy_absent_baseline_growth_assert } from "./git_history_heavy_absent_baseline_growth_assert.mjs";
import { git_history_heavy_absent_baseline_path } from "./git_history_heavy_absent_baseline_path.mjs";
import { baseline_known_write } from "./baseline_known_write.mjs";
export async function git_history_heavy_absent_baseline_write() {
  "Rewrite this ratchet's record from the large forgotten paths the history carries right now. For seeding it once, and for shrinking it after a rewrite has taken one out - never for blessing a new one, which is the one thing the gate exists to refuse.";
  let known = await git_history_heavy_absent();
  await git_history_heavy_absent_baseline_growth_assert(known);
  let path = git_history_heavy_absent_baseline_path();
  let r = await baseline_known_write(known, path);
  return r;
}
