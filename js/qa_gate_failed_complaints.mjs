import { qa_gate_failed_halves } from "./qa_gate_failed_halves.mjs";
import { list_map } from "./list_map.mjs";
import { list_from_index } from "./list_from_index.mjs";
import { list_join } from "./list_join.mjs";
export function qa_gate_failed_complaints(output) {
  "What each complaining gate actually said, read back out of what the run printed, without the gate's own name in front of it";
  "The name is dropped on purpose. Every gate is itself a function of this repo, so a complaint read whole would name the gate as one of the things at fault, and the reader would be pointed at whoever last edited the gate rather than at whoever wrote the thing it is complaining about.";
  "A colon inside the complaint is put back, because a gate that hands over a piece of its own reading has one in it more often than not.";
  let all = qa_gate_failed_halves(output);
  function complaint_of(halves) {
    let said = list_from_index(halves, 1);
    let complaint = list_join(said, ":");
    return complaint;
  }
  let complaints = list_map(all, complaint_of);
  return complaints;
}
