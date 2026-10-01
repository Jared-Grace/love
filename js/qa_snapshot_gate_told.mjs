import { qa_shard_count } from "./qa_shard_count.mjs";
import { numbers_below } from "./numbers_below.mjs";
import { qa_snapshot_shard_told } from "./qa_snapshot_shard_told.mjs";
import { qa_gate_solo_total_ms } from "./qa_gate_solo_total_ms.mjs";
import { load_average_recent } from "./load_average_recent.mjs";
import { list_map_unordered_async } from "./list_map_unordered_async.mjs";
import { qa_shares_taken_text } from "./qa_shares_taken_text.mjs";
import { qa_shares_taken_row } from "./qa_shares_taken_row.mjs";
import { qa_shares_taken_log_add } from "./qa_shares_taken_log_add.mjs";
import { catch_null_async } from "./catch_null_async.mjs";
import { qa_snapshot_shards_combined } from "./qa_snapshot_shards_combined.mjs";
import { property_get } from "./property_get.mjs";
import { text_combine } from "./text_combine.mjs";
import { property_set } from "./property_set.mjs";
export async function qa_snapshot_gate_told(folder) {
  "Asks the frozen copy its questions, as several runs side by side, and brings back what they all said";
  "One process answers one question at a time however many questions it is given at once, so the whole set asked of a single process took as long as asking each gate on its own and left every processor but one idle. Divided into shares, one process each, the wait is the slowest share";
  "Dividing costs nothing because the gates share nothing: each one was measured alone in its own process and again in one process alongside all the others, and the heavy ones took the same time both ways, so there is no work being done once that would have to be done again by each share";
  "What each share took is put in with everything the shares said, because this is the one place holding all of them side by side, and what they said is printed whole once both halves of the run are finished";
  "It goes into what was said and never into what was found, which is what keeps it out of the shared record. An answer kept there has to be about the code; how busy this machine was on one afternoon is about neither the code nor anybody who reads the record later";
  "★ THE SAME NUMBERS ARE ALSO KEPT AS A ROW IN A LOCAL HISTORY, WHICH DOES NOT WEAKEN THE LINE ABOVE BUT IS THE REASON THE LINE NEEDED A SECOND HALF. Keeping machine weather out of the shared record is right, and nothing here has moved into the record. What was wrong was that the numbers were then let go entirely, so every run measured itself against nothing. The duration of this set of questions moves twentyfold with how busy the machine is - about two and a half minutes split across a quiet machine, sixteen minutes taken alone, fifty three when three runs contend - so a single reading cannot be interpreted at all, and a reader who takes one is reading a number that could mean any of the three.";
  "★ MEASURED, BY THE READING GOING WRONG. Two runs timed at about fifty two minutes each were read as proof that the quarter of an hour this repo states everywhere was false. It was not false; fifty two was the contended case, agreeing with the fifty three already written down one layer up. The disagreement was manufactured by comparing a contended reading against a solo one, and it got as far as a wrong note being written into memory. A history is what makes that comparison possible instead of invented.";
  "★ THE WRITING IS WRAPPED SO THAT IT CAN COST THE NOTE AND NEVER THE RUN. By the time it is reached the whole of the expensive work is done and the answer is in hand, so a full disk or a half-written file must not turn a green run into a thrown one. That is why it is the catching one around it rather than a plain call, and the wrapping is load-bearing rather than tidiness.";
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
  let row = qa_shares_taken_row(results, solo_ms, load_before, load_after);
  async function logging() {
    let written = await qa_shares_taken_log_add(row);
    return written;
  }
  await catch_null_async(logging);
  let r = qa_snapshot_shards_combined(results);
  let said = property_get(r, "printed");
  let value = text_combine(said, taken);
  property_set(r, "printed", value);
  ("It is also handed back on its own, and that is what makes it reachable at all. Everything the gates said is shown only when one of them went red, which is right for hundreds of lines nobody reads on a green run - but these dozen lines are the only place the run says whether the work was divided well, and a run that divided it badly and passed is exactly the run that needs to say so. Put in the said pile alone, the number was visible on failing runs only, where whoever is reading is reading the failures.");
  property_set(r, "shares", taken);
  return r;
}
