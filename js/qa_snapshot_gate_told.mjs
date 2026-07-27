import { qa_shard_count } from "./qa_shard_count.mjs";
import { numbers_below } from "./numbers_below.mjs";
import { list_map_unordered_async } from "./list_map_unordered_async.mjs";
import { qa_snapshot_shard_told } from "./qa_snapshot_shard_told.mjs";
import { qa_snapshot_shards_combined } from "./qa_snapshot_shards_combined.mjs";
export async function qa_snapshot_gate_told(folder) {
  "Asks the frozen copy its questions, as several runs side by side, and brings back what they all said";
  "One process answers one question at a time however many questions it is given at once, so the whole set asked of a single process took as long as asking each gate on its own and left every processor but one idle. Divided into shares, one process each, the wait is the slowest share";
  "Dividing costs nothing because the gates share nothing: each one was measured alone in its own process and again in one process alongside all the others, and the heavy ones took the same time both ways, so there is no work being done once that would have to be done again by each share";
  let count = await qa_shard_count();
  let indexes = numbers_below(count);
  async function lambda(index) {
    let told = await qa_snapshot_shard_told(folder, index, count);
    return told;
  }
  let results = await list_map_unordered_async(indexes, lambda);
  let r = qa_snapshot_shards_combined(results);
  return r;
}
