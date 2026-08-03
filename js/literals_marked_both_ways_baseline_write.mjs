import { literals_marked_both_ways_names } from "./literals_marked_both_ways_names.mjs";
import { literals_marked_both_ways_baseline_path } from "./literals_marked_both_ways_baseline_path.mjs";
import { baseline_known_growth_assert } from "./baseline_known_growth_assert.mjs";
import { baseline_known_write } from "./baseline_known_write.mjs";
export async function literals_marked_both_ways_baseline_write() {
  "Rewrite the both-ways baseline from what the repo carries right now. For seeding the ratchet once, and for shrinking it after one of the words has been settled - never for blessing a new one, which is the one thing the gate exists to refuse.";
  "Settling one means choosing which of its two markers is lying and deleting that one, which is a judgement about whether anything here can still move what the word addresses. Nothing can make that choice for the reader, so the repair is always by hand and this is only what records that it happened.";
  let known = await literals_marked_both_ways_names();
  let path = literals_marked_both_ways_baseline_path();
  await baseline_known_growth_assert(
    known,
    path,
    "these words are marked both frozen and as a reference now and were not before - one of the two markers is lying, so settle which and delete it rather than recording the contradiction as known",
  );
  let r = await baseline_known_write(known, path);
  return r;
}
