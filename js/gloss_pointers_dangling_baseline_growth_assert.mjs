import { gloss_pointers_dangling_baseline_path } from "./gloss_pointers_dangling_baseline_path.mjs";
import { baseline_growth_assert_generic } from "./baseline_growth_assert_generic.mjs";
import { gloss_store_dangling_versus_baseline } from "./gloss_store_dangling_versus_baseline.mjs";
export async function gloss_pointers_dangling_baseline_growth_assert(counts) {
  "Refuse to record a gloss store sending the reader back to a word met earlier and finding nothing there more often than the record already held.";
  "A ratchet that can be rewritten in both directions is not a ratchet, and the rewrite is what somebody reaches for at the one moment the gate is red - which is the moment it is doing its work. Writing the record down again is for banking a repair, never for blessing a store that has gone backwards.";
  let path = gloss_pointers_dangling_baseline_path();
  await baseline_growth_assert_generic(
    counts,
    path,
    gloss_store_dangling_versus_baseline,
    "these gloss stores send the reader back to a word met earlier and find nothing there more often than the record holds - write out what the word is instead of recording the larger share as known",
  );
}
