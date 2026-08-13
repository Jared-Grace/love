import { baseline_growth_assert_generic } from "./baseline_growth_assert_generic.mjs";
import { gloss_back_references_baseline_path } from "./gloss_back_references_baseline_path.mjs";
import { gloss_back_references_counts_versus_baseline } from "./gloss_back_references_counts_versus_baseline.mjs";
export async function gloss_back_references_baseline_growth_assert(counts) {
  "Refuse to record a gloss store carrying more pointing explanations than the record already held.";
  "A ratchet that can be rewritten in both directions is not a ratchet, and the rewrite is what somebody reaches for at the one moment the gate is red - which is the moment it is doing its work. Writing the record down again is for banking a repair, never for blessing a store that has gone backwards.";
  let path = gloss_back_references_baseline_path();
  await baseline_growth_assert_generic(
    counts,
    path,
    gloss_back_references_counts_versus_baseline,
    "these gloss stores point the reader further up in more places than the record holds - repair the explanations rather than recording the higher number as known",
  );
}
