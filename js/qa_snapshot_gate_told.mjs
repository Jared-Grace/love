import { property_get } from "./property_get.mjs";
import { text_combine } from "./text_combine.mjs";
import { property_set } from "./property_set.mjs";
import { qa_gate_solo_total_ms } from "./qa_gate_solo_total_ms.mjs";
import { load_average_recent } from "./load_average_recent.mjs";
import { qa_shares_taken_text } from "./qa_shares_taken_text.mjs";
import { qa_shard_count } from "./qa_shard_count.mjs";
import { numbers_below } from "./numbers_below.mjs";
import { list_map_unordered_async } from "./list_map_unordered_async.mjs";
import { qa_snapshot_shard_told } from "./qa_snapshot_shard_told.mjs";
import { qa_snapshot_shards_combined } from "./qa_snapshot_shards_combined.mjs";
export async function qa_snapshot_gate_told(folder) {
  "Asks the frozen copy its questions, as several runs side by side, and brings back what they all said";
  "One process answers one question at a time however many questions it is given at once, so the whole set asked of a single process took as long as asking each gate on its own and left every processor but one idle. Divided into shares, one process each, the wait is the slowest share";
  "Dividing costs nothing because the gates share nothing: each one was measured alone in its own process and again in one process alongside all the others, and the heavy ones took the same time both ways, so there is no work being done once that would have to be done again by each share";
  "What each share took is put in with everything the shares said, because this is the one place holding all of them side by side, and what they said is printed whole once both halves of the run are finished";
  "It goes into what was said and never into what was found, which is what keeps it out of the shared record. An answer kept there has to be about the code; how busy this machine was on one afternoon is about neither the code nor anybody who reads the record later";
  let count = await qa_shard_count();
  let indexes = numbers_below(count);
  async function lambda(index) {
    let told = await qa_snapshot_shard_told(folder, index, count);
    return told;
  }
  let solo_ms = await qa_gate_solo_total_ms();
  let load_before = await load_average_recent();
  let results = await list_map_unordered_async(indexes, lambda);
  let load_after = await load_average_recent();
  let taken = qa_shares_taken_text(results, solo_ms, load_before, load_after);
  let r = qa_snapshot_shards_combined(results);
  let said = property_get(r, "printed");
  let value = text_combine(said, taken);
  property_set(r, "printed", value);
  return r;
}
