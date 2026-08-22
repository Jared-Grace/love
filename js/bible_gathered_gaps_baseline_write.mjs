import { baseline_known_write } from "./baseline_known_write.mjs";
import { bible_gathered_gaps_named } from "./bible_gathered_gaps_named.mjs";
import { bible_gathered_gaps_baseline_path } from "./bible_gathered_gaps_baseline_path.mjs";
import { baseline_known_growth_assert } from "./baseline_known_growth_assert.mjs";
export async function bible_gathered_gaps_baseline_write() {
  "Rewrite the record of holes the gathered corpus has from what it carries right now. For seeding it once and for shrinking it after a span has been gathered - never for blessing a new hole, which is the one thing the gate exists to refuse.";
  let told = await bible_gathered_gaps_named();
  let path = bible_gathered_gaps_baseline_path();
  await baseline_known_growth_assert(
    told.names,
    path,
    "the corpus has holes now that it did not have before - gather the verses rather than recording the gap as known",
  );
  let r = await baseline_known_write(told.names, path);
  return r;
}
