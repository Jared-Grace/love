import { function_paths_frozen_enable } from "./function_paths_frozen_enable.mjs";
import { qa_gates_told } from "./qa_gates_told.mjs";
import { qa_shard_peak_print } from "./qa_shard_peak_print.mjs";
import { property_get } from "./property_get.mjs";
import { greater_than } from "./greater_than.mjs";
import { qa_gates_run_failed_prefix } from "./qa_gates_run_failed_prefix.mjs";
import { qa_gates_run_failed_suffix } from "./qa_gates_run_failed_suffix.mjs";
export async function qa_gates_run(gates) {
  "Asks every gate in a list and complains if any of them do";
  "Which gates to ask is the caller's to choose, because not every gate answers a question about the code - one asks the machine and two ask where the folder sits, and none of the three can be asked of a copy";
  "Both callers run inside the frozen copy, so this is the place to say that the folders cannot change: nothing may be written there while it is read, and the neighbours are frozen beside it. Saying it lets where each function lives be worked out once per name rather than once per asking, which was one look on disk per repository, nearly thirty-two thousand of them for every gate in the list";
  "It is safe to say here without checking who is asking, because saying it is not the same as it being believed - the saying is looked at where it lands, and a process standing in the folder people are editing is refused. So a gate run by hand from there is slow, never wrong";
  "The closing complaint is worded from a name rather than spelled out here, because it is read as well as written. Whoever asked for this share reads it back to tell a run that asked every gate from a run whose process stopped in the middle of saying which ones complained, and the two look identical in everything else they printed. Spelled in both places, one of them could be reworded and the other left behind, and the reader would then answer no about every run there is";
  "Both ends of the wording come from names for that same reason. The word after the list is no more decoration than the words before it - the reader that takes these names back out strips it off again, so a run that stopped saying it and a reader still expecting it would hand back a name nothing answers to";
  "How much this process held at its highest is said between the gates answering and the complaint being thrown, and both halves of that placing matter. After the gates, because the highest moment is somewhere inside them and the number is only whole once they are done; before the throw, because a share that complained is the one whose size somebody came asking about, and a throw would carry the printing away with it.";
  "It is said whichever caller asked, not only the shares. How many shares a machine can carry is worked out by dividing the room by what one share holds, and that second figure was measured by hand on one afternoon and has been standing ever since. Said on every run, it stops being a remembered measurement and becomes a reading, which is what the figure's own writing asks for.";
  function_paths_frozen_enable();
  let told = await qa_gates_told(gates);
  await qa_shard_peak_print();
  let failed = property_get(told, "failed");
  if (greater_than(failed.length, 0)) {
    throw new Error(
      qa_gates_run_failed_prefix() +
        failed.join(", ") +
        qa_gates_run_failed_suffix(),
    );
  }
  console.log("\nall gates passed");
  let timings = property_get(told, "timings");
  let r = {
    gates: gates.length,
    failed: 0,
    timings: timings,
  };
  return r;
}
